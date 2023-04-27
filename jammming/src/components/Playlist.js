import React, { useState } from 'react';
import TrackList from './Tracklist';
import './Playlist.css';

// Create the Playlist component
function Playlist({ tracks, onTrackClick, onSave }) {
  // Use a state variable to store the playlist name
  const [name, setName] = useState('New Playlist');

  // Define a function to handle the change of the input value
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  // Return the JSX element
  return (
    <div className="Playlist">
      {/* Render an input element to enter the playlist name */}
      <input value={name} onChange={onNameChange} />
      {/* Render a TrackList component with the tracks and onTrackClick props */}
      <TrackList tracks={tracks}  onTrackClick={onTrackClick} />
      {/* Render a button element to save the playlist to Spotify */}
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

// Export the Playlist component
export default Playlist;