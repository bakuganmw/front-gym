import React from "react";
import { useState } from 'react';
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
            alert('Passwords do not match!')
        
        } 
        else if(checked ===false){
          alert('you are not above 12 years old')
        }else {
            axios.put('http://localhost:8080/users/register', {
                email: email,
                firstName: fname,
                lastName: lname,
                password: password
              })
              .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                  window.location.href = '/login';
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
const registerStyle = {
  width: "100%", 
  marginLeft: 0, 
  backgroundColor:"#C90815",
  border:"#C90815",
}

const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    console.log(checked);
  };
  return (
    <div>
      <FormContainer>
        <h1 className="mb-4">Sign Up</h1>
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
            <Form.Label className="mt-4">Are you above 13?</Form.Label>
            <input type="checkbox" className="ms-3" checked={checked}
          onChange={handleChange}></input>
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="password">
          </Form.Group>
          <Button className="rounded mt-2" type='submit' style={registerStyle}>
                    Register
                </Button>
        </Form>
      </FormContainer>

      <LoginFooter></LoginFooter>
    </div>
  );
}

export default RegisterPage;
