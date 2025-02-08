import React from "react";
import { useNavigate } from "react-router-dom";
import fivewarrious from "../assets/five-warrious.jpeg";
import onewariou from "../assets/one-wariou.jpeg";
import oneladt from "../assets/oneladt.jpeg";
import snipper from "../assets/snipper.jpeg";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Heading and Introduction */}
            <h1>PENTAGON PRIME MOVIES</h1>
            <p className="intro">
                Your prime destination for discovering and exploring the finest movies.
            </p>

            {/* Spider-Man Image */}
            <div className="home-image">
                <img 
                    src={fivewarrious}
                    alt="Spider-Man Movie Poster" 
                />
                 <img 
                    src={onewariou}
                    alt="Spider-Man Movie Poster" 
                />
                 <img 
                    src={oneladt}
                    alt="Spider-Man Movie Poster" 
                />
                 <img 
                    src={snipper}
                    alt="Spider-Man Movie Poster" 
                />
            </div>

            {/* Navigation Buttons */}
            <div className="home-buttons">
                {/* Navigation buttons for movie browsing and learning more */}
                <button className="Browse" onClick={() => navigate("/movies")}>
                    Browse Movies
                </button>
                <button className="Learn" onClick={() => navigate("/about")}>
                    Learn More
                </button>
            </div>
        </div>
    );
}