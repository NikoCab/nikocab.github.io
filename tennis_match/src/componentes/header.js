import React from "react"
import logo from "./logo.png" 
import "./header.css"
import { FaComment } from "react-icons/fa"

const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
        {/*<img src={logo} alt="Logo" className="logo" />*/}
        <h1 className="app-name">SuperTie</h1>
      </div>
      <button className="settings-button"> <FaComment/> </button>
    </div>
  )
}

export default Header