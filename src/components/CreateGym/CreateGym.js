import React, { useState } from "react";
import axios from "axios";
import NavbarCom from "../NavbarCom/indeks";
import { Container } from "react-bootstrap";
import { registerStyle } from "../../Utilities/functions";

const CreateGym = () => {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [opens, setOpens] = useState(Array(7).fill("08:00"));
  const [closes, setCloses] = useState(Array(7).fill("19:00"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gymData = {
      address: address,
      latitude: latitude,
      longitude: longitude,
      description: description,
      workSchedule: {
        opens: opens,
        closes: closes,
      },
    };

    try {
      const response = await axios.post("http://localhost:8080/gyms", gymData);
      console.log("Pomyślnie utworzono siłownię:", response.data);
      // Tutaj możesz wykonać odpowiednie akcje po pomyślnym utworzeniu siłowni
      alert("Gym created!");
      window.location.href = "/";
    } catch (error) {
      console.error("Błąd podczas tworzenia siłowni:", error);
      // Tutaj możesz obsłużyć błąd i wyświetlić odpowiedni komunikat dla użytkownika
    }
  };

  // Generowanie opcji dla godzin od 08:00 do 19:00
  const generateOptions = () => {
    const options = [];
    for (let hour = 8; hour <= 19; hour++) {
      const formattedHour = hour.toString().padStart(2, "0");
      options.push(<option key={formattedHour}>{formattedHour}:00</option>);
    }
    return options;
  };

  return (
    <div className="backgroundBody">
      <NavbarCom />
      <Container id="FormContainer" style={{ width: "70vw" }} onSubmit={handleSubmit}>
        <h1>Create gyms</h1>
        <form classNameonSubmit={handleSubmit}>
          <div>
            <label className="mt-3">
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="mt-3">
              Latitude:
              <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="mt-3 me-3">
              Longitude:
              <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="mt-3 me-2">
              Description:
              <textarea
                style={{ display: "block" }}
                value={description}
                rows={5}
                cols={80}
                className="mb-3"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Opens:
              {opens.map((value, index) => (
                <select
                  key={index}
                  value={value}
                  onChange={(e) =>
                    setOpens([
                      ...opens.slice(0, index),
                      e.target.value,
                      ...opens.slice(index + 1),
                    ])
                  }
                >
                  {generateOptions()}
                </select>
              ))}
            </label>
          </div>
          <div>
            <label className="me-1 mt-4">
              Closes:
              {closes.map((value, index) => (
                <select
                  key={index}
                  value={value}
                  onChange={(e) =>
                    setCloses([
                      ...closes.slice(0, index),
                      e.target.value,
                      ...closes.slice(index + 1),
                    ])
                  }
                >
                  {generateOptions()}
                </select>
              ))}
            </label>
          </div>
          <button type="submit" className="mt-4" style={registerStyle}>
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default CreateGym;
