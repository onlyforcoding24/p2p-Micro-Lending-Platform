import React from 'react';
import { 
  Users, BadgeDollarSign, Target, TrendingUp,
  Clock, Building 
} from 'lucide-react';

const LoanRequestReview = ({ request: propRequest }) => {
  // Mock request data for preview
  const mockRequest = {
    requestId: "R123",
    borrowerName: "Mike Johnson",
    amount: 2500,
    purpose: "Business Expansion",
    creditScore: 720,
    riskLevel: "Low",
    interestRate: 9.0,
    duration: 12,
  };

  // Use provided request or mock data
  const request = propRequest || mockRequest;

  const handleFund = (requestId) => {
    console.log('Funding loan:', requestId);
    // Add funding logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-white rounded-lg border-2 border-blue-200 shadow-xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BadgeDollarSign className="w-8 h-8" />
                <h1 className="text-2xl font-bold">Loan Request Details</h1>
              </div>
              <span className="bg-white/20 rounded-lg p-2">
                Request #{request.requestId}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-6">
              <div className="bg-white rounded-lg border p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      <p className="font-medium text-lg">{request.borrowerName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-500" />
                      <p>Credit Score: {request.creditScore}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BadgeDollarSign className="w-4 h-4 text-green-500" />
                      <p className="text-lg font-bold">
                        ${request.amount.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <p>{request.duration} months</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-500" />
                      <p>Interest Rate: {request.interestRate}%</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-blue-500" />
                      <p>Purpose: {request.purpose}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full ${
                      request.riskLevel === 'Low' 
                        ? 'bg-green-100 text-green-800'
                        : request.riskLevel === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {request.riskLevel} Risk
                    </span>
                  </div>
                  <button
                    onClick={() => handleFund(request.requestId)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-md flex items-center gap-2"
                  >
                    <BadgeDollarSign className="w-4 h-4" />
                    Fund This Loan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add default export for the preview
export default LoanRequestReview;