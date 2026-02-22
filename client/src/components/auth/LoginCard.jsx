import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authService";
import LoadingSpinner from "../ui/LoadingSpinner";




const LoginCard = ({ setAlert }) => {

  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      setLoading(true);
      const data = await loginUser(formData);
      localStorage.setItem("token", data.token);
      console.log("Login Sucessfull");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setAlert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-indigo-200/50">

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome Back 👋
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white py-2.5 font-semibold flex justify-center items-center gap-2 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading? <LoadingSpinner /> : "Login"}
        </button>

      </form>
      <p className="text-sm text-gray-600 text-center mt-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-600 font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;