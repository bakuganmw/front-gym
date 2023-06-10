import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarCom from '../NavbarCom/indeks';

function BookTrainer() {
  const [trainerId, setTrainerId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoursOfDay, setHoursOfDay] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);

  useEffect(() => {
    // Pobranie danych o trenerze i ustawienie stanu
    const searchParams = new URLSearchParams(window.location.search);
    const trainerIdParam = searchParams.get('trainerId');
    const firstNameParam = searchParams.get('firstName');

    setTrainerId(trainerIdParam);
    setFirstName(firstNameParam);

    // Pobranie dostępnych godzin i ustawienie stanu
    const getAvailableHours = async () => {
      try {
        const endDate = getNextSundayDate();
        const response = await axios.get(
          `http://localhost:8080/trainers/${trainerIdParam}/schedule?endDate=${encodeURIComponent(endDate)}`
        );
        setHoursOfDay(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania godzin:', error);
      }
    };

    getAvailableHours();
  }, []);

  const getNextSundayDate = () => {
    const today = new Date();
    const daysUntilSunday = 7 - today.getDay(); // Liczba dni do najbliższej niedzieli
    const nextSunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysUntilSunday);
    nextSunday.setHours(19, 0, 0); // Ustawienie godziny na 19:00

    // Konwersja daty na format ISO 8601 bez znaku "Z"
    const endDate = nextSunday.toISOString().slice(0, -1);

    return endDate;
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  const handleSubmit = () => {
    // Wykonaj akcję po naciśnięciu przycisku Submit
    // np. wysłanie danych do serwera

    // Przykładowe logi
    console.log('Trainer ID:', trainerId);
    console.log('First Name:', firstName);
    console.log('Selected Day:', selectedDay);
    console.log('Selected Hour:', selectedHour);
  };

  return (
    <div>
    <NavbarCom />
      <h1>Book Trainer</h1>
      <p>Trainer ID: {trainerId}</p>
      <p>First Name: {firstName}</p>

      <div>
        <h2>Select a Day</h2>
        <ul>
          {daysOfWeek.map((day) => (
            <li key={day} onClick={() => handleDaySelect(day)}>
              {day}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Select an Hour</h2>
        <ul>
          {hoursOfDay.map((hour) => (
            <li key={hour} onClick={() => handleHourSelect(hour)}>
              {hour}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BookTrainer;
