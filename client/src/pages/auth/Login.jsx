import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center px-4">

        <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-xl p-8">

          {/* Title */}
          <h1
            className="text-center mb-8"
            style={{
              fontFamily: "'Medula One', cursive",
              color: "#dc2f02",
              fontSize: "65px",
              letterSpacing: "3px",
            }}
          >
            Login
          </h1>

          {/* Form */}
          <form>

            {/* Email */}
            <div className="mb-8">
              <label className="block text-[22px] font-Abhaya Libre mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your Email..."
                className="w-full p-4 bg-gray-100 font-Roboto rounded-xl outline-none text-lg"
              />
            </div>

            {/* Password */}
            <div className="mb-2">
              <label className="block text-[22px] font-Abhaya Libre mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your Password..."
                className="w-full p-4 bg-gray-100 rounded-xl outline-none text-lg"
              />
            </div>

            {/* Error Message */}
            <p className="text-right text-sm italic text-gray-500 mb-10">
              *Wrong password, Reenter the password
            </p>

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#dc2f02] hover:bg-[#cc5204] text-white text-2xl px-14 py-3 rounded-full transition duration-300"
                style={{ fontFamily: "'Medula One', cursive" }}
              >
                Login
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-6 text-lg">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#dc2f02] hover:underline"
              >
                Register Here
              </Link>
            </div>

          </form>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;