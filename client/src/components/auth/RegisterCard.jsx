import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/auth/authService";
import LoadingSpinner from "../ui/LoadingSpinner";

const RegisterCard = ({ setAlert }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setAlert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const data = await registerUser({
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log("Register success:", data);
      setAlert("Registration successful! ");
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      setAlert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-3xl rounded-[25px] shadow-xl px-6 py-6">
      {/* Title */}
      <h1
        className="text-center mb-6"
        style={{
          fontFamily: "'Medula One', cursive",
          color: "#E85D04",
          fontSize: "50px",
          letterSpacing: "5px",
        }}
      >
        Register
      </h1>

      <form onSubmit={handleSubmit}>
        {/* First Name + Last Name */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2"
            style={{ fontFamily: "'Abhaya Libre', monospace" }}>
                
              First Name
            </label>

            <input
              type="text"
              name="first_name"
              placeholder="Enter your First Name..."
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
            />
          </div>

          <div>
            <label className="block text-xl font-Abhaya Libre mb-2"
            style={{ fontFamily: "'Abhaya Libre', monospace" }}>
              Last Name
            </label>

            <input
              type="text"
              name="last_name"
              placeholder="Enter your Last Name..."
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
            />
          </div>
        </div>

        {/* Email + Username */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2"
            style={{ fontFamily: "'Abhaya Libre', monospace" }}>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your Email..."
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
            />
          </div>

          <div>
            <label className="block text-xl font-Abhaya Libre mb-2"
            style={{ fontFamily: "'Abhaya Libre', monospace" }}>
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter your Username..."
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
            />
          </div>
        </div>

        {/* Password + Confirm Password */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2"
            style={{ fontFamily: "'Abhaya Libre', monospace" }}>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your Password..."
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto "
            />

            {/* <p className="text-[11px] italic text-gray-500 mt-2 text-right">
              *Password must contain a special character
            </p> */}
          </div>

          <div>
           <label className="block text-xl font-Abhaya Libre mb-1"
            style={{ fontFamily: "'Abhaya Libre', monospace" }}>

              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password..."
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-orange-400 font-Roboto"
            />

            {/* <p className="text-[11px] italic text-gray-500 mt-2 text-right">
              *Does not match the password
            </p> */}
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#E85D04] text-white px-8 py-2 rounded-full text-2xl font-medium shadow-md hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Abhaya Libre', monospace" }}
          >
            {loading ? <LoadingSpinner /> : "Register"}
          </button>
        </div>
      </form>

      {/* Login Link  */}
      <p className="text-sm text-gray-600 text-center mt-4">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[#E85D04]-600 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterCard;