import React, { useState } from 'react';

const WithdrawFunds = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [formData, setFormData] = useState({
    accountNumber: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9095/api/v1/withdrawal/${customerNumber}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Funds withdrawn successfully!');
      } else {
        alert('Error withdrawing funds!');
      }
    } catch (error) {
      alert('Network error!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Withdraw Funds</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Customer Number</label>
          <input
            type="text"
            name="customerNumber"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default WithdrawFunds;
