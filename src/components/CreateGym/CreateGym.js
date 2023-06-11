import React, { useState } from 'react';
import axios from 'axios';
import NavbarCom from '../NavbarCom/indeks';

const GymForm = () => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');
  const [opens, setOpens] = useState([]);
  const [closes, setCloses] = useState([]);

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
    } catch (error) {
      console.error('Błąd podczas tworzenia siłowni:', error);
      // Tutaj możesz obsłużyć błąd i wyświetlić odpowiedni komunikat dla użytkownika
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <NavbarCom />
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Latitude:
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
      <br />
      <label>
        Longitude:
        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Opens:
        <input type="text" value={opens} onChange={(e) => setOpens(e.target.value.split(','))} />
      </label>
      <br />
      <label>
        Closes:
        <input type="text" value={closes} onChange={(e) => setCloses(e.target.value.split(','))} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GymForm;
