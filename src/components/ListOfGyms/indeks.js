import React, { useState } from "react";
import axios from "axios";
import "./listOfGymsElements.css";

const ListOfGyms = () => {
  const [locationsCopy, setLocationsCopy] = useState([]);
  const [locations, setLocations] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/gyms")
      .then((response) => {
        console.log(response);
        setLocations(response.data);
        setLocationsCopy(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [distances, setDistances] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [minDistance, setMinDistance] = useState(Number.MAX_VALUE);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let minimalDistance = Number.MAX_VALUE;
        let newDistances = [];
        for (let i = 0; i < locationsCopy.length; i++) {
          let y =
            Math.cos((locationsCopy[i].longitude * Math.PI) / 180) *
            (position.coords.latitude - locationsCopy[i].latitude);
          let x = position.coords.longitude - locationsCopy[i].longitude;
          let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
          newDistances[i * 2] = distance;
          minimalDistance = Math.min(distance, minimalDistance);
        }
        setMinDistance(minimalDistance);
        setDistances(newDistances);
      });
    } else {
      console.log("Geolocation is not supported");
    }
  }

  getLocation();
  const handleSearch = () => {
    setLocations(locationsCopy);
    if (filteredValue !== "") {
      const searchTerm = filteredValue.trim();
      const filteredLocations = locations.filter((location) =>
        location.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setLocations(filteredLocations);
      console.log(filteredLocations);
    } else {
      setLocations(locationsCopy);
    }
  };

  return (
    <div className="wrapper">
      <div className="searchSection">
        <input
          type="text"
          id="searchInput"
          className="mx-auto"
          placeholder="Enter your search term"
          value={filteredValue}
          onChange={(e) => setFilteredValue(e.target.value)}
        />
        <button id="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>

      <ul className="list-group list">
        {locations.map((location) => (
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
            <p className={"para"}>
              {Math.round(distances[location.id - 2])} km from your position
            </p>
            <p className={"para description "}>
              gyms description: {location.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfGyms;
