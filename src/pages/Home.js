// src/pages/Home.js
import React from "react";
import PersonagemList from "./PersonagemList";

const Home = () => {
  return (
    <div>
      <h4 style={{ marginTop: "15px" }}>Lista de personagens da série</h4>
      <h1 style={{ marginTop: "0", marginBottom: "20px" }}>Rick and Morty</h1>
      <PersonagemList />
    </div>
  );
};

export default Home;
