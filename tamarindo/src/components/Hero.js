import React, { useState, useEffect } from "react";
import "./Hero.css"
import hero from "./images/banner-temporal.png"
import hero2 from "./images/banner2.png"



function Hero() {
  // El estado que almacena la imagen actual
  const [image, setImage] = useState(hero);

  // El efecto que se ejecuta cuando se monta el componente
  useEffect(() => {
    // La función que cambia la imagen cada 4 segundos
    const changeImage = () => {
      // Si la imagen actual es hero, cambia a hero2
      if (image === hero) {
        setImage(hero2);
      } else {
        // Si la imagen actual es hero2, cambia a hero
        setImage(hero);
      }
    };

    // El identificador del intervalo que se crea con setInterval
    const intervalId = setInterval(changeImage, 3000); // 3000 milisegundos = 3 segundos

    // La función que se ejecuta cuando se desmonta el componente
    return () => {
      // Limpia el intervalo para evitar fugas de memoria
      clearInterval(intervalId);
    };
  }, [image]); // El efecto depende del estado image

  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero1" src={image} alt="Jugo de tamarindo" />
      </div>
    </div>
  );
}

export default Hero;