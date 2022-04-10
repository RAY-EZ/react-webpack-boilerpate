import React from "react";
import logo from './medias/logo.svg';
import Button from "./components/button/button";

function App(){
  return (
    <>
    <h1>Let's Build 🧑🏻‍💻</h1>
    <img src={logo}></img>
    <Button/>
    </>
  );
}

export default App;