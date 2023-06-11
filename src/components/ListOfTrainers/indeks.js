import React, { useState, useEffect } from "react";
import axios from "axios";

const ListOfTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/trainers")
      .then((response) => {
        console.log(response);
        const trainersData = response.data;
        // Pobierz dane użytkowników po zakończeniu pobierania trenerów
        fetchUsers(trainersData);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchUsers = (trainersData) => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        console.log(response);
        const usersData = response.data;
        // Połącz dane trenerów z danymi użytkowników na podstawie trainerId
        const trainersWithUsersData = trainersData.map((trainer) => {
          const userData = usersData.find(
            (user) => user.trainerId === trainer.id
          );
          return {
            ...trainer,
            userData: userData ? userData : null,
          };
        });
        setTrainers(trainersWithUsersData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      <ul className="list-group list">
        {trainers.map((trainer) => (
          <li className="listItem" key={trainer.id}>
            <img
              id="img"
              src={require("../../images/1.png")}
              alt="zs"
              style={{ width: "200px", height: "200px" }}
            />
            <p className="para description">
              Description: {trainer.description}
            </p>
            {trainer.userData && (
              <p className="para">
                Full Name: {trainer.userData.firstName} {trainer.userData.lastName}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfTrainers;
