import React from "react"
import "./main.css"
import profile from "./profile.jpeg"

const Main = () => {
  return (
    <div className="main">
      
       <div className="profile-container">
        <img src={profile} alt="Profile" className="profile" />
        <h2 className="name">Juan <br></br> Pérez</h2>
        <div className="ranking-container">
            <h3 className="ranking-title">Ranking</h3>
            <p className="ranking-item">Singles: 15</p>
            <p className="ranking-item">Dobles: 10</p>
        </div>
      </div>
      <div className="Datos">

        
        <div className="match-container">
            <h3 className="match-title">Último encuentro</h3>
            <p className="match-item">Ganó a Pedro Sánchez por 6-4, 6-3</p>
        </div>
        <div className="match-container">
            <h3 className="match-title">Próximo encuentro</h3>
            <p className="match-item">Juega contra José García el 25/01/2023 a las 16:00</p>
            </div>
            <button className="new-match"> Agenda tu proxima partida </button>

      </div>
          
            
    </div>
  )
}
export default Main