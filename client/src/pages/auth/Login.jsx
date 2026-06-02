import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const validEmail = "admin@gmail.com";
    const validPassword = "12345";

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (email === validEmail && password === validPassword) {
      navigate("/dashboard");
    } else {
      setError("Wrong password, Re-enter the password");
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;700&family=Inconsolata:wght@400;700&family=Inter:wght@400;500;600&family=Medula+One&family=Roboto+Flex:opsz,wght@8..144,400&display=swap');
        `}
      </style>

      <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center">

        {/* Login Card */}
        <div className="bg-white w-[500px] p-10 rounded-[40px] shadow-xl">
          
          <h1
            className="text-center text-[#E85D04] text-7xl mb-10"
            style={{ fontFamily: "Medula One" }}
          >
            Login
          </h1>

          {/* Email */}
          <div className="mb-6">
            <label
              className="block text-2xl mb-2"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 p-4 rounded-xl outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-2xl mb-2"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              Password
            </label>

            <input
              type="password"git status
              placeholder="Enter your Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 p-4 rounded-xl outline-none"
            />
          </div>

          {/* Error */}
          {error && (
            <p
              className="text-right text-gray-500 mt-2 italic"
              style={{ fontFamily: "Roboto Flex" }}
            >
              *{error}
            </p>
          )}

          {/* Login Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLogin}
              className="bg-[#E85D04] text-white px-16 py-3 rounded-full text-2xl hover:bg-orange-700 transition"
              style={{ fontFamily: "Inconsolata" }}
            >
              Login
            </button>
          </div>

          {/* Register */}
          <p
            className="text-center mt-8"
            style={{ fontFamily: "Inter" }}
          >
            Don’t have an account?{" "}
            <span
              className="font-semibold cursor-pointer text-[#E85D04]"
              onClick={() => navigate("/register")}
            >
              Register Here
            </span>
          </p>
        </div>

        {/* Footer */}
        <footer
          className="fixed bottom-0 left-0 w-full bg-gray-200 py-4 px-10 flex justify-between items-center"
          style={{ fontFamily: "Inter" }}
        >
          <p>Expense Tracker - Prototype</p>

          <div className="flex gap-8">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Credits</p>
            <p className="cursor-pointer">Developer Details</p>
            <p className="cursor-pointer">Feedback</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Login;
