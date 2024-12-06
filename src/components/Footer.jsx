import React from "react";
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-blue-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img className="w-32 h-12" src={logo} alt="" />
          <p className="text-gray-800 text-sm font-semibold">
            Connecting talent with opportunities. Explore featured jobs and grow
            your career.
          </p>
        </div>
        <div className="flex gap-8 my-6 md:my-0">
          <a
            href="#"
            className="text-gray-800 hover:text-black text-sm transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-black text-sm transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-black text-sm transition-colors"
          >
            Privacy Policy
          </a>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors text-xl"
          >
            <i className="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-400 transition-colors text-xl"
          >
            <i className="ri-twitter-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors text-xl"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 transition-colors text-xl"
          >
            <i className="ri-instagram-line"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
