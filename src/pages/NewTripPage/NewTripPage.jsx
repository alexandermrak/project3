import React, { useState, useRef, useEffect } from "react";

export default function NewTripPage(props) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    location: "",
    date: "Undecided",
    duration: "Undecided",
    notes: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddTrip(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>New Trip</h1>
      <form
        autoComplete="off"
        ref={formRef}
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
            required
          />
        </div>
        <div className="form-group">
          <label>Trip Date:</label>
          <input
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Trip Duration:</label>
          <input
            className="form-control"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Notes/Goals for Trip:</label>
          <input
            className="form-control"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn" disabled={invalidForm}>
          ADD TRIP
        </button>
      </form>
    </>
  );
}
