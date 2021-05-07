import React from "react";
import { Link } from "react-router-dom";

function TripListItem({ trip, handleDeleteTrip }) {
  return (
    <div className="trip-list-item">
      <div>
        <h2>{trip.location}</h2>
      </div>
      <div>
        <Link
          to={{
            pathname: "/details",
            state: { trip },
          }}
        >
          DETAILS
        </Link>
        &nbsp; | &nbsp;
        <Link
          to={{
            pathname: "/edit",
            state: { trip },
          }}
        >
          EDIT
        </Link>
        <button
          className="btn btn-xs btn-primary margin-left-10"
          onClick={() => handleDeleteTrip(trip._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TripListItem;
