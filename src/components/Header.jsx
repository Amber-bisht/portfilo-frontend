import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Icons for menu and dark mode

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const closeMenu = () => setMenuOpen(false); // Closes menu when a link is clicked

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-body-color z-20 shadow-md">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Name */}
        <a href="#" className="text-title-color text-xl font-medium">
          AMBER BISHT
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-title-color hover:text-first-color">Home</a></li>
          <li><a href="#techstack" className="text-title-color hover:text-first-color">Techstack</a></li>
          <li><a href="#projects" className="text-title-color hover:text-first-color">Projects</a></li>
          <li><a href="#contact" className="text-title-color hover:text-first-color">Contact</a></li>
        </ul>

      

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-title-color text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-body-color z-10 flex flex-col items-center justify-center space-y-6 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <a href="#home" className="text-title-color text-xl hover:text-first-color" onClick={closeMenu}>
          Home
        </a>
        <a href="#techstack" className="text-title-color text-xl hover:text-first-color" onClick={closeMenu}>
          TechStack
        </a>
        <a href="#projects" className="text-title-color text-xl hover:text-first-color" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" className="text-title-color text-xl hover:text-first-color" onClick={closeMenu}>
          Contact
        </a>

        {/* Dark Mode Toggle - Mobile */}
        <button 
          onClick={toggleTheme} 
          className="text-title-color text-3xl hover:text-first-color focus:outline-none"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
