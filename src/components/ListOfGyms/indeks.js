import React, { useState } from "react";
import axios from "axios";
import "./listOfGymsElements.css";
const ListOfGyms = () => {
  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(";");
  //   for (let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) === " ") {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) === 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  // const authHeader = getCookie("authHeader");

  const [locations, setLocations] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/gyms")
      .then((response) => {
        console.log(response);
        setLocations(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [distances] = useState([]);
  const [minDistance, setMinDistance] = useState(Number.MAX_VALUE);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        let minimalDistance = Number.MAX_VALUE;
        for (let i = 0; i < locations.length; i++) {
          let y =Math.cos(locations[i].longitude*Math.PI/180)* (position.coords.latitude - locations[i].latitude);
          let x = position.coords.longitude - locations[i].longitude;
          let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
          distances[i] = distance;
          minimalDistance = Math.min(distance, minimalDistance);
        }
        setMinDistance(minimalDistance);
      });
    } else {
      console.log("error");
    }
  }
  console.log(distances);
  console.log(minDistance);
  getLocation();

  return (
    <div className="wrapper">
      <ul className="list-group list">
        {locations.map((location) => {
          return (
            <li
              className={
                "listItem " +
                (distances[location.id - 2] <= minDistance
                  ? "bg-success "
                  : "white")
              }
              key={location.id}
            >
              
              <p className={"para locationName"}>{location.address}</p>
              <p className={"para"}>{Math.round(distances[location.id - 2])} km from your position</p>
             

              <p className={"para description "}>
                gyms description:
                {location.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfGyms;
