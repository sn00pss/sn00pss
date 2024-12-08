import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import LoanList from './components/LoanList';
import LoanPayment from './components/LoanPayment';
import Login from './components/Login';
import Register from './components/Register';
import RepaymentSchedule from './components/RepaymentSchedule';
import UserDashboard from './components/UserDashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/loans" element={<LoanList />} />
          <Route path="/payments" element={<LoanPayment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/repayment-schedule" element={<RepaymentSchedule />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

