import React, { useState, useEffect } from "react";
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
  const [closes, setCloses] = useState(Array(7).fill("19:00")); // Ustawienie domyślnej wartości na 19:00
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/gyms")
      .then((response) => {
        console.log(response);
        setGyms(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          alert("Changed gym with succes!")
          window.location.href = "/";
        }
      })
      .catch((error) => {
        alert("You already have a gym!")
        console.log(formData);
        console.log(error);
        // Obsługa błędów żądania POST
      });

    // Wyczyść formularz po wysłaniu żądania
    setDescription("");
    setGymId("");
    setOpens(Array(7).fill("08:00"));
    setCloses(Array(7).fill("19:00"));
  };

  const getGymAddress = (gymId) => {
    const gym = gyms.find((gym) => gym.id === gymId);
    return gym ? gym.address : "";
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour < 20; hour++) {
      const time = hour.toString().padStart(2, "0") + ":00";
      options.push(<option key={time} value={time}>{time}</option>);
    }
    return options;
  };

  return (
    <div className="backgroundBody">
      <NavbarCom />
      <Container id="FormContainer">
        <h1>Choose gym for trainers</h1>
        <div className="me-4 my-4">
          <label htmlFor="description" className="word">Description of trainer:</label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gymId" className="me-2 word">Gym Address:</label>
          <select
            id="gymId"
            value={gymId}
            onChange={(e) => setGymId(e.target.value)}
          >
            <option value="" >Select a gym</option>
            {gyms.map((gym) => (
              <option key={gym.id} value={gym.id}>
                {gym.address}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            {opens.map((value, index) => (
              <div key={index}>
                <label className="me-3 word">Opens:</label>
                <select
                className="me-3"
                  value={opens[index]}
                  onChange={(e) => {
                    const updatedOpens = [...opens];
                    updatedOpens[index] = e.target.value;
                    setOpens(updatedOpens);
                  }}
                >
                  {generateTimeOptions()}
                </select>
                <label className="me-3 word">Closes:</label>
                <select
                  value={closes[index]}
                  onChange={(e) => {
                    const updatedCloses = [...closes];
                    updatedCloses[index] = e.target.value;
                    setCloses(updatedCloses);
                  }}
                >
                  {generateTimeOptions()}
                </select>
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
