import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Icons for menu and dark mode

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for user preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-20 shadow-md transition-colors duration-300">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Name */}
        <a href="#" className="text-xl font-medium">
          AMBER BISHT
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-500 dark:hover:text-gray-300">Home</a></li>
          <li><a href="#techstack" className="hover:text-gray-500 dark:hover:text-gray-300">Techstack</a></li>
          <li><a href="#projects" className="hover:text-gray-500 dark:hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-500 dark:hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle (Desktop) */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
        >
          {darkMode ? (
            <>
              <FaSun className="mr-2" /> Light Mode
            </>
          ) : (
            <>
              <FaMoon className="mr-2" /> Dark Mode
            </>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-6 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <a href="#home" className="text-xl hover:text-gray-500 dark:hover:text-gray-300" onClick={closeMenu}>
          Home
        </a>
        <a href="#techstack" className="text-xl hover:text-gray-500 dark:hover:text-gray-300" onClick={closeMenu}>
          TechStack
        </a>
        <a href="#projects" className="text-xl hover:text-gray-500 dark:hover:text-gray-300" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" className="text-xl hover:text-gray-500 dark:hover:text-gray-300" onClick={closeMenu}>
          Contact
        </a>

        {/* Dark Mode Toggle - Mobile */}
        <button
          onClick={toggleTheme}
          className="flex items-center px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
        >
          {darkMode ? (
            <>
              <FaSun className="mr-2" /> Light Mode
            </>
          ) : (
            <>
              <FaMoon className="mr-2" /> Dark Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
