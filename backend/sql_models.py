from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Enum, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
import enum


class UserType(enum.Enum):
    BORROWER = "borrower"
    LENDER = "lender"


class LoanStatus(enum.Enum):
    PENDING = "pending"
    ACTIVE = "active"
    COMPLETED = "completed"
    DEFAULTED = "defaulted"


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    full_name = Column(String)
    user_type = Column(Enum(UserType))
    created_at = Column(DateTime, default=datetime.utcnow)


class BorrowerProfile(Base):
    __tablename__ = "borrower_profiles"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    credit_score = Column(Integer, default=700)
    monthly_income = Column(Float)
    employment_status = Column(String)
    employment_duration = Column(Integer)  # in months


class LenderProfile(Base):
    __tablename__ = "lender_profiles"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    bank_balance = Column(Float, default=0)
    total_invested = Column(Float, default=0)
    total_earnings = Column(Float, default=0)
    risk_appetite = Column(String)


class Loan(Base):
    __tablename__ = "loans"
    id = Column(Integer, primary_key=True)
    borrower_id = Column(Integer, ForeignKey("users.id"))
    lender_id = Column(Integer, ForeignKey("users.id"))
    amount = Column(Float)
    interest_rate = Column(Float)
    duration_months = Column(Integer)
    purpose = Column(String)
    status = Column(Enum(LoanStatus))
    created_at = Column(DateTime, default=datetime.utcnow)
    next_payment_date = Column(DateTime)
    remaining_amount = Column(Float)


class LoanRequest(Base):
    __tablename__ = "loan_requests"
    id = Column(Integer, primary_key=True)
    borrower_id = Column(Integer, ForeignKey("users.id"))
    amount = Column(Float)
    interest_rate = Column(Float)
    duration_months = Column(Integer)
    purpose = Column(String)
    status = Column(String, default="pending")
    created_at = Column(DateTime, default=datetime.utcnow)


class Payment(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True)
    loan_id = Column(Integer, ForeignKey("loans.id"))
    amount = Column(Float)
    payment_date = Column(DateTime, default=datetime.utcnow)
    status = Column(String)
    is_on_time = Column(Boolean, default=True)
