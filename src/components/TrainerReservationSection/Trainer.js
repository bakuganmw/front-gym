import React from 'react';
import './Reservation.css';
import Product from './Product';
import Form from './Form';

function Trainer() {
  return (
        <div className="App">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <Product></Product>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Trainer;
