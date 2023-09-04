import React from "react";
import "./App.css"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Header"; 
import Clientes from "./components/Clientes";



function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <a href=" "><h2>Este link funciona pero no le hagas click</h2></a>
      <Features/>
      <Clientes/>

      <Footer/>
      </div>
  );
}

export default App;
