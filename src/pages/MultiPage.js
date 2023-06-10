import React, { useState } from "react";
import NavbarCom from "../components/NavbarCom/indeks";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { registerStyle } from "../Utilities/functions";
import axios from "axios";
const MultiPage = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [cardType, setCardType] = useState("");
  const [city, setCity] = useState("");
  const [postalNumber, setPostalNumber] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/contact-us/multisport", {
        cardType: cardType,
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phoneNumber,
        sex: gender,
        street: street,
        homeNumber: streetNumber,
        postalCode: postalNumber,
        city: city,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log("ok");
          alert("it works");
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(postalNumber);
        console.log(email);
        console.log(cardType);
        console.log(gender);
      });
  };
  return (
    <div className="backgroundBody">
      <NavbarCom />
      <Container id="FormContainer">
        <h1 className="mb-5">Multi sport</h1>
        <Form onSubmit={submitHandler}>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "-20px" }}
          >
            <Col xs={12} md={4}>
              <Form.Group className="mb-3 rounded" controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="fName"
                  placeholder="Enter first name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="FirstName">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={gender}
                  required
                  onChange={(e) => setGender(e.target.value)}
                  style={{ marginLeft: "0" }}
                >
                  <option value="" disabled>
                    choose gender
                  </option>
                  <option defaultValue={"male"} value="male">
                    Male
                  </option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={city}
                  required
                  placeholder="Enter city"
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="street">
                <Form.Label>Street Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter street name"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3 rounded" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="lName"
                  placeholder="Enter last name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="telephoneNumber">
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter telephone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="cardType">
                <Form.Label>Card Type</Form.Label>
                <Form.Select
                  required
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  style={{ marginLeft: "0" }}
                >
                  <option value="" disabled>
                    choose card type
                  </option>
                  <option value="multiSport">Multi sport</option>
                  <option value="multi">multi </option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Postal code"
                  value={postalNumber}
                  onChange={(e) => setPostalNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="streetNumber">
                <Form.Label>Street Number</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter street number"
                  value={streetNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button className="rounded mt-2" type="submit" style={registerStyle}>
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default MultiPage;
