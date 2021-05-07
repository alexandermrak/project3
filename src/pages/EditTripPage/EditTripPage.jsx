import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditTripPage(props) {
  const location = useLocation();

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.trip);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdateTrip(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Edit Trip</h1>
      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={handleSubmit}
        className="edit"
      >
        <div className="form-group">
          <label>Trip Location:</label>
          <input
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Trip Date:</label>
          <input
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Trip Duration:</label>
          <input
            className="form-control"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Notes/Goals for Trip:</label>
          <input
            className="form-control"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" className="btn" disabled={invalidForm}>
          UPDATE TRIP
        </button>
        &nbsp;&nbsp;
        <Link to="/">CANCEL</Link>
      </form>
    </>
  );
}
