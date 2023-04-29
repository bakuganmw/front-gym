import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import giphy from "../../images/giphy.gif";
import "./ContainerStyle.css";

function FormContainer({ children }) {
  return (
    <div className='backgroundBody'>
    <div className='backgroundHead'>
    <a className='login' href='/'>Gym king</a>
    </div>
    <img class="mb-4 loginimage" src={giphy} alt="" width="250" height="200"></img>
    <Container id= 'FormContainer'>
      <Row className="justify-content-md-center">
        <Col xs={12} md={4}>
          {children}
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default FormContainer
