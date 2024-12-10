import React, { useState } from 'react';
import { BadgeDollarSign, Users, Target, TrendingUp } from 'lucide-react';

const LoanMatchingDashboard = () => {
  const [loanRequests] = useState([
    {
      id: 1,
      borrowerName: "John Doe",
      amount: 5000,
      purpose: "Business Expansion",
      duration: 12,
      interestRate: 8.5,
      riskScore: 85,
      status: "pending"
    },
    {
      id: 2,
      borrowerName: "Jane Smith",
      amount: 3000,
      purpose: "Education",
      duration: 24,
      interestRate: 7.5,
      riskScore: 92,
      status: "pending"
    }
  ]);

  const handleFund = (loanId) => {
    console.log('Funding loan:', loanId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="rounded-lg border-2 border-blue-200 shadow-xl bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BadgeDollarSign className="w-8 h-8" />
                <h1 className="text-2xl font-bold">Available Loan Requests</h1>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/20 rounded-lg p-2">
                  <p className="text-sm">Total Requests</p>
                  <p className="text-xl font-bold">{loanRequests.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-4">
              {loanRequests.map((loan) => (
                <div key={loan.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <p className="font-medium">{loan.borrowerName}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <BadgeDollarSign className="w-4 h-4 text-green-500" />
                        <p className="text-lg font-bold">${loan.amount}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Purpose</p>
                      <p>{loan.purpose}</p>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p>{loan.duration} months</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-purple-500" />
                        <p>Interest Rate: {loan.interestRate}%</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        <p>Risk Score: {loan.riskScore}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleFund(loan.id)}
                        className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-colors"
                      >
                        Fund This Loan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanMatchingDashboard;