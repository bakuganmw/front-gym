import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContainerStyle.css";

function FormContainer({ children }) {
  return (
    <div className="backgroundBody">
      <Container id="FormContainer">
        <Row className="justify-content-md-center" style={{ marginTop: '-20px' }}>
          <Col xs={12} md={4}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormContainer;
