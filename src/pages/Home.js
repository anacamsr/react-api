// src/pages/Home.js
import React from "react";
import PersonagemList from "./PersonagemList";

const Home = () => {
  return (
    <div>
      <div>     
          <h4
          style={{
            marginTop: "20px",
            color: "#ffffff",
            textShadow: "2px 2px 0px #333333, 5px 4px 0px rgba(0,0,0,0.15)",
            marginBottom:"20px",
          }}
        >
          Lista de personagens da série
        </h4>
        {/* <h1
          style={{
            marginTop: "0",
            marginBottom: "20px",
            color: "#02B0C9",
            textShadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18",
          }}
        >
          Rick and Morty
        </h1> */}
      </div>
      <PersonagemList />
    </div>
  );
};

export default Home;
