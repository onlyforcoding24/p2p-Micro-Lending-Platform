from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from typing import List
from config.database import get_db, kyc_collection
from models import sql_models
from datetime import datetime

router = APIRouter(prefix="/api/borrower", tags=["borrower"])


@router.get("/dashboard")
async def get_borrower_dashboard(
    current_user: sql_models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get borrower profile
    profile = db.query(sql_models.BorrowerProfile).filter(
        sql_models.BorrowerProfile.user_id == current_user.id
    ).first()

    # Get active loans
    active_loans = db.query(sql_models.Loan).filter(
        sql_models.Loan.borrower_id == current_user.id,
        sql_models.Loan.status == sql_models.LoanStatus.ACTIVE
    ).all()

    # Get KYC status
    kyc_doc = await kyc_collection.find_one({"user_id": current_user.id})

    return {
        "profile": {
            "name": current_user.full_name,
            "credit_score": profile.credit_score,
            "kyc_status": kyc_doc["status"] if kyc_doc else "not_submitted"
        },
        "loans": [
            {
                "id": loan.id,
                "amount": loan.amount,
                "remaining": loan.remaining_amount,
                "next_payment": loan.next_payment_date,
                "status": loan.status.value
            }
            for loan in active_loans
        ]
    }


@router.post("/loan-requests")
async def create_loan_request(
    request: LoanRequestCreate,
    current_user: sql_models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Verify KYC status
    kyc_doc = await kyc_collection.find_one({"user_id": current_user.id})
    if not kyc_doc or kyc_doc["status"] != "verified":
        raise HTTPException(
            status_code=400, detail="KYC verification required")

    loan_request = sql_models.LoanRequest(
        borrower_id=current_user.id,
        amount=request.amount,
        interest_rate=request.interest_rate,
        duration_months=request.duration,
        purpose=request.purpose
    )
    db.add(loan_request)
    db.commit()
    db.refresh(loan_request)
    return loan_request


@router.post("/kyc/submit")
async def submit_kyc_documents(
    documents: List[UploadFile] = File(...),
    current_user: sql_models.User = Depends(get_current_user)
):
    document_paths = []  # Store documents in secure storage

    kyc_data = {
        "user_id": current_user.id,
        "documents": document_paths,
        "status": "pending",
        "submitted_at": datetime.utcnow()
    }
    await kyc_collection.insert_one(kyc_data)
    return {"message": "KYC documents submitted successfully"}


@router.get("/available-lenders")
async def get_available_lenders(
    current_user: sql_models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    lenders = db.query(sql_models.User, sql_models.LenderProfile).join(
        sql_models.LenderProfile
    ).filter(
        sql_models.User.user_type == sql_models.UserType.LENDER
    ).all()

    return [
        {
            "id": lender.User.id,
            "name": lender.User.full_name,
            "total_funded": lender.LenderProfile.total_invested,
            "risk_appetite": lender.LenderProfile.risk_appetite
        }
        for lender in lenders
    ]


@router.get("/loan-offers")
async def get_loan_offers(
    current_user: sql_models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    loan_requests = db.query(sql_models.LoanRequest).filter(
        sql_models.LoanRequest.borrower_id == current_user.id,
        sql_models.LoanRequest.status == "pending"
    ).all()
    return loan_requests
