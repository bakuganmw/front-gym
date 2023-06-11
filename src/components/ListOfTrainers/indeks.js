import React, { useState } from "react";
import axios from "axios";
const ListOfTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/trainers")
      .then((response) => {
        console.log(response);
        setTrainers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <ul className="list-group list">
        {trainers.map((trainer) => {
          return (
            <li className="listItem " key={trainer.id}>
              <img
                id="img"
                src={require("../../images/trainers/1.png")}
                alt="zs"
                style={{ width: "200px", heigt: "200px" }}
              />
              <p className={"para description "}>
                Trainer description:
                {trainer.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfTrainers;
