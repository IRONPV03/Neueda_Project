import React, { useState } from 'react';

const CalculateInterest = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [interestDetails, setInterestDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9095/api/v1/calculate_interest/${accountNumber}?amount=${amount}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setInterestDetails(data);
      } else {
        alert('Error fetching interest details!');
      }
    } catch (error) {
      alert('Network error!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Calculate Interest</h2>
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
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Calculate
        </button>
      </form>

      {interestDetails && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Interest Details</h3>
          <p>Interest Rate: {interestDetails.interestRate}</p>
          <p>Interest Amount: {interestDetails.interestAmount}</p>
        </div>
      )}
    </div>
  );
};

export default CalculateInterest;
