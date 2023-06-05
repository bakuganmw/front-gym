import React, { useState } from 'react'
import axios from 'axios';
const ListOfTrainers = () => {
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