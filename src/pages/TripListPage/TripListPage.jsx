import React from "react";
import TripListItem from "../../components/TripListItem/TripListItem";

function TripListPage(props) {
  console.log(props);
  return (
    <>
      <h1>Trip List</h1>
      <div>
        {props.trips.map((trip) => (
          /*{user = trip.user ? (*/
          <TripListItem trip={trip} key={trip._id} handleDeleteTrip={props.handleDeleteTrip} />
          /*) : (
            <h1></h1>
          )}*/
        ))}
      </div>
    </>
  );
}

export default TripListPage;
