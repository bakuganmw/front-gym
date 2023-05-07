import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ EventId, ImageURL, EventName, Category, Price }) => {
  return (
    <>
      <div className="product">
        <div className="leftPro">
          <figure>
            <img src={ImageURL} alt={EventName} />
          </figure>
        </div>
        <div className="rightPro">
          <div>
            <h1>{EventName}</h1>
            <h2>Category: {Category}</h2>
            <h3>Price: {Price}</h3>
          </div>
          <Link to={`/trainer-reservation/${EventName}`} className="btn trainerbutton">
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductList;
