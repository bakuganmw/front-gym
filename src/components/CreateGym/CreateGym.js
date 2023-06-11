import React, { useState } from 'react';
import axios from 'axios';
import NavbarCom from '../NavbarCom/indeks';

const CreateGym = () => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');
  const [opens, setOpens] = useState(Array(7).fill('08:00'));
  const [closes, setCloses] = useState(Array(7).fill('19:00'));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gymData = {
      address: address,
      latitude: latitude,
      longitude: longitude,
      description: description,
      workSchedule: {
        opens: opens,
        closes: closes
      }
    };

    try {
      const response = await axios.post('http://localhost:8080/gyms', gymData);
      console.log('Pomyślnie utworzono siłownię:', response.data);
      // Tutaj możesz wykonać odpowiednie akcje po pomyślnym utworzeniu siłowni
      alert("Gym created!");
      window.location.href = '/';

    } catch (error) {
      console.error('Błąd podczas tworzenia siłowni:', error);
      // Tutaj możesz obsłużyć błąd i wyświetlić odpowiedni komunikat dla użytkownika
    }
  };

  // Generowanie opcji dla godzin od 08:00 do 19:00
  const generateOptions = () => {
    const options = [];
    for (let hour = 8; hour <= 19; hour++) {
      const formattedHour = hour.toString().padStart(2, '0');
      options.push(<option key={formattedHour}>{formattedHour}:00</option>);
    }
    return options;
  };

  return (
    <form onSubmit={handleSubmit}>
    <NavbarCom />
      <div>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Latitude:
          <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Longitude:
          <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Opens:
          {opens.map((value, index) => (
            <select key={index} value={value} onChange={(e) => setOpens([...opens.slice(0, index), e.target.value, ...opens.slice(index + 1)])}>
              {generateOptions()}
            </select>
          ))}
        </label>
      </div>
      <div>
        <label>
          Closes:
          {closes.map((value, index) => (
            <select key={index} value={value} onChange={(e) => setCloses([...closes.slice(0, index), e.target.value, ...closes.slice(index + 1)])}>
              {generateOptions()}
            </select>
          ))}
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateGym;
