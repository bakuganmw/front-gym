import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarCom from '../NavbarCom/indeks';

function BookTrainer() {
    const [trainerId, setTrainerId] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');
    const [availableDays, setAvailableDays] = useState([]);
    const [availableHours, setAvailableHours] = useState([]);
    const [selectedHour, setSelectedHour] = useState('');
    const [schedule, setSchedule] = useState([]);


    useEffect(() => {
        // Pobranie danych o trenerze i ustawienie stanu
        const searchParams = new URLSearchParams(window.location.search);
        const trainerIdParam = searchParams.get('trainerId');
        const firstNameParam = searchParams.get('firstName');

        setTrainerId(trainerIdParam);
        setFirstName(firstNameParam);
    }, []);

    useEffect(() => {
        // Pobranie listy dni i godzin dla wybranego trenera
        const fetchSchedule = async () => {
            try {
                const endDate = getNextSundayDate();
                const response = await axios.get(`http://localhost:8080/trainers/${trainerId}/schedule?endDate=${endDate}`);
                const schedule = response.data;
                const days = schedule.map((entry) => entry.split('T')[0]);
                const uniqueDays = Array.from(new Set(days)); // Usunięcie duplikatów dni
                setAvailableDays(uniqueDays);
                setSchedule(response.data);
            } catch (error) {
                console.error('Błąd podczas pobierania harmonogramu:', error);
            }
        };

        if (trainerId) {
            fetchSchedule();
        }
    }, [trainerId]);

    const getNextSundayDate = () => {
        const today = new Date();
        const daysUntilSunday = 7 - today.getDay(); // Liczba dni do najbliższej niedzieli
        const nextSunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysUntilSunday);
        nextSunday.setHours(23, 0, 0); // Ustawienie godziny na 19:00

        const endDate = nextSunday.toISOString().slice(0, -1);

        return endDate;
    };

    const handleDaySelect = (day) => {
        setSelectedDay(day);
        const selectedDaySchedule = schedule.filter((entry) => entry.split('T')[0] === day);
        console.log(selectedDaySchedule);
        if (selectedDaySchedule.length > 0) {
          const startHour = parseInt(selectedDaySchedule[0].split('T')[1].split(':')[0], 10);
          const endHour = parseInt(selectedDaySchedule[selectedDaySchedule.length - 1].split('T')[1].split(':')[0], 10);
      
          const availableHoursArray = Array.from({ length: endHour - startHour + 1 }, (_, index) => startHour + index);
          setAvailableHours(availableHoursArray);
        } else {
          setAvailableHours([]);
        }
      };
      
      
      
      

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
    };

    const handleSubmit = () => {
        // Tutaj możesz wykonać żądanie POST z wybranymi danymi
        console.log('Wybrany dzień:', selectedDay);
        console.log('Wybrana godzina:', selectedHour);
    };

    return (
        <div>
        <NavbarCom />
            <h1>Book Trainer</h1>
            <p>Trainer ID: {trainerId}</p>
            <p>First Name: {firstName}</p>

            <div>
                <label>Pick a day:</label>
                <select value={selectedDay} onChange={(e) => handleDaySelect(e.target.value)}>
                    <option value="">Select a day</option>
                    {availableDays.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Pick an hour:</label>
                <select value={selectedHour} onChange={(e) => handleHourSelect(e.target.value)}>
                    <option value="">Select an hour</option>
                    {availableHours.map((hour) => (
                        <option key={hour} value={hour}>
                            {hour}:00
                        </option>
                    ))}
                </select>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default BookTrainer;
