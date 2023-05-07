import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "../components/LoginSection/FormContainer";
import LoginFooter from "../components/LoginSection/LoginFooter";
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

function LoginPage() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
            axios.post('http://localhost:8080/login', {
                email: email,
                password: password
              })
              .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                  window.location.href = '/';
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        
    }

  return (
    <div>
      <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3 rounded" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
            required
            type='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
          <Link to="/register">
              Register
            </Link>
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
