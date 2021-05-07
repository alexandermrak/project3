import React from "react";
import { Link } from "react-router-dom";

function TripCard({ trip }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{trip.location}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Date</dt>
          <dd>{trip.date}</dd>
          <dt>Length of Stay</dt>
          <dd>{trip.duration}</dd>
          <dt>Notes:</dt>
          <dd>{trip.notes}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/">RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default TripCard;
