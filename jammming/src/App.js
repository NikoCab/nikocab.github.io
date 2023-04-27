import React, { useState } from 'react';
import SearchBar from './components/searchbar';
import SearchResults from './components/SearchResults';
import Spotify from './components/spotify';
import Playlist from './components/Playlist'
import './App.css'


//Crear el componente

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [tracks, setTracks] = useState([]);
      const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
     event.preventDefault();
    Spotify.search(searchTerm)
      .then(tracks => {
          setTracks(tracks);
      })
      .catch(error => {
            console.error(error);
      });
  };
  //On trackclick deberia funcionar para pasar las canciones a la playlist
  function onTrackClick(track) {
    Spotify.savePlaylist(track.id)
      .then(() => {
        // Exito
        alert('Pista guardada en Spotify');
        // Añadir la pista al array de playlistTracks
        setPlaylistTracks([...playlistTracks, track]);
      })
      .catch(error => {
               console.error(error);
      });
  }
  const removeTrack = (track) => {
    // Filter out the track from the playlist tracks state variable
    setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
  };
  // Define a function to handle saving the playlist to Spotify
const savePlaylist = () => {
  // Get an array of track URIs from the playlist tracks
  const trackURIs = playlistTracks.map(track => track.uri);
  // Call the Spotify.savePlaylist method with the track URIs
  Spotify.savePlaylist(trackURIs); // Change this from Spotify.save to Spotify.savePlaylist
  // Clear the playlist tracks state variable
  setPlaylistTracks([]);
};
  //Return el JSX de la página
  return (
    <div className="App">
      <img src='logo.jpeg'  alt='logo for jammming app'/>
        <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
        onSearchSubmit={handleSearchSubmit} 
      />
      <div  className="Cuerpo">
        <SearchResults tracks={tracks}  onTrackClick={onTrackClick}/>
        <Playlist tracks={playlistTracks} onTrackClick={removeTrack} onSave={savePlaylist} />
    
    
      </div>
      
    </div>
  );
}

export default App;