import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center px-4 py-10">
        <div className="bg-white w-full max-w-3xl rounded-[40px] shadow-xl p-10">

          {/* Title */}
        <h1
        style={{
        fontFamily: "'Medula One', cursive",
        color: "#E85D04",
        fontSize: "90px",
        letterSpacing: "5px",
        textAlign: "center",
   }}
>
  Register
</h1>

          {/* Form */}
          <form>
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">

              {/* First Name */}
              <div>
                <label className="block text-2xl font-Abhaya Libre mb-3">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your First Name..."
                  className="w-full p-4 bg-gray-100 rounded-xl outline-none text-lg font-Roboto"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-2xl font-Abhaya Libre mb-3">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your Last Name..."
                  className="w-full p-4 bg-gray-100 rounded-xl outline-none text-lg font-Roboto"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-2xl font-Abhaya Libre mb-3">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your Email..."
                  className="w-full p-4 bg-gray-100 rounded-xl outline-none text-lg font-Roboto"
                />
              </div>

              {/* Password Rules */}
                <div>
                <label className="block text-2xl font-Abhaya Libre mb-3">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter your Username..."
                  className="w-full p-4 bg-gray-100 rounded-xl outline-none text-lg font-Roboto"
                />
              </div>
             

              {/* Password */}
              <div>
                <label className="block text-2xl font-Abhaya Libre mb-3">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your Password..."
                  className="w-full p-4 bg-gray-100 rounded-xl outline-none text-lg"
                />

                <p className="text-xs italic text-center font-Roboto flex text-gray-500 mt-2 ">
                  *Password must contain a special character
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-2xl font-Abhaya Libre mb-3">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your Password..."
                  className="w-full p-4 bg-gray-100 rounded-xl outline-none text-lg font-Roboto"
                />

                <p className="text-xs italic text-center font-Roboto flex text-gray-500 mt-2">
                  *Does not match the password
                </p>
              </div>
            </div>

            {/* Register Button */}
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="bg-[#E85D04] hover:bg-[#D95302] text-white font-Ligconsolata text-3xl px-14 py-3 rounded-full transition duration-300"
              >
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center font-inter mt-8 text-xl">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-600 hover:underline"
              >
                Login Here
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

export default Register;
