import React, { useState, useEffect } from "react";
import axios from "axios";
import "./listOfGymsElements.css";

const ListOfGyms = () => {
  const [locationsCopy, setLocationsCopy] = useState([]);
  const [locations, setLocations] = useState([]);
  const [distances, setDistances] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [minDistance, setMinDistance] = useState(Number.MAX_VALUE);
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/gyms")
      .then((response) => {
        console.log(response);
        setLocations(response.data);
        setLocationsCopy(response.data);
        const addresses = response.data.map((location) => location.address);
        setAddressList(addresses);
      })
      .catch((err) => console.log(err));
  }, []);

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
          newDistances[locationsCopy[i].id - 1] = distance;
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

  useEffect(() => {
    setLocations(locationsCopy);
    if (filteredValue !== "") {
      const searchTerm = filteredValue.trim();
      const filteredLocations = locationsCopy.filter((location) =>
        location.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setLocations(filteredLocations);
      console.log(filteredLocations);
    } else {
      setLocations(locationsCopy);
    }
  }, [filteredValue]);

  const handleSelectAddress = (selectedAddress) => {
    setFilteredValue(selectedAddress);
  };

  return (
    <div className="wrapper">
      <div className="searchSection">
        <select
          id="addressSelect"
          className="mx-auto"
          value={filteredValue}
          onChange={(e) => handleSelectAddress(e.target.value)}
        >
          <option value="">All Locations</option>
          {addressList.map((address, index) => (
            <option key={index} value={address}>
              {address}
            </option>
          ))}
        </select>
      </div>

      <ul className="list-group list">
        {locations.map((location) => (
          <li
            className={
              "listItem " +
              (distances[location.id - 1] <= minDistance ? "bg-success" : "white")
            }
            key={location.id}
          >
            <p className="para locationName">{location.address}</p>
            <p className="para">
              {Math.round(distances[location.id - 1])} km from your position
            </p>
            <p className="para description">gyms description: {location.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfGyms;
