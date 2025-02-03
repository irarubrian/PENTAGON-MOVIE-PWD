import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    return (
        <div >
            <h1>PENTAGON PRIME MOVIES</h1>
            <p className="intro"> Your prime destination for discovering and exploring the finest movies.</p>
            <div className="home-buttons">
                {/* Navigation buttons for movie browsing and learning more */}
                <button  className="Browse"  onClick={() => navigate("/movies")}>Browse Movies</button>
                <button  className= "Learn"   onClick={() => navigate("/about")}>Learn More</button>
            </div>
        </div>
    );
}
//Anwar