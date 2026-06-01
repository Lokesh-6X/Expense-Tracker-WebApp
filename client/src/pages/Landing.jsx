import React from "react";
import { Link } from "react-router-dom";
import pc from "../assets/img/pc.svg";
import profileguy from "../assets/img/profile guy.svg";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">

      {/* Main Content */}
      <div className="flex-grow px-12 py-10">

        {/* Profile Section */}
        <div className="flex justify-end items-center gap-3 mb-16">

          <span className="text-gray-700 font-medium">
            John Jacobs
          </span>

          <img
            src={profileguy}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

        </div>


        {/* Hero Section */}
        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left Side */}
          <div>

            <h1 className="text-6xl font-lalezar text-teal-400 mb-6 tracking-wide">
           EXPENSE TRACKER    

          </h1>

            <p className="font-lekton text-[#353652]">
              A personal finance website designed to help users track expenses
              and income efficiently. The platform provides tools for monitoring
              financial activities, analyzing spending patterns, managing
              budgets, and improving financial planning. A simple and
              user-friendly interface supports better money management,
              enabling users to make smarter financial decisions and maintain
              organized financial records.
            </p>


            {/* Buttons */}
            <div className="flex gap-6">

              <Link to="/login">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2 rounded-full">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full">
                  Register
                </button>
              </Link>

            </div>

          </div>


          {/* Right Side Image */}
          <div className="flex justify-center">

            <img
              src={pc}
              alt="chart"
              className="w-80"
            />

          </div>

        </div>



        {/* Features Section */}
        <div className="mt-24 text-center">

          <h2 className="text-2xl font-semibold text-gray-700 mb-12">
            Features
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="bg-slate-900 text-teal-400 rounded-3xl py-10 font-semibold">
              Expense <br /> Tracking
            </div>

            <div className="bg-white text-teal-400 rounded-3xl py-10 font-semibold shadow">
              Income <br /> Tracking
            </div>

            <div className="bg-slate-900 text-teal-400 rounded-3xl py-10 font-semibold">
              Personal <br /> Finance
            </div>

            <div className="bg-white text-teal-400 rounded-3xl py-10 font-semibold shadow">
              User <br /> Friendly
            </div>

          </div>

        </div>

      </div>


      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Landing;