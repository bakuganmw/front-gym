import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calendar from '../components/ReservationSection/Calendar';
import "./test.css"

function SessionReservation() {
                   
  return (
    <div className='App'>
      <h1 className='header-text'>Calendar </h1>
      <Calendar />
    </div>
  );
}

export default SessionReservation;