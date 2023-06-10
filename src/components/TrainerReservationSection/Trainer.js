import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarCom from '../NavbarCom/indeks';
import { Link } from 'react-router-dom';

function Trainer() {
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [selectedGymId, setSelectedGymId] = useState(null);

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users', {
          headers: {
            Authorization: authHeader,
          },
        });

        // Filtrujemy użytkowników, którzy mają powiązanie z trenerem
        const filteredUsers = response.data.filter((user) => user.trainerId !== null);

        setUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/trainers', {
          headers: {
            Authorization: authHeader,
          },
        });
        setTrainers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGyms = async () => {
      try {
        const response = await axios.get('http://localhost:8080/gyms', {
          headers: {
            Authorization: authHeader,
          },
        });
        setGyms(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    fetchTrainers();
    fetchGyms();
  }, []);

  const getTrainerData = (trainerId) => {
    const trainer = trainers.find((trainer) => trainer.id === trainerId);
    return trainer ? trainer.description : '';
  };

  const handleGymChange = (event) => {
    const selectedGymId = event.target.value;
    setSelectedGymId(selectedGymId);
  };

  const renderGymOptions = () => {
    return (
      <select onChange={handleGymChange} value={selectedGymId}>
        <option value="">All Gyms</option>
        {gyms.map((gym) => (
          <option key={gym.id} value={gym.id}>
            {gym.id}
          </option>
        ))}
      </select>
    );
  };

  const renderTable = () => {
    let filteredUsers = users;

    if (selectedGymId) {
      filteredUsers = filteredUsers.filter((user) => {
        const trainer = trainers.find((trainer) => trainer.id === user.trainerId);
        return trainer && trainer.gymId === selectedGymId;
      });
    }

    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.userId}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{getTrainerData(user.trainerId)}</td>
              <td>
                <Link to={`/book-trainer?trainerId=${user.trainerId}&firstName=${user.firstName}`} className="btn btn-primary">
                  Book Now
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


  return (
    <div>
    <NavbarCom />
      <h1>User Trainers</h1>
      {renderGymOptions()}
      {renderTable()}
    </div>
  );
}

export default Trainer;
