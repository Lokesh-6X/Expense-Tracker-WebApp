import React from 'react'

const AlertCard = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-slideIn">

      <div className="bg-white shadow-xl border border-red-200 rounded-xl p-5 w-80">

        <h3 className="text-red-600 font-semibold mb-2">
          Error
        </h3>

        <p className="text-gray-700 mb-4">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          OK
        </button>

      </div>

    </div>
  );
};

export default AlertCard;
