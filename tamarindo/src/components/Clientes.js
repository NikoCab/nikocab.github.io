import React from "react";
import "./Clientes.css"
import Logo1 from "./images/logo1.png"
import Logo2 from "./images/logo2.png"
import Logo3 from "./images/logo3.png"
import Logo4 from "./images/logo4.png"



function Clientes() {

  const logos = [
    Logo1, Logo2, Logo3, Logo4
       
  ];

  return (
    <clientes className="clientes">
      <h2 className="header-title">Nuestros clientes</h2>
      <div className="ticker">
      {logos.map((logo, index) => (
        // Elemento img con el logo correspondiente al índice actual
        <img
          className="loguito"
          src={logo}
          alt="logo"
          width="100"
          height="100"
          key={index}
        />
      ))}
      </div>
    </clientes>
  );
}

export default Clientes;
