import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarCom from "../NavbarCom/indeks";
import { Link } from "react-router-dom";
import getCookie from "../../Utilities/functions";
import "./Reservation.css";
import { registerStyle } from "../../Utilities/functions";
function Trainer() {
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [selectedGymId, setSelectedGymId] = useState(null);

  const authHeader = getCookie("authHeader");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users", {
          headers: {
            Authorization: authHeader,
          },
        });

        // Filtrujemy użytkowników, którzy mają powiązanie z trenerem
        const filteredUsers = response.data.filter(
          (user) => user.trainerId !== null
        );

        setUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/trainers", {
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
        const response = await axios.get("http://localhost:8080/gyms", {
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
    return trainer ? trainer.description : "";
  };

  const handleGymChange = (event) => {
    const selectedGymId = event.target.value;
    setSelectedGymId(selectedGymId);
  };

  const renderGymOptions = () => {
    return (
      <select className="mt-3" onChange={handleGymChange} value={selectedGymId}>
        <option value="">All Gyms</option>
        {gyms.map((gym) => (
          <option key={gym.id} value={gym.id}>
            {gym.address}
          </option>
        ))}
      </select>
    );
  };

  const renderTable = () => {
    let filteredUsers = users;

    if (selectedGymId) {
      filteredUsers = filteredUsers.filter((user) => {
        const trainer = trainers.find(
          (trainer) => trainer.id === user.trainerId
        );
        return trainer && trainer.gymId === selectedGymId;
      });
    }

    return (
      <table className="mx-auto mt-4 tableTrainers">
        <thead className="trainer">
          <tr>
            <th className="textValue"></th>
            <th className="textValue">Full Name</th>
            <th className="textValue">Description</th>
            <th className="textValue">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr className="trainer" key={user.userId}>
              <td className="textValue">
                {" "}
                <img
                  id="img"
                  src={require("../../images/trainers/" + user.trainerId + ".png")}
                  alt="zs"
                  style={{ width: "200px", heigt: "200px" }}
                />
              </td>
              <td className="textValue">
                {user.firstName} {user.lastName}
              </td>
              <td className="textValue">{getTrainerData(user.trainerId)}</td>
              <td className="textValue">
                <Link
                  to={`/book-trainer?trainerId=${user.trainerId}&firstName=${user.firstName}&lastName=${user.lastName}`}
                  className="btn btn-primary"
                  style={registerStyle}
                >
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
    <div className="backgroundBody">
      <NavbarCom />
      <div>
        <h1 className="mt-5">Available trainers</h1>
        {renderGymOptions()}
        {renderTable()}
      </div>
    </div>
  );
}

export default Trainer;
