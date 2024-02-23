import React from "react";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

const PersonagemCard = ({ character }) => {
  return (
    <>
          <Card>
            <CardImg
              top
              width="100%"
              src={character.image}
              alt={character.name}
            />
            <CardBody>
              <CardTitle>{character.name}</CardTitle>
            </CardBody>
          </Card>
    </>
  );
};

export default PersonagemCard;
