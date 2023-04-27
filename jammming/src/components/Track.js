import React, { useState } from 'react';
import './track.css'


function Track(props) {
    const [isInPlaylist, setIsInPlaylist] = useState(false);

    const onTrackClick = () => {
        props.onTrackClick(props.track);
      setIsInPlaylist(!isInPlaylist);
  };

  // Devolver el elemento JSX
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button onClick={onTrackClick}>
        {isInPlaylist ? 'Remover' : 'Agregar'}
      </button>
    </div>
  );
}

// Exportar el componente Track
export default Track;