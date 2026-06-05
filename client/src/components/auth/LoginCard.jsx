import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authService";

const LoginCard = ({ setAlert }) => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!identifier || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      const data = await loginUser({ identifier, password });
      
      localStorage.setItem("token", data.token);
      console.log("Login Successful");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Wrong password, Re-enter the password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white -mt-6 w-[400px] h-[400px] rounded-[40px] shadow-2xl px-10 py-12">
      <h1 
        className="text-center text-[50px] text-[#DC2F02] leading-none mb-1 -m-7"
        style={{ fontFamily: "'Medula One', cursive" }}
      >
        Login
      </h1>

      <div className="mb-6">
        <label className="block text-[17px] text-[#333] mb-1.5 mt-5 tracking-wide" style={{ fontFamily: "'Abhaya Libre', serif" }}>Email or Username</label>
        <input
          type="text"
          placeholder="Enter your Email or Username..."
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-[330px] h-[40px] bg-[#E9ECEF99] rounded-2xl -m-1 px-5 text-[16px] outline-none placeholder-gray-400 focus:ring-2 focus:ring-[#DC2F02]"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        />
      </div>

      <div className="mb-1">
        <label className="block text-[19px] text-[#333] -mt-1 mb-1.5 tracking-wide" style={{ fontFamily: "'Abhaya Libre', serif" }}>Password</label>
        <input
          type="password"
          placeholder="Enter your Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[330px] h-[40px] bg-[#E9ECEF99] rounded-2xl -m-1 px-5 text-[16px] outline-none placeholder-gray-700 focus:ring-2 focus:ring-[#DC2F02]"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        />
      </div>

      <div className="flex justify-end w-[330px]">
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="text-[13px] text-[#DC2F02] hover:underline mt-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Forgot Password?
        </button>
      </div>

      <div className="h-6 flex justify-end">
        {error && (
          <p className="text-gray-500 italic text-[13px] -mr-5 mt-1 " style={{ fontFamily: "'Roboto Flex', sans-serif" }}>
            *{error}
          </p>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-[#DC2F02] hover:bg-[#c12800] text-white text-[20px] tracking-wider px-10 py-1 -mt-5 rounded-2xl disabled:opacity-800 disabled:cursor-not-allowed"
          style={{ fontFamily: "'Inconsolata', regular" }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>

      <p className="text-center mt-3 text-[14px] text-black tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
        Don't have an account?{" "}
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/register")}
        >
          Register Here
        </span>
      </p>
    </div>
  );
};

export default LoginCard;