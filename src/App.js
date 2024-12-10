// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoanRequestForm from './components/LoanRequestForm';
import LoanMatchingDashboard from './components/LoanMatchingDashboard';
import LenderDashboard from './components/LenderDashboard';
import LenderHomePage from './pages/LenderHomePage';
import LandingPage from './pages/LandingPage';
import LoanRequestReview from './pages/LoanRequestReview';
import BorrowerHomePage from './pages/BorrowerHomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        /** Lender */
        <Route path="/lendConnect" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/lender/homePage" element={<LenderHomePage />} />
        <Route path="/lender/loanRequestReview" element={<LoanRequestReview />} />


        /**borrower  */
        <Route path="/borrower/homePage" element={<BorrowerHomePage />} />
        <Route path="/borrower/loanrequest" element={<LoanRequestForm />} />
      </Routes>
    </div>
  );
}

export default App;
