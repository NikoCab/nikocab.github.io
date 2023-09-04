import React from "react"
import "./navbar.css"
import { FaUser } from "react-icons/fa"
import { FaInfo } from "react-icons/fa"
import { FaTrophy } from "react-icons/fa"
import { FaUpload } from "react-icons/fa"



const NavBar = () => {
  return (
    <div className="nav-bar">
      <button className="nav-button"><FaUser/></button>
      <button className="nav-button"><FaInfo/></button>
      <button className="nav-button"><FaTrophy/></button>
      <button className="nav-button"><FaUpload/></button>

    </div>
  )
}

export default NavBar