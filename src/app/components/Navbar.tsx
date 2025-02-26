"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full px-6 py-4 flex items-center justify-between shadow-md ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold">VISHAL MUNIRAJ</h1>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu Items */}
      <ul
        className={`md:flex md:space-x-6 text-lg ${
          isMenuOpen ? "block" : "hidden"
        } md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent ${
          darkMode ? "md:bg-gray-900" : "md:bg-white"
        }`}
      >
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-yellow-500 transition">
            <Link
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 md:px-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle */}
      <button
        className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition"
        onClick={toggleDarkMode}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
            darkMode ? "translate-x-5 bg-gray-700" : "translate-x-0"
          } transition`}
        ></div>
      </button>
    </nav>
  );
}