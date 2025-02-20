import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-body-color shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4">
        
        {/* Copyright Notice */}
        <p className="text-sm text-title-color">&copy; {new Date().getFullYear()} AMBER BISHT</p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl mt-4 md:mt-0">
          <a href="https://github.com/amber-bisht" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaGithub />
          </a>
          <a href="https://twitter.com/amber_bisht" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/amber-bisht-05a096294" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/amber_bisht" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <FaInstagram />
          </a>
          <a href="mailto:bishtamber@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
