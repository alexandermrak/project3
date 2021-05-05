import React from "react";
import TripCard from "../../Components/TripCard/TripCard";
import { useLocation } from "react-router-dom";

function TripDetailPage(props) {
  const {
    state: { trip },
  } = useLocation();

  return (
    <>
      <h1>Trip Details</h1>
      <TripCard key={trip._id} trip={trip} />
    </>
  );
}

export default TripDetailPage;
