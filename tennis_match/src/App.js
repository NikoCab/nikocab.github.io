import React from "react"
import Header from "./componentes/header.js"
import "./App.css" 
import NavBar from "./componentes/navbar.js"
import Main from "./componentes/main.js"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Main className="main"/>
             
        <footer class="footer"> 
        <NavBar/>
 
         </footer>
      </div>
    )
  }
}

export default App
