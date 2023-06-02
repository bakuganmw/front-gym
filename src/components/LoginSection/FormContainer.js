import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContainerStyle.css";

function FormContainer({ children }) {
  return (
    <div className="backgroundBody">
      <div className="backgroundHead">
        <a id="login" href="/">
          Gym king
        </a>
      </div>
      <Container id="FormContainer">
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormContainer;
