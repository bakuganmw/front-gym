import React from 'react';
import styled from 'styled-components';
import MapImg from "../../images/map.png";
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 1rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 2rem;
    margin-bottom: 0.2rem;
    color: #BCB4B4;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">We are here</h3>
          <PText>Widzew, Łódź</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/GEC+More,+Chittagonhttps://www.google.com/maps/place/Stadion+Miejski+-+Widzew+%C5%81%C3%B3d%C5%BA/@51.7650877,19.5090795,17z/data=!3m1!4b1!4m6!3m5!1s0x471bcb50fbd7972f:0xa731c027ac705b63!8m2!3d51.7650844!4d19.5116544!16s%2Fm%2F027b2vkg/@22.3590818,91.8195583,17z/data=!3m1!4b1!4m5!3m4!1s0x30acd89aaa8239cd:0x6e65fa00001dd59f!8m2!3d22.3590715!4d91.8215486"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
