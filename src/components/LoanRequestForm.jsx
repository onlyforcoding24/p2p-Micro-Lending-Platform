import React, { useState } from 'react';
import { BadgeDollarSign, Calendar, FileText, Clock, Target } from 'lucide-react';

const LoanRequestForm = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    purpose: '',
    duration: '',
    interestRate: '',
    repaymentSchedule: '',
    description: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.loanAmount || !formData.purpose || !formData.duration) {
      setError('Please fill in all required fields');
      return;
    }

    console.log('Loan Request submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg border-2 border-blue-200 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-center gap-2">
            <BadgeDollarSign className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Create Loan Request</h1>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium">
                <BadgeDollarSign className="w-4 h-4 text-blue-500" />
                Loan Amount
              </label>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="Enter amount in $"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium">
                <FileText className="w-4 h-4 text-blue-500" />
                Loan Purpose
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select loan purpose</option>
                <option value="business">Business Expansion</option>
                <option value="education">Education</option>
                <option value="personal">Personal</option>
                <option value="debt-consolidation">Debt Consolidation</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  Loan Duration (months)
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select duration</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium">
                  <Target className="w-4 h-4 text-blue-500" />
                  Expected Interest Rate (%)
                </label>
                <input
                  type="number"
                  name="interestRate"
                  step="0.1"
                  value={formData.interestRate}
                  onChange={handleChange}
                  placeholder="Enter expected rate"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-blue-500" />
                Repayment Schedule
              </label>
              <select
                name="repaymentSchedule"
                value={formData.repaymentSchedule}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select repayment schedule</option>
                <option value="monthly">Monthly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Provide additional details about your loan request"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md transition-colors"
            >
              Submit Loan Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanRequestForm;