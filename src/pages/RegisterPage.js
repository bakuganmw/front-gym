import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "../components/LoginSection/FormContainer";
import LoginFooter from "../components/LoginSection/LoginFooter";
import { Link } from "react-router-dom";
import { blue, red } from "@mui/material/colors";

function RegisterPage() {
  return (
    <div>
      <FormContainer>
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3 rounded" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="FirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="FirstName"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="LastName"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
          </Form.Group>
          <Link to="/login" className="btn btn-primary">
              Sign Up
            </Link>
        </Form>
      </FormContainer>

      <LoginFooter></LoginFooter>
    </div>
  );
}

export default RegisterPage;
