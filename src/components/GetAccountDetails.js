import React, { useState } from 'react';

const GetAccountDetails = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9095/api/v1/accounts/${accountNumber}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setAccountDetails(data);
      } else {
        alert('Error fetching account details!');
      }
    } catch (error) {
      alert('Network error!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Get Account Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Get Details
        </button>
      </form>

      {accountDetails && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Account Details</h3>
          <p>Account Number: {accountDetails.accountNumber}</p>
          <p>Account Name: {accountDetails.account_name}</p>
          <p>Account Type: {accountDetails.accout_type}</p>
          <p>Balance: {accountDetails.balance}</p>
          <p>Description: {accountDetails.description}</p>
          <p>Interest Rate: {accountDetails.interestRate}</p>
        </div>
      )}
    </div>
  );
};

export default GetAccountDetails;
