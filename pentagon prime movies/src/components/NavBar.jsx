import React from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, enableDarkMode, enableLightMode }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/add-movie" className="nav-link">Add Movie</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <div className="dark-mode-buttons">
        {!darkMode ? (
          <button className="dark-mode-btn" onClick={enableDarkMode}>Dark Mode</button>
        ) : (
          <button className="light-mode-btn" onClick={enableLightMode}>Light Mode</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
