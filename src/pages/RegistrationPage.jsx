import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Wallet, BadgeDollarSign, Users, Building2, Mail, Phone, Lock, Briefcase, PiggyBank, Landmark, FileText, Target } from 'lucide-react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    userType: 'lender',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idType: '',
    idNumber: '',
    address: '',
    bankAccount: '',
    loanPurpose: '',
    monthlyIncome: '',
    employment: '',
    investmentRange: '',
    riskAppetite: '',
    expectedReturns: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError('Please fill in all required personal information');
      return;
    }

    if (!formData.password || formData.password !== formData.confirmPassword) {
      setError('Please check your password');
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <Card className="max-w-2xl mx-auto border-2 border-blue-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-center gap-2">
            <PiggyBank className="w-8 h-8" />
            <h1 className="text-2xl font-bold">P2P Micro-Lending Platform</h1>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Account Type
              </Label>
              <RadioGroup
                value={formData.userType}
                onValueChange={(value) => handleChange('userType', value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lender" id="lender" />
                  <Label htmlFor="lender" className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-green-500" />
                    Lender
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="borrower" id="borrower" />
                  <Label htmlFor="borrower" className="flex items-center gap-2">
                    <BadgeDollarSign className="w-4 h-4 text-purple-500" />
                    Borrower
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  Email
                </Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  Phone
                </Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                KYC Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>ID Type</Label>
                  <Select onValueChange={(value) => handleChange('idType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ID type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="passport">Passport</SelectItem>
                      <SelectItem value="driving">Driving License</SelectItem>
                      <SelectItem value="national">National ID</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>ID Number</Label>
                  <Input
                    value={formData.idNumber}
                    onChange={(e) => handleChange('idNumber', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Address</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-blue-500" />
                  Bank Account
                </Label>
                <Input
                  value={formData.bankAccount}
                  onChange={(e) => handleChange('bankAccount', e.target.value)}
                />
              </div>
            </div>

            {formData.userType === 'borrower' ? (
              <div className="bg-purple-50 p-4 rounded-lg space-y-4">
                <h2 className="text-lg font-semibold">Borrower Profile</h2>
                
                <div className="space-y-2">
                  <Label>Loan Purpose</Label>
                  <Select onValueChange={(value) => handleChange('loanPurpose', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Business Expansion</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Monthly Income</Label>
                  <Input
                    type="number"
                    value={formData.monthlyIncome}
                    onChange={(e) => handleChange('monthlyIncome', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Employment Status</Label>
                  <Select onValueChange={(value) => handleChange('employment', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">Employed</SelectItem>
                      <SelectItem value="self-employed">Self-Employed</SelectItem>
                      <SelectItem value="business-owner">Business Owner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 p-4 rounded-lg space-y-4">
                <h2 className="text-lg font-semibold">Lender Profile</h2>
                
                <div className="space-y-2">
                  <Label>Investment Range</Label>
                  <Select onValueChange={(value) => handleChange('investmentRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investment range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5000">$0 - $5,000</SelectItem>
                      <SelectItem value="5001-20000">$5,001 - $20,000</SelectItem>
                      <SelectItem value="20001-plus">$20,001+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Risk Appetite</Label>
                  <Select onValueChange={(value) => handleChange('riskAppetite', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Conservative (Low Risk)</SelectItem>
                      <SelectItem value="medium">Moderate</SelectItem>
                      <SelectItem value="high">Aggressive (High Risk)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Expected Returns (%)</Label>
                  <Input
                    type="number"
                    value={formData.expectedReturns}
                    onChange={(e) => handleChange('expectedReturns', e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="space-y-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-500" />
                Security
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationPage;