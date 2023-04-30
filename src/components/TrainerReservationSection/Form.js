import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
const initialData = {
  day: "",
  hour: ""
};

const Form = ({ImageURL }) => {
  const [formData, setFormData] = useState(initialData);
  const { id } = useParams();
  const updateFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(formData))
    alert(JSON.stringify(formData));
    setFormData(initialData);
  };

  const { day, hour } = formData;

  return (
    <>
      <div className="text-center">
        <h2> Trainer :{id}</h2>
      </div>
      <div className="product form-details">
        <div className="leftPro">
          <figure>
            <img src={ImageURL} alt="" />
          </figure>
        </div>
        <div className="rightPro">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Pick a day:</label>
              <select
                onChange={(e) => updateFormData(e)}
                placeholder="Pick a day"
                type="text"
                name="day"
                value={day}
                required
              >
                <option>Select option</option>
                <option>30.04</option>
                <option>01.05</option>
                <option>02.05</option>
                <option>03.05</option>
              </select>
            </div>
            <div>
              <label>Pick an hour:</label>
              <select
                onChange={(e) => updateFormData(e)}
                placeholder="Pick am hour"
                type="text"
                name="hour"
                value={hour}
                required
              >
                <option>Select option</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
              </select>
            </div>
            <button type="submit">Submit</button>
            <Link to="/trainer-reservation" className="btn btn-cancle">
              Cancle
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
