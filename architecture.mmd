graph TB
subgraph Client["Client Layer"]
Web["Web Application"]
Mobile["Mobile App"]
API["API Gateway"]
end

    subgraph Auth["Authentication & Authorization"]
        AuthService["Auth Service"]
        KYC["KYC Service"]
        DB1[(User DB)]
        KYCDB[(MongoDB<br/>KYC Documents)]
    end

    subgraph CoreServices["Core Services"]
        UserService["User Management"]
        LoanService["Loan Management"]
        MatchingService["Matching Engine"]
        PaymentService["Payment Processing"]
        RiskService["Risk Assessment"]
        NotificationService["Notification Service"]
    end

    subgraph DataLayer["Data Layer"]
        UserDB[(User Database)]
        LoanDB[(Loan Database)]
        TransactionDB[(Transaction DB)]
        AuditDB[(Audit Logs)]
    end

    subgraph ExternalServices["External Integrations"]
        CreditAPI["Credit Bureau API"]
        PaymentGateway["Payment Gateway"]
        BlockchainService["Smart Contracts"]
        EmailService["Email Service"]
    end

    %% Client to API Gateway
    Web --> API
    Mobile --> API

    %% API Gateway to Services
    API --> AuthService
    API --> UserService
    API --> LoanService
    API --> PaymentService

    %% Auth Flow
    AuthService --> DB1
    AuthService --> KYC
    KYC --> CreditAPI
    KYC --> KYCDB

    %% Core Services Interactions
    UserService --> UserDB
    LoanService --> LoanDB
    LoanService --> MatchingService
    LoanService --> RiskService
    PaymentService --> TransactionDB
    PaymentService --> PaymentGateway

    %% Risk Assessment Flow
    RiskService --> CreditAPI
    RiskService --> BlockchainService
    RiskService --> KYCDB

    %% Notifications
    NotificationService --> EmailService
    LoanService --> NotificationService
    PaymentService --> NotificationService

    %% Audit Trail
    LoanService --> AuditDB
    PaymentService --> AuditDB
    UserService --> AuditDB
    KYC --> AuditDB

    classDef clientLayer fill:#47B5FF,stroke:#0A2647,stroke-width:2px,color:white
    classDef authLayer fill:#FFB562,stroke:#06283D,stroke-width:2px,color:white
    classDef serviceLayer fill:#1363DF,stroke:#06283D,stroke-width:2px,color:white
    classDef dataLayer fill:#DFF6FF,stroke:#06283D,stroke-width:2px
    classDef externalLayer fill:#06283D,stroke:#47B5FF,stroke-width:2px,color:white
    classDef mongoLayer fill:#4DB33D,stroke:#3FA037,stroke-width:2px,color:white

    class Web,Mobile,API clientLayer
    class AuthService,KYC authLayer
    class UserService,LoanService,MatchingService,PaymentService,RiskService,NotificationService serviceLayer
    class UserDB,LoanDB,TransactionDB,AuditDB,DB1 dataLayer
    class CreditAPI,PaymentGateway,BlockchainService,EmailService externalLayer
    class KYCDB mongoLayer
