from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db, kyc_collection
from models import sql_models
from datetime import datetime

router = APIRouter(prefix="/api/lender", tags=["lender"])


@router.get("/dashboard")
async def get_lender_dashboard(
    current_user: sql_models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get lender profile
    profile = db.query(sql_models.LenderProfile).filter(
        sql_models.LenderProfile.user_id == current_user.id
    ).first()

    # Get active loans
    active_loans = db.query(sql_models.Loan).filter(
        sql_models.Loan.lender_id == current_user.id,
        sql_models.Loan.status == sql_models.LoanStatus.ACTIVE
    ).all()

    # Get KYC status
    kyc_doc = await kyc_collection.find_one({"user_id": current_user.id})

    return {
        "profile": {
            "name": current_user.full_name,
            "bank_balance": profile.bank_balance,
            "total_invested": profile.total_invested,
            "total_earnings": profile.total_earnings,
            "kyc_status": kyc_doc["status"] if kyc_doc else "not_submitted"
        },
        "active_loans": [
            {
                "id": loan.id,
                "amount": loan.amount,
                "interest_rate": loan.interest_rate,
                "remaining": loan.remaining_amount,
                "status": loan.status.value
            }
            for loan in active_loans
        ]
    }


@router.get("/loan-requests")
async def get_loan_requests(
    current_user: sql_models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Verify KYC status
    kyc_doc = await kyc_collection.find_one({"user_id": current_user.id})
    if not kyc_doc or kyc_doc["status"] != "verified":
        raise HTTPException(
            status_code=400, detail="KYC verification required")

    # Get all pending loan requests with borrower information
    requests = db.query(
        sql_models.LoanRequest,
        sql_models.User,
        sql_models.BorrowerProfile
    ).join(
        sql_models.User,
        sql_models.LoanRequest.borrower_id == sql_models.User.id
    ).join(
        sql_models.BorrowerProfile,
        sql_models.User.id == sql_models.BorrowerProfile.user_id
    ).filter(
        sql_models.LoanRequest.status == "pending"
    ).all()

    return [
        {
            "request_id": req.LoanRequest.id,
            "borrower_name": req.User.full_name,
            "amount": req.LoanRequest.amount,
            "interest_rate": req.LoanRequest.interest_rate,
            "duration": req.LoanRequest.duration_months,
            "purpose": req.LoanRequest.purpose,
            "credit_score": req.BorrowerProfile.credit_score
        }
        for req in requests
    ]


@router.post("/loan-requests/{request_id}/fund")
async def fund_loan_request(
    request_id: int,
    current_user: sql_models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Verify KYC status
    kyc_doc = await kyc_collection.find_one({"user_id": current_user.id})
    if not kyc_doc or kyc_doc["status"] != "verified":
        raise HTTPException(
            status_code=400, detail="KYC verification required")

    # Get loan request
    loan_request = db.query(sql_models.LoanRequest).filter(
        sql_models.LoanRequest.id == request_id,
        sql_models.LoanRequest.status == "pending"
    ).first()

    if not loan_request:
        raise HTTPException(status_code=404, detail="Loan request not found")

    # Create new loan
    loan = sql_models.Loan(
        borrower_id=loan_request.borrower_id,
        lender_id=current_user.id,
        amount=loan_request.amount,
        interest_rate=loan_request.interest_rate,
        duration_months=loan_request.duration_months,
        purpose=loan_request.purpose,
        status=sql_models.LoanStatus.ACTIVE,
        remaining_amount=loan_request.amount,
        next_payment_date=datetime.utcnow() + timedelta(days=30)
    )

    # Update loan request status
    loan_request.status = "funded"

    # Update lender profile
    profile = db.query(sql_models.LenderProfile).filter(
        sql_models.LenderProfile.user_id == current_user.id
    ).first()

    profile.bank_balance -= loan_request.amount
    profile.total_invested += loan_request.amount

    db.add(loan)
    db.commit()
    return {"message": "Loan funded successfully"}


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
