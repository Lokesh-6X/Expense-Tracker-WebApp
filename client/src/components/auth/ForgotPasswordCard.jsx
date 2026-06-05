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
    } catch (err) {
      setError("Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white -mt-7 w-[400px] h-[320px] rounded-[40px] shadow-2xl px-10 py-12">
      <h1 
        className="text-center text-[50px] text-[#DC2F02] leading-none mb-1 -mt-9"
        style={{ fontFamily: "Medula One"}}
      >
        Recovery

      <div className="mb-6 mt-12">
        <label className="block text-[19px] text-[#333] -mt-5 mb-1 tracking-wide" style={{ fontFamily: "'Abhaya Libre', serif" }}>Email Address</label>
        <input
          type="email"
          placeholder="Enter your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[330px] h-[40px] bg-[#e2e4e599] rounded-2xl -m-1 px-5 text-[16px] outline-none placeholder-gray-700 focus:ring-2 focus:ring-[#ee3c0f]"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        />
      </div>

      <div className="h-6 flex justify-end mt-2">
        {error && (
          <p className="text-gray-500 italic text-[13px] -mt-3.5" style={{ fontFamily: "'Roboto Flex', sans-serif" }}>
            *{error}
          </p>
        )}
        {message && (
          <p className="text-gray-500 italic text-[12px] -mr-5 mt-1 " style={{ fontFamily: "'Inter', sans-serif" }}>
            {message}
          </p>
        )}
      </div>

      <div className="flex justify-center mt-8 mb-3">
        <button
          onClick={handleReset}
          disabled={loading}
          className="bg-[#DC2F02] hover:bg-[#c12800] text-white text-[20px] tracking-wider px-10 py-1 rounded-2xl disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          {loading ? "Sending..." : "Send Link"}
        </button>
      </div>

      
        <div className="flex justify-between items-center mt-1 px-27.5">
        <p className="text-[14px] text-black tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span
            className="cursor-pointer hover:underline text-[#DC2F02]"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </span>
          
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordCard;
