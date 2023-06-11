import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarCom from "../NavbarCom/indeks";
import getCookie from "../../Utilities/functions";

function MyTrainings() {
  const [user, setUser] = useState(null);
  const [trainings, setTrainings] = useState([]);

  const authHeader = getCookie("authHeader");

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/current", {
        headers: {
          Authorization: authHeader,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/trainings", {
        headers: {
          Authorization: authHeader,
        },
      })
      .then((response) => {
        setTrainings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatDateTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const timeString = dateObj.toISOString().slice(11, 16);
    const dateString = dateObj.toISOString().slice(0, 10).replace(/-/g, "/");
    return `${timeString} ${dateString}`;
  };

  const filteredTrainings = trainings.filter(
    (training) => training.trainerId === user?.trainerId
  );

  return (
    <div className="backgroundBody">
      <NavbarCom />
      <h1 className="mt-4"> Trainers training List</h1>
      {filteredTrainings.length === 0 ? (
        <p>You don't have any trainings at this moment</p>
      ) : (
        <table className="mx-auto">
          <thead >
            <tr>
              <th style={{fontSize:"4vh"}}>Start Time of trainings</th>
            </tr>
          </thead>
          <tbody >
            {filteredTrainings.map((training) => (
              <tr key={training.id} style={{fontSize:"3vh",border:"solid #C90815"}}>
                <td>{formatDateTime(training.startTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyTrainings;
