import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import fivewarriors from "../assets/five-warrious.jpeg";
import onewarrior from "../assets/one-wariou.jpeg";
import onelady from "../assets/oneladt.jpeg";  
import sniper from "../assets/snipper.jpeg";
import danger2 from "../assets/danger2.jpeg";
import danger5 from "../assets/danger5.jpeg";
import danger6 from "../assets/danger6.jpeg";
import gym from "../assets/gym.jpeg";
import jetl from "../assets/jetl.jpeg";
import rambo from "../assets/rambo.jpeg";
import maent from "../assets/maent.jpeg";

export default function Home() {
    const navigate = useNavigate();

    const movieImages = [
        { src: fivewarriors, alt: "Five Warriors Movie Poster" },
        { src: onewarrior, alt: "One Warrior Movie Poster" },
        { src: onelady, alt: "One Lady Movie Poster" },
        { src: sniper, alt: "Sniper Movie Poster" },
        { src: danger2, alt: "Danger Movie Poster 2" },
        { src: danger5, alt: "Danger Movie Poster 5" },
        { src: danger6, alt: "Danger Movie Poster 6" },
        { src: gym, alt: "Gym Movie Poster" },
        { src: jetl, alt: "Jet Li Movie Poster" },
        { src: rambo, alt: "Rambo Movie Poster" },
        { src: maent, alt: "Maent Movie Poster" },
    ];

    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Animated Title with Rotation */}
            <motion.h1
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
                className="text-4xl font-bold text-center"
            >
                PENTAGON PRIME MOVIES
            </motion.h1>

            {/* Animated Paragraph */}
            <motion.p
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="text-lg text-center mt-4"
            >
                Your prime destination for discovering and exploring the finest movies.
            </motion.p>

            {/* Image Grid with Rotation Effect */}
            <div className="home-image-grid">
                {movieImages.map((movie, index) => (
                    <motion.img
                        key={index}
                        src={movie.src}
                        alt={movie.alt}
                        className="movie-poster"
                        initial={{ rotate: -10, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    />
                ))}
            </div>

            {/* Animated Buttons */}
            <motion.div
                className="home-buttons"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <motion.button
                    className="browse-btn"
                    onClick={() => navigate("/movies")}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Browse Movies
                </motion.button>
                <motion.button
                    className="learn-btn"
                    onClick={() => navigate("/about")}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Learn More
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
