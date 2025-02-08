import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const About = () => {
  return (
    <motion.div
      className="about-container p-6"
      initial={{ opacity: 0 }} // Page fade-in effect
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center mb-4"
      >
        About PENTAGON PRIME MOVIES
      </motion.h1>

      {/* Animated Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg text-center"
      >
        Welcome to <strong>PENTAGON PRIME MOVIES</strong>, your go-to platform for discovering, exploring, and managing your favorite movies.
      </motion.p>

      {/* Developer Information */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-2xl font-semibold mt-6"
      >
        Developer Information
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        This application was developed by <strong>Group 2</strong>, passionate frontend developers with a love for movies and technology.
      </motion.p>

      {/* Animated List */}
      <motion.ul
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="list-disc pl-6 mt-4"
      >
        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <strong>React</strong> - A JavaScript library for building user interfaces.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <strong>React Router</strong> - For handling navigation between different pages.
        </motion.li>
      </motion.ul>

      {/* Purpose of the Application */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-2xl font-semibold mt-6"
      >
        Purpose of the Application
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        The purpose of <strong>PENTAGON PRIME MOVIES</strong> is to provide a simple and intuitive platform for users to:
      </motion.p>

      {/* Animated Ordered List */}
      <motion.ol
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="list-decimal pl-6 mt-4"
      >
        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          Browse a collection of movies with details like title, release year, description, and poster image.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          Add new movies to the collection using a user-friendly form.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          Learn more about the application and its development through the About page.
        </motion.li>
      </motion.ol>
    </motion.div>
  );
};

export default About;
