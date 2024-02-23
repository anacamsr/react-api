// src/components/PersonagemCard.js
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
  Row,
  Col,
} from "reactstrap";

const PersonagemCard = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <div>
      <Card style={{ marginBottom: "20px" }}>
        <CardImg top width="100%" src={character.image} alt={character.name} />
        <CardBody>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardTitle style={{ fontSize: "16px", overflowWrap: "break-word" }}>
              {character.name}
            </CardTitle>
            <Button
              color="success"
              outline
              onClick={toggleModal}
              style={{ fontFamily: "monospace", color: "#B2DF28", borderColor: "#B2DF28", backgroundColor:"#27274e"}}
            >
              Info
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader
          toggle={toggleModal}
          style={{ fontFamily: "monospace", fontWeight: "bold", backgroundColor:"#B2DF28" }}
        >
          {character.name}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="4">
              <img
                src={character.image}
                alt={character.name}
                style={{
                  borderRadius: "50%",
                  border: "3px solid #B2DF28",
                  width: "100%",
                  //   maxWidth: "200px",
                }}
              />
            </Col>
            <Col xs="8">
              <p>
                <span style={{ fontWeight: "bold" }}>Nome:</span>{" "}
                {character.name}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Status:</span>{" "}
                {character.status}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Espécie:</span>{" "}
                {character.species}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Gênero:</span>{" "}
                {character.gender}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Origem:</span>{" "}
                {character.origin.name}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Local:</span>{" "}
                {character.location.name}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Criado:</span>{" "}
                {formatDate(character.created)}
              </p>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PersonagemCard;
