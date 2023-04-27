import React from 'react';
import './searchbar.css'


function Searchbar(props) {
 
  return (
    <div className="search-container"> 
      <form onSubmit={props.onSearchSubmit}>
        <input 
          type="text" 
          value={props.searchTerm} 
          onChange={props.onSearchChange} 
          placeholder="Enter a song, album or artist" 
          className="search-input" 
        />
        <button type="submit" className="search-button"> 
          <i className="fa fa-search"></i> 
        </button>
      </form>
    </div>
  );
}


export default Searchbar;