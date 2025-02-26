"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="mt-12 w-3/4 md:w-3/4 bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800">My Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center mt-6">
        {/* Skill - Docker */}
        <motion.div whileHover={{ scale: 1.05 }} className="p-4">
          <h3 className="text-lg font-semibold">Docker</h3>
          <p className="text-gray-600 text-sm mt-2">
            Proficient in containerizing and deploying applications for scalable software delivery.
          </p>
        </motion.div>

        {/* Skill - Kubernetes */}
        <motion.div whileHover={{ scale: 1.05 }} className="p-4">
          <h3 className="text-lg font-semibold">Kubernetes</h3>
          <p className="text-gray-600 text-sm mt-2">
            Managing containerized applications for high availability and fault tolerance.
          </p>
        </motion.div>

        {/* Skill - Machine Learning */}
        <motion.div whileHover={{ scale: 1.05 }} className="p-4">
          <h3 className="text-lg font-semibold">Machine Learning</h3>
          <p className="text-gray-600 text-sm mt-2">
            Skilled in ML model development with TensorFlow, Scikit-learn & predictive analytics.
          </p>
        </motion.div>

        {/* Skill - HTML & CSS */}
        <motion.div whileHover={{ scale: 1.05 }} className="p-4">
          <h3 className="text-lg font-semibold">HTML & CSS</h3>
          <p className="text-gray-600 text-sm mt-2">
            Front-end development using HTML & CSS to create responsive UI designs.
          </p>
        </motion.div>

        {/* Skill - Python */}
        <motion.div whileHover={{ scale: 1.05 }} className="p-4">
          <h3 className="text-lg font-semibold">Python</h3>
          <p className="text-gray-600 text-sm mt-2">
            Experienced in Python for automation, data processing, and ML model implementation.
          </p>
        </motion.div>
      </div>

      {/* Progress Bars */}
      <div className="mt-6">
        {/* Docker */}
        <div className="mb-4">
          <h4 className="text-lg font-bold">Containerization: Docker</h4>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
            <motion.div
              className="bg-yellow-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "85%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>

        {/* Python */}
        <div className="mb-4">
          <h4 className="text-lg font-bold">Python</h4>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
            <motion.div
              className="bg-yellow-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "90%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>

        {/* Kubernetes */}
        <div className="mb-4">
          <h4 className="text-lg font-bold">Kubernetes</h4>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
            <motion.div
              className="bg-yellow-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="mb-4">
          <h4 className="text-lg font-bold">Machine Learning</h4>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
            <motion.div
              className="bg-yellow-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>

        {/* HTML & CSS */}
        <div className="mb-4">
          <h4 className="text-lg font-bold">HTML & CSS</h4>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
            <motion.div
              className="bg-yellow-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "70%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
