import React from "react";
import { useState } from 'react'
import Form from "react-bootstrap/Form";
import FormContainer from "../components/LoginSection/FormContainer";
import LoginFooter from "../components/LoginSection/LoginFooter";
import {Button} from 'react-bootstrap'
import axios from "axios";


function RegisterPage() {

    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [lname, setLname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
  
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            console.log('Passwords do not match!')
        } else {
            axios.put('http://localhost:8080/users/register', {
                email: email,
                firstName: fname,
                lastName: lname,
                password: password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

  return (
    <div>
      <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3 rounded" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
            required
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="FirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
            required
            type='fName'
            placeholder='Enter name'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
            required
            type='lName'
            placeholder='Enter last name'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
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
          <Form.Group className="mb-3 rounded" controlId="Confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
          </Form.Group>
          <Button className="rounded" type='submit' variant='primary' style={{ width: '100%', marginLeft: 0 }}>
                    Register
                </Button>
        </Form>
      </FormContainer>

      <LoginFooter></LoginFooter>
    </div>
  );
}

export default RegisterPage;
