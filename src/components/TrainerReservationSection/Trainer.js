import React from 'react';
import './Reservation.css';
import Product from './Product';


function Trainer() {
  return (
  <div>
        <div className='backgroundHead'>
              <a className='login' href='/'>Gym king</a>
        </div>
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
