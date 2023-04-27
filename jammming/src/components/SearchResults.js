import React from 'react';
import Track from './Track';
import './SearchResults.css'
// Define el componente
function SearchResults(props) {
  // Crea un handler para la función
  const handleTrackClick = (track) => {
    //llama a la función
    props.onTrackClick(track);
  };

  // Return the JSX element
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <ul>
        {/* Map over the tracks array and render a Track component for each track */}
        {props.tracks.map(track => (
          <li key={track.id}>
            <Track track={track} onTrackClick={() => handleTrackClick(track)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the SearchResults component
export default SearchResults;