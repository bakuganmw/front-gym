import React from "react";
import axios from "axios";
import NavbarCom from "../components/NavbarCom/indeks";
const GymPage = () => {
  axios
    .get("http://localhost:8080/gyms")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
  return <div>
    <NavbarCom/>
  </div>;
};

export default GymPage;
