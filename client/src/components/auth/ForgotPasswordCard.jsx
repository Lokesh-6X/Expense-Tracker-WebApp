import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordCard = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");
      
      // Mock API call since there may not be a real backend endpoint yet
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setMessage("Password reset link sent to your email!");
    } catch {
      setError("Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-md rounded-[25px] shadow-xl px-8 py-10">
      <h1
        className="text-center mb-6"
        style={{
          fontFamily: "'Medula One', cursive",
          color: "#E85D04",
          fontSize: "50px",
          letterSpacing: "5px",
        }}
      >
        Recovery
      </h1>

      <div className="mb-6">
        <label className="block text-xl font-Abhaya Libre mb-2" style={{ fontFamily: "'Abhaya Libre', monospace" }}>
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
        />
      </div>

      <div className="h-6 flex flex-col items-end mb-6">
        {error && (
          <p className="text-gray-500 italic text-sm" style={{ fontFamily: "'Roboto Flex', sans-serif" }}>
            *{error}
          </p>
        )}
        {message && (
          <p className="text-gray-500 italic text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
            {message}
          </p>
        )}
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleReset}
          disabled={loading}
          className="bg-[#E85D04] text-white px-8 py-2 rounded-full text-2xl font-medium shadow-md hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: "'Abhaya Libre', monospace" }}
        >
          {loading ? "Sending..." : "Send Link"}
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center">
        Remember your password?{" "}
        <span
          className="cursor-pointer text-[#E85D04] font-medium hover:underline"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </span>
      </p>
    </div>
  );
};

export default ForgotPasswordCard;
