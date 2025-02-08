import React from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/add-movie" className="nav-link">Add Movie</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <div className="dark-mode-buttons">
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
