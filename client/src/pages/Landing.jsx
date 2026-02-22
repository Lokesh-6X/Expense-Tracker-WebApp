import React from 'react';
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 text-center border border-gray-100">

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Welcome to Expense Tracker
            </h1>

            <p className="text-gray-600 mb-8">
            Choose an option to continue
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">

            <button onClick={() => navigate("/login")}
                    className="px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-indigo-600 text-white font-semibold shadow-md hover:scale-[1.03] active:scale-[0.97] transition">
                Login
            </button>

            <button onClick={() => navigate("/register")}
                    className="px-6 py-3 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:scale-[1.03] active:scale-[0.97] transition">
                Register
            </button>

            </div>

        </div>

        </div>
    );
};

export default Landing;