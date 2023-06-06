import React, { useState } from 'react'
import axios from 'axios';
import getCookie from '../../Utilities/functions';
const ListOfTrainers = () => {
    
      const authHeader = getCookie("authHeader");
      const [trainers,setTrainers] = useState([]);
      React.useEffect(() => {
        axios
          .get("http://localhost:8080/trainers", {
            headers: {
              Authorization: authHeader,
            },
          })
          .then((response) => {
            console.log(response);
            setTrainers(response.data);
          })
          .catch((err) => console.log(err));
      }, [authHeader]);

      
  return (
    <div className="wrapper">
      <ul className="list-group list">
        {trainers.map((trainer) => {
          return (
            <li
              className={
                "listItem "
              }
              key={trainer.id}
            >
              
             
              <img id="img" src={require('../../images/1.png')} alt='zs' style={{width: "200px",heigt: "200px"}}/>
              <p className={"para description "}>
                Trainer description:
                {trainer.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default ListOfTrainers