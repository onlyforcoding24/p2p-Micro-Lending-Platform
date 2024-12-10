import React from 'react';
import { 
  DollarSign, ArrowUpCircle, Download, FileText, 
  AlertTriangle, TrendingUp, MessageCircle, Shield, 
  FileCheck, PieChart
} from 'lucide-react';

const LenderDashboard = () => {
  const loanDetails = {
    loanId: "L123456",
    borrowerName: "John Doe",
    principalAmount: 5000,
    totalReceived: 1335.96,
    remainingAmount: 3664.04,
    expectedReturn: 425.00,
    riskLevel: "Low",
    latePayments: 0,
    returnRate: 8.5,
    nextPaymentDate: "2024-04-15"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Loan Management Dashboard</h1>
            <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Loan #{loanDetails.loanId}
            </span>
          </div>
          <p className="text-gray-600 mt-2">Borrower: {loanDetails.borrowerName}</p>
        </div>

        {/* Risk Assessment */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Risk Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Risk Level</span>
              </div>
              <p className="text-xl font-bold text-blue-600">{loanDetails.riskLevel}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                <span>Late Payments</span>
              </div>
              <p className="text-xl font-bold text-yellow-600">{loanDetails.latePayments}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span>Return Rate</span>
              </div>
              <p className="text-xl font-bold text-green-600">{loanDetails.returnRate}%</p>
            </div>
          </div>
        </div>

        {/* Loan Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Loan Performance</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Principal Amount</span>
                  <span className="font-bold">${loanDetails.principalAmount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Amount Received</span>
                  <span className="font-bold">${loanDetails.totalReceived}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${(loanDetails.totalReceived / loanDetails.principalAmount) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Expected Return</span>
                  <span className="font-bold text-green-600">+${loanDetails.expectedReturn}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Disburse Additional Funds
              </button>
              <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact Borrower
              </button>
              <button className="w-full border border-blue-600 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2">
                <PieChart className="w-4 h-4" />
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Loan Agreement</span>
              </div>
              <button className="text-blue-600 hover:underline">Download</button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-green-600" />
                <span>Payment Records</span>
              </div>
              <button className="text-blue-600 hover:underline">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LenderDashboard;