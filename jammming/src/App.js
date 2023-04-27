import React, { useState } from 'react';
import SearchBar from './components/searchbar';
import SearchResults from './components/SearchResults';
import Spotify from './components/spotify';
import TrackList from './components/Tracklist';
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
    Spotify.save(track.id)
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
        <SearchResults tracks={tracks} />
        <TrackList tracks={playlistTracks} onTrackClick={onTrackClick} />
    
      </div>
      
    </div>
  );
}

export default App;