import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../features/auth/authService";

const RegisterCard = () => {

    const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
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
        const data = await registerUser(formData);
        console.log("Register success:", data);
    } catch (error) {
        console.error(
        error.response?.data?.message || error.message
        );
    }
    };

    return (
    <div className="w-full max-w-sm rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-indigo-200/50">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create Account ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

        {/* First + Last Name (side by side) */}
        <div className="grid grid-cols-2 gap-3">
            <div>
            <label className="text-sm text-gray-600 block mb-1">
                First Name
            </label>
            <input
                type="text"
                name="first_name"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
            </div>

            <div>
            <label className="text-sm text-gray-600 block mb-1">
                Last Name
            </label>
            <input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
            </div>
        </div>

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
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
        </div>

        {/* Button */}
        <button
            type="submit"
            className="w-full rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white py-2.5 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-md hover:shadow-lg"
        >
            Register
        </button>

        </form>
      <p className="text-sm text-gray-600 text-center mt-4">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
    );
};

export default RegisterCard;