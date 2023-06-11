import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarCom from "../NavbarCom/indeks";
import getCookie, { registerStyle } from "../../Utilities/functions";
import { Col, Container, Row } from "react-bootstrap";

function BookTrainer() {
  const [trainerId, setTrainerId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [availableDays, setAvailableDays] = useState([]);
  const [availableHours, setAvailableHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [gymId, setGymId] = useState("");
  const [lastName, setLastName] = useState(null);
  const [trainingId, setTrainingId] = useState('')
  const authHeader = getCookie("authHeader");

  useEffect(() => {
    // Pobranie danych o trenerze i ustawienie stanu
    const searchParams = new URLSearchParams(window.location.search);
    const trainerIdParam = searchParams.get("trainerId");
    const firstNameParam = searchParams.get("firstName");
    const lastNameParam = searchParams.get("lastName");
    setTrainerId(trainerIdParam);
    setFirstName(firstNameParam);
    setLastName(lastNameParam);
    console.log(lastNameParam);
  }, []);

  useEffect(() => {
    // Pobranie listy dni i godzin dla wybranego trenera
    const fetchSchedule = async () => {
      try {
        const endDate = getNextSundayDate();
        const response = await axios.get(
          `http://localhost:8080/trainers/${trainerId}/schedule?endDate=${endDate}`
        );
        const schedule = response.data;
        const days = schedule.map((entry) => entry.split("T")[0]);
        const uniqueDays = Array.from(new Set(days)); // Usunięcie duplikatów dni
        setAvailableDays(uniqueDays);
        setSchedule(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania harmonogramu:", error);
      }
    };

    const fetchTrainers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/trainers/" + trainerId,
          {
            headers: {
              Authorization: authHeader,
            },
          }
        );
        setGymId(response.data.gymId);
      } catch (error) {
        console.log(error);
      }
    };

    if (trainerId) {
      fetchSchedule();
      fetchTrainers();
    }
  }, [trainerId]);

  const getNextSundayDate = () => {
    const today = new Date();
    const daysUntilSunday = 7 - today.getDay(); // Liczba dni do najbliższej niedzieli
    const nextSunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + daysUntilSunday
    );
    nextSunday.setHours(23, 0, 0); // Ustawienie godziny na 19:00

    const endDate = nextSunday.toISOString().slice(0, -1);

    return endDate;
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    const selectedDaySchedule = schedule.filter(
      (entry) => entry.split("T")[0] === day
    );
    console.log(selectedDaySchedule);
    if (selectedDaySchedule.length > 0) {
      const availableHoursArray = selectedDaySchedule.map((entry) => {
        const hour = parseInt(entry.split("T")[1].split(":")[0], 10);
        return hour;
      });
      console.log(availableHoursArray);
      setAvailableHours(availableHoursArray);
    } else {
      setAvailableHours([]);
    }
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  const handleSubmit = async () => {
        console.log(selectedDay);
        console.log(selectedHour);
        const body = {
          gymId: gymId,
          trainerId: trainerId,
          gymSectionId: "9",
          trainingType: "test trainingType",
          startTime: selectedDay + "T" + selectedHour + ":00:00.000Z",
          maxParticipants: 1
        };
        const headers = {
          Authorization: authHeader
        };
      
        try {
          const response = await axios.post('http://localhost:8080/trainings', body, { headers });
          console.log('Pomyślnie utworzono trening:', response.data);
          // Tutaj możesz wykonać odpowiednie akcje po pomyślnym utworzeniu treningu
          console.log(response.data.id);
          const trainingId = response.data.id; // Ustawienie wartości trainingId
          setTrainingId(trainingId);
          
          try {
            const response = await axios.put(`http://localhost:8080/trainings/${trainingId}/reservation`, body, { headers });
            console.log('Pomyślnie zarezerwowano trening:', response.data);
            // Tutaj możesz wykonać odpowiednie akcje po pomyślnym zarezerwowaniu treningu
            alert('Reservation confirmed');
            window.location.href = '/trainer-reservation';
          } catch (error) {
            console.error('Błąd podczas rezerwacji treningu:', error);
            // Tutaj możesz obsłużyć błąd i wyświetlić odpowiedni komunikat dla użytkownika
          }
        } catch (error) {
          console.error('Błąd podczas tworzenia treningu:', error);
          // Tutaj możesz obsłużyć błąd i wyświetlić odpowiedni komunikat dla użytkownika
        }
      };

  return (
    <div className="backgroundBody">
      <NavbarCom />

      <Container id="FormContainer">
        <h1 className="mt-2">
          Book {firstName} {lastName}
        </h1>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "-20px" }}
        >
          <Col xs={12} md={4}>
            <div>
              <label className="textValue mt-4">Pick a day:</label>
              <select
                value={selectedDay}
                onChange={(e) => handleDaySelect(e.target.value)}
              >
                <option value="">Select a day</option>
                {availableDays.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <label className="textValue mt-4 me-4">Pick an hour:</label>
              <select
                className="pickDay ms-4"
                value={selectedHour}
                onChange={(e) => handleHourSelect(e.target.value)}
              >
                <option value="">Select an hour</option>
                {availableHours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}:00
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>
        <button className="mt-5"onClick={handleSubmit} style={registerStyle}>Submit</button>
      </Container>
    </div>
  );
}

export default BookTrainer;
