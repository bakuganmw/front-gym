import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import getCookie from "../../Utilities/functions";
const FormStyle = styled.form`
  width: 100%;

  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.2rem;
    color: #bcb4b4;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.9rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 1rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {



const authHeader = getCookie("authHeader");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
        axios.put('http://localhost:8080/contact-us', {
            title: "Formularz kontaktowy",
            description: message,
            recipient: name,
            email: email
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
    <>
      <FormStyle onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </>
  );
}
