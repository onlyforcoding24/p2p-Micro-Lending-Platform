from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from motor.motor_asyncio import AsyncIOMotorClient

# PostgreSQL Configuration
POSTGRES_URL = "postgresql://username:password@localhost/p2p_lending"
engine = create_engine(POSTGRES_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# MongoDB Configuration (for KYC only)
MONGODB_URL = "mongodb://localhost:27017"
mongo_client = AsyncIOMotorClient(MONGODB_URL)
mongo_db = mongo_client.p2p_lending
kyc_collection = mongo_db.kyc_documents

# Database dependency


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
