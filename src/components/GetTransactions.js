import React, { useState } from 'react';

const GetTransactions = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9095/api/v1/transactions/${customerNumber}/${accountNumber}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setTransactions(data);
      } else {
        alert('Error fetching transactions!');
      }
    } catch (error) {
      alert('Network error!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Get Transactions</h2>
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
          Get Transactions
        </button>
      </form>

      {transactions.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Transactions</h3>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index} className="mb-2">
                {transaction.details}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetTransactions;
