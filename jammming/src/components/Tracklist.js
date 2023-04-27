import Track from './Track';
import './Tracklist.css'

// Crear el componente
function TrackList({ tracks, onTrackClick }) {
  // El JSX del componente
  return (
    <div className="TrackList">
      {/* Mapear el array de pistas y renderizar un componente Track por cada pista */}
      {tracks.map(track => (
        // Pasar la función onTrackClick como prop al componente Track con el nombre onTrackClick
        <Track key={track.id} track={track} onTrackClick={onTrackClick} />
      ))}
    </div>
  );
}

// Exportar el componente TrackList
export default TrackList;