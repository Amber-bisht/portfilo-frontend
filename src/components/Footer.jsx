import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-body-color dark:bg-gray-900 shadow-md text-title-color dark:text-gray-300">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4">
        
        {/* Copyright Notice */}
        <p className="text-sm">&copy; {new Date().getFullYear()} AMBER BISHT</p>

        {/* Social Links */}
        <div className="flex space-x-5 text-xl mt-4 md:mt-0">
          <a href="https://github.com/amber-bisht" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://twitter.com/amber_bisht" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/amber-bisht-05a096294" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/amber_bisht" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 dark:hover:text-pink-400 transition duration-300">
            <FaInstagram />
          </a>
          <a href="mailto:bishtamber@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition duration-300">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
