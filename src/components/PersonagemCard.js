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
} from "reactstrap";

const PersonagemCard = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Card style={{ marginBottom: "20px" }}>
        <CardImg top width="100%" src={character.image} alt={character.name} />
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <Button color="primary" onClick={toggleModal}>
            Detalhes
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{character.name}</ModalHeader>
        <ModalBody>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PersonagemCard;
