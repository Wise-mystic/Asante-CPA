import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPortal404 = () => {
  return (
    <div className="payment-portal-404 min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Payment Portal Coming Soon</h2>
        <p className="text-gray-500 mb-6">
          We're working hard to bring you an amazing payment experience. 
          Stay tuned for updates!
        </p>
        <Link 
          to="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentPortal404;
