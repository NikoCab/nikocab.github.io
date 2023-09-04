import React from "react";
import  Logo  from "./images/logo.png"; 
import "./header.css"

function Header() {
 return (
        <header>
          <div>
            <div><img src={Logo} alt="Logo de mi empresa" /></div>
          </div>
          
        </header>

  );
}

export default Header;