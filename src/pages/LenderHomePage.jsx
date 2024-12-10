import React, { useState } from 'react';
import { 
  Wallet, Users, CircleDollarSign, TrendingUp, 
  BadgeDollarSign, Clock, CheckCircle, AlertTriangle, Shield
} from 'lucide-react';

const LenderHomePage = () => {
  // Mock data for lender details
  const lenderDetails = {
    name: "Jitendra Pisal",
    bankBalance: 25000,
    totalInvested: 15000,
    totalEarnings: 1200
  };

  // Mock data for active loans
  const activeLoans = [
    {
      loanId: "L123456",
      borrowerName: "John Doe",
      amount: 5000,
      interestRate: 8.5,
      remainingAmount: 3500,
      status: "on_time",
      nextPayment: "2024-04-15"
    },
    {
      loanId: "L123457",
      borrowerName: "Jane Smith",
      amount: 3000,
      interestRate: 7.5,
      remainingAmount: 2000,
      status: "late",
      nextPayment: "2024-04-10"
    }
  ];

  // Mock data for loan requests
  const loanRequests = [
    {
      requestId: "R123",
      borrowerName: "Mike Johnson",
      amount: 2500,
      purpose: "Business Expansion",
      creditScore: 720,
      riskLevel: "Low",
      interestRate: 9.0,
      duration: 12
    },
    {
      requestId: "R124",
      borrowerName: "Sarah Williams",
      amount: 4000,
      purpose: "Education",
      creditScore: 680,
      riskLevel: "Medium",
      interestRate: 10.5,
      duration: 24
    }
  ];

  const getStatusColor = (status) => {
    return status === 'on_time' ? 'text-green-600' : 'text-red-600';
  };

  const getRiskColor = (risk) => {
    const colors = {
      Low: 'text-green-600',
      Medium: 'text-yellow-600',
      High: 'text-red-600'
    };
    return colors[risk] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Lender Info */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h1 className="text-2xl font-bold mb-6">Welcome, {lenderDetails.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Wallet className="w-4 h-4" />
                <span className="font-medium">Bank Balance</span>
              </div>
              <p className="text-2xl font-bold">${lenderDetails.bankBalance.toLocaleString()}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-green-600 mb-1">
                <CircleDollarSign className="w-4 h-4" />
                <span className="font-medium">Total Invested</span>
              </div>
              <p className="text-2xl font-bold">${lenderDetails.totalInvested.toLocaleString()}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-purple-600 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">Total Earnings</span>
              </div>
              <p className="text-2xl font-bold">${lenderDetails.totalEarnings.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-yellow-600 mb-1">
                <Users className="w-4 h-4" />
                <span className="font-medium">Active Loans</span>
              </div>
              <p className="text-2xl font-bold">{activeLoans.length}</p>
            </div>
          </div>
        </div>

        {/* Active Loans */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Active Loans</h2>
          <div className="space-y-4">
            {activeLoans.map((loan) => (
              <div key={loan.loanId} className="border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <p className="font-medium">{loan.borrowerName}</p>
                    </div>
                    <p className="text-sm text-gray-600">Loan #{loan.loanId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className="font-bold">${loan.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">at {loan.interestRate}% APR</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Remaining</p>
                    <p className="font-bold">${loan.remainingAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <p className="text-sm">Next Payment: {new Date(loan.nextPayment).toLocaleDateString()}</p>
                    </div>
                    <div className={`flex items-center gap-2 ${getStatusColor(loan.status)}`}>
                      {loan.status === 'on_time' ? 
                        <CheckCircle className="w-4 h-4" /> : 
                        <AlertTriangle className="w-4 h-4" />
                      }
                      <span className="font-medium">
                        {loan.status === 'on_time' ? 'On Time' : 'Late'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loan Requests */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Loan Requests</h2>
          <div className="space-y-4">
            {loanRequests.map((request) => (
              <div key={request.requestId} className="border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <p className="font-medium">{request.borrowerName}</p>
                    </div>
                    <p className="text-sm text-gray-600">Request #{request.requestId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Loan Details</p>
                    <p className="font-bold">${request.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">
                      {request.duration} months at {request.interestRate}% APR
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Purpose</p>
                    <p className="font-medium">{request.purpose}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Credit Score: {request.creditScore}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${getRiskColor(request.riskLevel)}`}>
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-sm">Risk: {request.riskLevel}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Review Request
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

export default LenderHomePage;