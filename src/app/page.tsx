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
              I'M <span className="text-yellow-500">VISHAL MUNIRAJ</span>
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

  {/* My Works Button - Scroll to Education & Professional Experience */}
  <a 
    href="#education"  // The ID of the Education & Professional Experience section
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
              src="\images\portfolioimg.jpeg" // Ensure image is in public/images
              alt="Vishal Muniraj"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div> 

      {/* Floating Logos - Appear Below Navbar on Scroll */}
      <div className={`fixed top-16 left-6 z-40 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
        <img src="/images/cognizant.jpg" alt="Cognizant Logo" className="w-14 h-14 object-contain" />
      </div>

      <div className={`fixed top-16 left-24 z-40 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
        <img src="/images/Srmseal.png" alt="SRM University Logo" className="w-14 h-14 object-contain" />
      </div>

      <div className={`fixed top-16 left-44 z-40 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
        <img src="/images/images.png" alt="SLU Logo" className="w-14 h-14 object-contain" />
      </div>

      {/* Page Content */}
      <div className="from-gray-200 via-white to-gray-200 min-h-screen flex flex-col items-center text-center p-8">
        
       
{/* About Me Section */}
<div className="w-full min-h-screen bg-white flex items-center justify-center py-12"> 
  <div className="w-3/4 flex flex-col md:flex-row items-center">
    
    {/* Left Side - Profile Image */}
    <div className="md:w-1/2 flex justify-center">
      <img 
        src="\images\pic2.jpeg" // Ensure this image exists in the public folder
        alt="Vishal Muniraj"
        className="w-96 h-auto rounded-lg shadow-lg object-cover"
      />
    </div>

    {/* Right Side - About Me Details */}
    <div className="text-left text-gray-900 md:w-1/2 px-8">
      {/* Increased margin-bottom for heading */}
      <h1 className="text-5xl font-bold mb-6">
        About <span className="text-yellow-500">Me</span>
      </h1>
      
      {/* Increased margin-top to add spacing between heading and details */}
      <p className="text-lg text-gray-800 mt-10 leading-8">
        <span className="text-gray-900">Name:</span> Vishal Muniraj <br />
        <span className="text-gray-900">Date of Birth:</span> December 14, 2000 <br />
        <span className="text-gray-900">Address:</span> 4449 Maryland Ave, Apt-A4, St. Louis <br />
        <span className="text-gray-900">Zip Code:</span> 63108 <br />
        <span className="text-gray-900">Email:</span> 
        <a href="mailto:vishal.muniraj@slu.edu" className="text-blue-600 hover:underline">
          vishal.muniraj@slu.edu
        </a> <br />
        <span className="text-gray-900">Phone:</span> +1 (314) 440-3037
      </p>

      
    </div>
  </div>
</div>



{/* Add Space Between Sections */}
<div className="py-5"></div>
{/* Download CV Button */}
<a href="\resume\vishalmunirajcv.pdf" download>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition">
          DOWNLOAD CV
        </button>
      </a>

<section id="education" className="mt-12 w-full bg-white p-6 rounded-lg shadow-lg">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">
  </h2>

{/* Education & Professional Experience Section */}
<section className="w-full py-12 bg-white dark:bg-gray-900">
  <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
    Education & Professional Experience
  </h2>

  {/* Grid Layout for Equal Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

    {/* SRM University Card */}
    <motion.div
      className="relative flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6"
      whileHover={{ scale: 1.05 }}
    >
      <motion.img 
        src="/images/Srmseal.png"  
        alt="SRM University"
        className="w-auto h-40 object-contain"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-lg opacity-0 rounded-lg px-6 text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold text-yellow-400">June 2018 - May 2022</h2>
        <p className="text-lg font-semibold">Bachelor of Technology in Computer Science</p>
        <p className="text-sm mt-2">GPA: 3.28</p>
        <p className="text-sm mt-2">
        I completed my Bachelor of Technology in Computer Science and Engineering at SRM Institute of Science and Technology, 
        graduating with a GPA of 3.28. My major project focused on Speech Accent Recognition, where I applied deep learning and 
        signal processing techniques to classify various accents from speech data.
        </p>
      </motion.div>
    </motion.div>

    {/* SLU University Card */}
    <motion.div
      className="relative flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6"
      whileHover={{ scale: 1.05 }}
    >
      <motion.img 
        src="\images\images.png"  
        alt="Saint Louis University"
        className="w-auto h-40 object-contain"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-lg opacity-0 rounded-lg px-6 text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold text-yellow-400">Aug 2023 - Present</h2>
        <p className="text-lg font-semibold">Master&aposs in Computer Science</p>
        <p className="text-sm mt-2">
        I am currently pursuing my Master&aposs degree in Computer Science at Saint Louis University, 
        maintaining a GPA of 3.35. My coursework focuses on Machine Learning, Artificial Intelligence,
        allowing me to develop expertise in deep learning, natural language processing (NLP), and cloud computing.
        I have worked on projects like Sentiment Analysis on US Elections, applying advanced data science techniques 
        to real-world problems.
        </p>
      </motion.div>
    </motion.div>

  </div>

  {/* Cognizant Experience Card - Centered Below */}
  <div className="flex justify-center mt-12">
    <motion.div
      className="relative flex items-center justify-center bg-blue-900 rounded-lg shadow-lg p-6 w-[400px] md:w-[500px] h-[250px] md:h-[300px]"
      whileHover={{ scale: 1.05 }}
    >
      <motion.img 
        src="/images/cognizant.jpg"  
        alt="Cognizant"
        className="w-auto h-32 object-contain"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-lg opacity-0 rounded-lg px-4 text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-bold text-yellow-400">Feb 2022 - Dec 2023</h2>
        <p className="text-md font-semibold">Program Analyst Trainee</p>
        <p className="text-sm mt-2">
        I worked as a Program Analyst Trainee at Cognizant Technology Solutions from February 2022 to December 2023. 
        During this time, I specialized in ETL, Data Processing, and Dashboarding, working extensively with tools like Informatica, 
        Cognos, and Tableau to develop and optimize data pipelines. I contributed to multiple projects involving data 
        transformation, report generation, and business intelligence solutions. This role enhanced my expertise in data 
        engineering, automation, and analytics, preparing me for more advanced roles in AI and machine learning-driven solutions. 
        </p>
      </motion.div>
    </motion.div>
  </div>

</section>
</section>


  


         {/* Skills Section */}
         <Skills />   {/* 🔹 Add the Skills component here */}



    <motion.section
      id="projects"
      className="mt-12 w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
  
  {/* AI-Enhanced Helpdesk System */}
  <div 
    className="relative w-full max-w-sm aspect-square cursor-pointer mx-auto"
    onClick={() => setFlipped((prev) => ({ ...prev, helpdesk: !prev.helpdesk }))}
  >
    <motion.div 
      className={`relative w-full h-full rounded-lg shadow-lg transition-transform duration-700`}
      animate={{ rotateY: flipped.helpdesk ? 180 : 0 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front Side */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden"
        style={{ backfaceVisibility: "hidden" }}>
        <img
          src="/images/AI-in-Helpdesk.webp"
          alt="AI-Enhanced Helpdesk System"
          className="w-full h-full object-cover rounded-md"
        />
        <h3 className="text-xl font-bold mt-3 text-center">AI-Enhanced Helpdesk System</h3>
      </div>

      {/* Back Side */}
      <div className="absolute w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center text-white rounded-lg p-6"
        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
        <p className="text-sm text-center">
          A smart IT support automation system leveraging NLP techniques and machine learning to classify tickets and automate resolutions.
        </p>
      </div>
    </motion.div>
  </div>

  {/* Speech Accent Recognition */}
  <div 
    className="relative w-full max-w-sm aspect-square cursor-pointer mx-auto"
    onClick={() => setFlipped((prev) => ({ ...prev, accent: !prev.accent }))}
  >
    <motion.div 
      className={`relative w-full h-full rounded-lg shadow-lg transition-transform duration-700`}
      animate={{ rotateY: flipped.accent ? 180 : 0 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front Side */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden"
        style={{ backfaceVisibility: "hidden" }}>
        <img
          src="/images/speechaccent.jpg"
          alt="Speech Accent Recognition"
          className="w-full h-full object-cover rounded-md"
        />
        <h3 className="text-xl font-bold mt-3 text-center">Speech Accent Recognition</h3>
      </div>

      {/* Back Side */}
      <div className="absolute w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center text-white rounded-lg p-6"
        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
        <p className="text-sm text-center">
          Identifying accents using audio processing and ML models.
        </p>
      </div>
    </motion.div>
  </div>

</div>

    </motion.section>



       {/* Contact Section */}
<motion.section 
  id="contact"
  className="mt-12 w-3/4 md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-black dark:text-white"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.7 }}
>
  <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Contact</h2>

  {/* University Email */}
  <p className="mt-3 text-lg">
    Email: 
    <a href="mailto:vishal.muniraj@slu.edu" className="text-blue-600 dark:text-blue-400 hover:underline"> vishal.muniraj@slu.edu</a>
  </p>

  {/* Personal Email */}
  <p className="mt-3 text-lg">
    Personal Email: 
    <a href="mailto:mariyaselvam3@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline"> mariyaselvam3@gmail.com</a>
  </p>

  {/* Phone Number */}
  <p className="mt-3 text-lg">
    Phone: 
    <a href="tel:+13144403037" className="text-blue-600 dark:text-blue-400 hover:underline"> +1 (314)-440-3037</a>
  </p>
</motion.section>

      </div>
    </>
  );
}