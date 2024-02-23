// src/pages/CharacterList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonagemCard from "../components/PersonagemCard";
import { Col, Container, Row } from "reactstrap";

const PersonagemList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacters();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={handleChange}
      />
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Container style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "15px",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginBottom: "20px",
        }}>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {characters.map((character) => (
              <PersonagemCard key={character.id} character={character} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PersonagemList;
