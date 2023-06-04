import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "../components/LoginSection/FormContainer";
import LoginFooter from "../components/LoginSection/LoginFooter";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const encodedHeader = Buffer.from(email + ":" + password).toString(
      "base64"
    );
    const authHeader = "Basic " + encodedHeader;

    axios
      .post(
        "http://localhost:8080/login",
        {},
        {
          headers: {
            Authorization: authHeader,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        console.log(authHeader);
        document.cookie =
          "authHeader=" + authHeader + "; expires=" + new Date("2050-03-25");
        if (response.status === 200) {
          window.location.href = "/";
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(authHeader);
        alert("incorrect login or password");
      });
  };
  const registerStyle = {
    width: "100%",
    marginLeft: 0,
    backgroundColor: "#C90815",
    border: "#C90815",
  };
  return (
    <div>
      <FormContainer>
        <h1 className="mb-4">Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3 rounded" controlId="email">
            <Form.Label className="fontSize">Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
            <Link to="/register">Register</Link>
          </Form.Group>
          <Button className="rounded " type="submit" style={registerStyle}>
            Sign In
          </Button>
        </Form>
      </FormContainer>

      <LoginFooter></LoginFooter>
    </div>
  );
}

export default LoginPage;
