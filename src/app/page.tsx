/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar"; 
import Skills from "./components/skills";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [flipped, setFlipped] = useState({ helpdesk: false, accent: false });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar - Fixed Above Floating Logos */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen from-white via-gray-100 to-white">
        <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side - Text Content */}
          <div className="text-left max-w-lg">
            <motion.p 
              className="text-yellow-500 font-semibold text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              HELLO!
            </motion.p>

            <motion.h1 
              className="text-6xl font-extrabold text-black leading-tight mt-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              I&apos;M <span className="text-yellow-500">VISHAL MUNIRAJ</span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-700 font-semibold mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
            >
              Data Scientist | Software Engineer | AI Enthusiast
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="mt-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/vishal-m-353315111/"  
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-yellow-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-yellow-600 transition"
              >
                LinkedIn
              </a>

              {/* My Works Button */}
              <a 
                href="#education"
                className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition"
              >
                My Works
              </a>
            </motion.div>

          </div>

          {/* Right Side - Profile Image */}
          <motion.div 
            className="relative w-full max-w-lg mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src="/images/portfolioimg.jpeg"
              alt="Vishal Muniraj"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div> 

      {/* Floating Logos */}
      <div className={`fixed top-16 left-6 z-40 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
        <img src="/images/cognizant.jpg" alt="Cognizant Logo" className="w-14 h-14 object-contain" />
      </div>

      {/* Education Section */}
      <section id="education" className="mt-12 w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Education & Professional Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* SLU University Card */}
          <motion.div className="relative flex items-center justify-center bg-gray-200 rounded-lg shadow-lg p-6" whileHover={{ scale: 1.05 }}>
            <motion.img src="/images/images.png" alt="Saint Louis University" className="w-auto h-40 object-contain" />
            <motion.div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-lg opacity-0 rounded-lg px-6 text-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold text-yellow-400">Aug 2023 - Present</h2>
              <p className="text-lg font-semibold">Master&apos;s in Computer Science</p>
              <p className="text-sm mt-2">
                I am currently pursuing my Master&apos;s degree in Computer Science at Saint Louis University, focusing on Machine Learning, Artificial Intelligence, and Cloud Computing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="mt-12 w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800">Contact</h2>

        <p className="mt-3 text-lg">
          Email: 
          <a href="mailto:vishal.muniraj@slu.edu" className="text-blue-600 hover:underline"> vishal.muniraj@slu.edu</a>
        </p>

        <p className="mt-3 text-lg">
          Personal Email: 
          <a href="mailto:mariyaselvam3@gmail.com" className="text-blue-600 hover:underline"> mariyaselvam3@gmail.com</a>
        </p>

        <p className="mt-3 text-lg">
          Phone: 
          <a href="tel:+13144403037" className="text-blue-600 hover:underline"> +1 (314)-440-3037</a>
        </p>
      </motion.section>
    </>
  );
}
