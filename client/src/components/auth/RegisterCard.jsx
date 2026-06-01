import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const RegisterCard = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState(false);

  const [passwordShake, setPasswordShake] = useState(false);
  const [confirmShake, setConfirmShake] = useState(false);

  const isValidPassword = (password) => {
    const regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      setPasswordError(false);
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(false);
  };

  const triggerShake = (type) => {
    if (type === "password") {
      setPasswordShake(true);

      setTimeout(() => {
        setPasswordShake(false);
      }, 400);
    }

    if (type === "confirm") {
      setConfirmShake(true);

      setTimeout(() => {
        setConfirmShake(false);
      }, 400);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPassword(formData.password)) {
      setPasswordError(true);
      triggerShake("password");
      return;
    }

    if (formData.password !== confirmPassword) {
      setConfirmPasswordError(true);
      triggerShake("confirm");
      return;
    }

    console.log("Registration Successful");
    alert("Registration Successful! You can now login.");
    navigate("/dashboard");
    

  };

  return (
    <div className="bg-white w-full max-w-4xl rounded-[40px] shadow-xl p-10">
      {/* Title */}
      <h1
        className="mb-8 text-center"
        style={{
          fontFamily: "'Medula One', cursive",
          color: "#E85D04",
          fontSize: "70px",
          letterSpacing: "5px",
        }}
      >
        Register
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {/* First Name */}
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2">
              First Name
            </label>

            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2">
              Last Name
            </label>

            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-100 font-Roboto outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-100 font-Roboto outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-100 font-Roboto outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-orange-400 {
                passwordShake
                  ? "border-2 border-red-500 animate-shake"
                  : ""
              }`}
              required
            />

            {passwordError && (
              <p className="text-red-500 text-sm mt-2">
                Password must contain at least 8 characters,
                1 number and 1 special character.
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xl font-Abhaya Libre mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className={`w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-orange-400 ${
                confirmShake
                  ? "border-2 border-red-500 animate-shake"
                  : ""
              }`}
              required
            />

            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-2">
                Passwords do not match.
              </p>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-[#E85D04] hover:bg-[#d65100] text-white text-2xl font-semibold px-12 py-3 rounded-full transition duration-300"
          >
            Register
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6 text-lg">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#E85D04] font-semibold hover:underline"
          >
            Login Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;