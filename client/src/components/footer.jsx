import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E9ECEF] py-4 px-12">

      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">

        <p>Expense Tracker - Prototype</p>

        <div className="flex gap-8 mt-2 md:mt-0">

          <a href="/" className="hover:text-black">
            Home
          </a>

          <a href="/" className="hover:text-black">
            Credits
          </a>

          <a href="/" className="hover:text-black">
            Developer Details
          </a>

          <a href="/" className="hover:text-black">
            Feedback
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;