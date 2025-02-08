import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movie";
import AddMovie from "./components/AddMovie";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css"; // Import App.css

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? JSON.parse(storedMode) : false;
  });

  useEffect(() => {
    console.log("Dark Mode Active:", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log("Toggling Dark Mode...");
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
