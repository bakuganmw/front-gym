import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "../components/LoginSection/FormContainer";
import LoginFooter from "../components/LoginSection/LoginFooter";

function LoginPage() {
  return (
    <div>
      <FormContainer>
        <h1>Sign In</h1>
        <Form>
          <Form.Group className="mb-3 rounded" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
          <a href="#">
                Register
              </a>
          </Form.Group>
          <Button
            className="rounded"
            type="submit"
            variant="primary"
            style={{ width: "100%", marginLeft: 0 }}
          >
            Sign In
          </Button>
        </Form>
      </FormContainer>

      <LoginFooter></LoginFooter>
    </div>
  );
}

export default LoginPage;
