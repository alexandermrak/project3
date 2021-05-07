import { useEffect } from "react";
import TripListItem from "../../Components/TripListItem/TripListItem";
import * as tripAPI from "../../utilities/trips-api";

function TripListPage(props) {
  useEffect(() => {
    async function getTrips() {
      const trips = await tripAPI.getAll();
      props.setTrips(trips);
    }
    getTrips();
  }, []);

  return (
    <>
      <h1>My Trip Plans</h1>
      <div>
        {props.trips.map((trip) =>
          props.user._id === trip.user ? (
            <TripListItem
              trip={trip}
              key={trip._id}
              handleDeleteTrip={props.handleDeleteTrip}
            />
          ) : (
            <h1></h1>
          )
        )}
      </div>
    </>
  );
}

export default TripListPage;
