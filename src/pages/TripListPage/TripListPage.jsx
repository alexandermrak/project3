import React from "react";
import TripListItem from "../../Components/TripListItem/TripListItem";

function TripListPage(props) {
  console.log(props);
  return (
    <>
      <h1>Trip List</h1>
      <div>
        {props.trips.map((trip) => (
          props.user._id === trip.user ? (
          <TripListItem trip={trip} key={trip._id} handleDeleteTrip={props.handleDeleteTrip} />
          ) : (
            <h1></h1>
          )
        ))}
      </div>
    </>
  );
}

export default TripListPage;
