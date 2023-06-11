import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarCom from "../NavbarCom/indeks";


function MyTrainings() {
    const [user, setUser] = useState(null);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/users/current")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://localhost:8080/trainings")
            .then((response) => {
                setTrainings(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredTrainings = trainings.filter(
        (training) => training.trainerId === user?.trainerId
    );

    return (
        <div>
            <NavbarCom />
            <h1>Training List</h1>
            {filteredTrainings.length === 0 ? (
                <p>You don't have any trainings at this moment</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Training Type</th>
                            <th>Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTrainings.map((training) => (
                            <tr key={training.id}>
                                <td>{training.trainingType}</td>
                                <td>{training.startTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default MyTrainings;

