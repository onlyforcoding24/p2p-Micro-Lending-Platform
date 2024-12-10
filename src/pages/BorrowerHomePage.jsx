import React from 'react';
import { 
  Users, BadgeDollarSign, Target, TrendingUp,
  Clock, Building, Star, Wallet, ArrowRight, 
  CircleDollarSign, ShieldCheck, CheckCircle, AlertTriangle
} from 'lucide-react';

const BorrowerHomePage = () => {

  // Add borrower profile data
  const borrowerProfile = {
    name: "Sagar Khamkar",
    creditScore: 720,
    memberSince: "2024-01"
  };

  // Mock data for active loans
  const activeLoans = [
    {
      id: "L789",
      lenderName: "Alice Smith",
      amount: 8000,
      remainingAmount: 6400,
      interestRate: 8.5,
      nextPaymentDate: "2024-04-15",
      nextPaymentAmount: 445.32,
      status: "on_time",
      startDate: "2024-01-15",
      duration: 24
    },
    {
      id: "L790",
      lenderName: "John Walker",
      amount: 3000,
      remainingAmount: 2000,
      interestRate: 7.8,
      nextPaymentDate: "2024-04-20",
      nextPaymentAmount: 275.50,
      status: "late",
      startDate: "2024-02-01",
      duration: 12
    }
  ];

  // Mock data for available lenders
  const availableLenders = [
    {
      id: "L1",
      name: "Alice Smith",
      totalLoansGiven: 45,
      averageInterestRate: 8.5,
      rating: 4.8,
      maxLoanAmount: 25000,
      minCreditScore: 680,
      specialization: "Business Loans"
    },
    {
      id: "L2",
      name: "John Walker",
      totalLoansGiven: 32,
      averageInterestRate: 7.8,
      rating: 4.9,
      maxLoanAmount: 15000,
      minCreditScore: 650,
      specialization: "Education Loans"
    },
    {
      id: "L3",
      name: "Sarah Davis",
      totalLoansGiven: 28,
      averageInterestRate: 9.2,
      rating: 4.7,
      maxLoanAmount: 20000,
      minCreditScore: 700,
      specialization: "Personal Loans"
    }
  ];

  // Mock data for active lending bids
  const activeBids = [
    {
      id: "B1",
      lenderName: "Growth Capital Fund",
      amount: 10000,
      interestRate: 7.5,
      duration: 12,
      purpose: "Small Business",
      deadline: "2024-04-20",
      participantsCount: 8,
      minCreditScore: 700
    },
    {
      id: "B2",
      lenderName: "Education First",
      amount: 5000,
      interestRate: 6.8,
      duration: 24,
      purpose: "Education",
      deadline: "2024-04-18",
      participantsCount: 5,
      minCreditScore: 650
    }
  ];

  const handleRequestLoan = (lenderId) => {
    console.log('Requesting loan from lender:', lenderId);
  };

  const handleParticipateBid = (bidId) => {
    console.log('Participating in bid:', bidId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Welcome back, {borrowerProfile.name}
              </h1>
              <p className="text-gray-600">Manage your loans and explore lending opportunities</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-gray-600">
                <Target className="w-4 h-4" />
                <span>Credit Score: {borrowerProfile.creditScore}</span>
              </div>
              <p className="text-sm text-gray-500">
                Member since {new Date(borrowerProfile.memberSince).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
          </div>

        {/* Active Loans Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-6">Your Active Loans</h2>
          <div className="space-y-4">
            {activeLoans.map((loan) => (
              <div key={loan.id} className="border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <p className="font-medium">{loan.lenderName}</p>
                    </div>
                    <p className="text-sm text-gray-600">Loan #{loan.id}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BadgeDollarSign className="w-4 h-4 text-green-600" />
                      <p className="font-medium">
                        ${loan.remainingAmount.toLocaleString()} 
                        <span className="text-sm text-gray-500"> remaining</span>
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      of ${loan.amount.toLocaleString()} at {loan.interestRate}%
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <p className="font-medium">Next Payment</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      ${loan.nextPaymentAmount} on {new Date(loan.nextPaymentDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className={`flex items-center gap-2 ${
                      loan.status === 'on_time' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {loan.status === 'on_time' ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <AlertTriangle className="w-4 h-4" />
                      )}
                      <span className="font-medium">
                        {loan.status === 'on_time' ? 'On Time' : 'Payment Late'}
                      </span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                      Make Payment
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Started: {new Date(loan.startDate).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>Duration: {loan.duration} months</span>
                    <span>•</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ 
                          width: `${((loan.amount - loan.remainingAmount) / loan.amount) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Lenders Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-6">Available Lenders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableLenders.map((lender) => (
              <div key={lender.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{lender.name}</h3>
                    <p className="text-sm text-gray-600">{lender.specialization}</p>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1">{lender.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeDollarSign className="w-4 h-4" />
                    <span>Up to ${lender.maxLoanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Avg. Rate: {lender.averageInterestRate}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{lender.totalLoansGiven} loans given</span>
                  </div>
                </div>

                <button
                  onClick={() => handleRequestLoan(lender.id)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  Request Loan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Active Lending Bids Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-6">Active Lending Bids</h2>
          <div className="space-y-4">
            {activeBids.map((bid) => (
              <div key={bid.id} className="border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CircleDollarSign className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">{bid.lenderName}</span>
                    </div>
                    <p className="text-sm text-gray-600">Bid #{bid.id}</p>
                  </div>

                  <div>
                    <p className="text-gray-600">Loan Amount</p>
                    <p className="font-bold">${bid.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{bid.duration} months at {bid.interestRate}%</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <p className="text-sm text-gray-600">Deadline</p>
                    </div>
                    <p className="font-medium">{new Date(bid.deadline).toLocaleDateString()}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-gray-600" />
                      <p className="text-sm text-gray-600">Participants</p>
                    </div>
                    <p className="font-medium">{bid.participantsCount} borrowers</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Min. Credit Score: {bid.minCreditScore}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Purpose: {bid.purpose}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleParticipateBid(bid.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
                  >
                    Participate
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerHomePage;