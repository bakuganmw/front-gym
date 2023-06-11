import React, { useState } from "react";
import axios from "axios";
import NavbarCom from "../NavbarCom/indeks";
import { Col, Container, Row } from "react-bootstrap";
import { registerStyle } from "../../Utilities/functions";

function ChangeGym() {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const authHeader = getCookie("authHeader");

  const [description, setDescription] = useState("");
  const [gymId, setGymId] = useState("");
  const [opens, setOpens] = useState(Array(7).fill("08:00"));
  const [closes, setCloses] = useState(Array(7).fill("20:00"));

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      description: description,
      gymId: gymId,
      workSchedule: {
        opens: opens,
        closes: closes,
      },
    };

    const headers = {
      Authorization: authHeader,
    };

    axios
      .post("http://localhost:8080/trainers", formData, { headers })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(formData);
        console.log(error);
        // Obsługa błędów żądania POST
      });

    // Wyczyść formularz po wysłaniu żądania
    setDescription("");
    setGymId("");
    setOpens(Array(7).fill("08:00"));
    setCloses(Array(7).fill("20:00"));
  };

  return (
    <div className="backgroundBody">
      <NavbarCom />
      <Container id="FormContainer">
        <h1>Add Trainer</h1>
        <div className="me-4 my-4">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gymId">Gym ID:</label>
          <input
            type="number"
            id="gymId"
            value={gymId}
            onChange={(e) => setGymId(e.target.value)}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            {opens.map((value, index) => (
              <div key={index}>
                <label>Opens:</label>
                <input
                  type="text"
                  value={opens[index]}
                  onChange={(e) => {
                    const updatedOpens = [...opens];
                    updatedOpens[index] = e.target.value;
                    setOpens(updatedOpens);
                  }}
                />
                <label>Closes:</label>
                <input
                  type="text"
                  value={closes[index]}
                  onChange={(e) => {
                    const updatedCloses = [...closes];
                    updatedCloses[index] = e.target.value;
                    setCloses(updatedCloses);
                  }}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="mt-5" style={registerStyle}>Submit</button>
        </form>
      </Container>
    </div>
  );
}

export default ChangeGym;
