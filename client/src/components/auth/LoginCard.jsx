import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../features/auth/authService";

const LoginCard = () => {
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
      
      localStorage.setItem("token", data.accessToken);
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
    <div className="bg-white w-full max-w-md rounded-[25px] shadow-xl px-8 py-10">
      <h1
        className="text-center mb-6"
        style={{
          fontFamily: "'Medula One', cursive",
          color: "#DC2F02",
          fontSize: "50px",
          letterSpacing: "5px",
        }}
      >
        Login
      </h1>

      <div className="mb-6">
        <label className="text-[#343A40] block text-xl font-Abhaya Libre mb-2" style={{ fontFamily: "'Abhaya Libre', monospace" }}>
          Email or Username
        </label>
        <input
          type="text"
          placeholder="Enter your Email or Username..."
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
        />
      </div>

      <div className="mb-4">
        <label className="text-[#1B262C] block text-xl font-Abhaya Libre mb-2" style={{ fontFamily: "'Abhaya Libre', monospace" }}>
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
        />
      </div>

      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="text-sm text-[#E85D04] hover:underline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Forgot Password?
        </button>
      </div>

      <div className="h-6 flex justify-end -mt-3 mb-4">
        {error && (
          <p className="text-[#6C757D] text-sm" style={{ fontFamily: "'Inter', Regular" }}>
            *{error}
          </p>
        )}
      </div>

      <div className="flex justify-center mt-1 mb-6">
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-[#DC2F02] text-white px-8 py-2 rounded-full text-2xl font-medium shadow-md hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: "'Abhaya Libre', monospace" }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>

      <p className="text-sm text-[#000000] text-center -mt-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-[#000000] font-small hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;