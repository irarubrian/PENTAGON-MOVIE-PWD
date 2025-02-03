import React, { useState } from "react";

function MovieCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails); // Toggle between details and basic view
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      {showDetails ? ( // Show details if showDetails is true
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Plot:</strong>{movie.Plot}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>

          {movie.Ratings && movie.Ratings.length > 0 && (
            <div>
              <h4>Ratings:</h4>
              <ul>
                {movie.Ratings.map((rating, index) => (
                  <li key={index}>
                    <strong>{rating.Source}:</strong> {rating.Value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button onClick={() => setShowDetails(false)}>Back to List</button>
        </div>
      ) : ( // Show basic view if showDetails is false
        <div>
          <img src={movie.Poster} alt={movie.Title} style={{ width: "150px" }} />
          <h2>{movie.Title}</h2>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
