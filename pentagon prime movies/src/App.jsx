import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar"; 
import Home from "./components/Home";
import Movies from "./components/Movie"; 
import AddMovie from "./components/AddMovie";
import About from "./components/About";
import Footer from "./components/Footer"; 

function App() {
  // Load dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Function to enable Dark Mode
  const enableDarkMode = () => {
    setDarkMode(true);
    localStorage.setItem("darkMode", "true");
  };

  // Function to enable Light Mode
  const enableLightMode = () => {
    setDarkMode(false);
    localStorage.setItem("darkMode", "false");
  };

  // Apply dark mode class to body when state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} enableDarkMode={enableDarkMode} enableLightMode={enableLightMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} /> {/* ✅ Fixed import reference */}
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* ✅ Footer at the bottom */}
    </Router>
  );
}

export default App;
