import React from "react";
import "./Reservation.css";
import Product from "./Product";
import NavbarCom from "../NavbarCom/indeks";

function Trainer() {
  return (
    <div>
      <NavbarCom />
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <Product></Product>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
