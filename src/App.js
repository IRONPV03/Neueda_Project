import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import AddAccount from './components/AddAccount';
import GetAccountDetails from './components/GetAccountDetails';
import CalculateInterest from './components/CalculateInterest';
import DepositFunds from './components/DepositFunds';
import WithdrawFunds from './components/WithdrawFunds';
import GetTransactions from './components/GetTransactions';

const App = () => {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/add-customer" className="text-blue-500">Add Customer</Link>
            </li>
            <li>
              <Link to="/add-account" className="text-blue-500">Add Account</Link>
            </li>
            <li>
              <Link to="/get-account-details" className="text-blue-500">Get Account Details</Link>
            </li>
            <li>
              <Link to="/calculate-interest" className="text-blue-500">Calculate Interest</Link>
            </li>
            <li>
              <Link to="/deposit-funds" className="text-blue-500">Deposit Funds</Link>
            </li>
            <li>
              <Link to="/withdraw-funds" className="text-blue-500">Withdraw Funds</Link>
            </li>
            <li>
              <Link to="/get-transactions" className="text-blue-500">Get Transactions</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to Demo Bank Service</div>} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-account" element={<AddAccount />} />
          <Route path="/get-account-details" element={<GetAccountDetails />} />
          <Route path="/calculate-interest" element={<CalculateInterest />} />
          <Route path="/deposit-funds" element={<DepositFunds />} />
          <Route path="/withdraw-funds" element={<WithdrawFunds />} />
          <Route path="/get-transactions" element={<GetTransactions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
