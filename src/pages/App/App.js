import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import * as tripAPI from "../../utilities/trips-api";
import NewTripPage from "../NewTripPage/NewTripPage";
import EditTripPage from "../EditTripPage/EditTripPage";
import TripDetailPage from "../TripDetailPage/TripDetailPage";
import TripListPage from "../TripListPage/TripListPage";
import NavBar from "../../Components/NavBar/NavBar";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [trips, history]);

  useEffect(() => {
    async function getTrips() {
      const trips = await tripAPI.getAll();
      setTrips(trips);
    }
    getTrips();
  }, []);

  async function handleAddTrip(newTripData) {
    const newTrip = await tripAPI.create(newTripData);
    setTrips([...trips, newTrip]);
  }

  async function handleUpdateTrip(updatedTripData) {
    const updatedTrip = await tripAPI.update(updatedTripData);

    const newTripsArray = trips.map((trip) => {
      return trip._id === updatedTrip._id ? updatedTrip : trip;
    });
    setTrips(newTripsArray);
  }

  async function handleDeleteTrip(id) {
    await tripAPI.deleteOne(id);
    setTrips(trips.filter((trip) => trip._id !== id));
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/">
              <TripListPage trips={trips} handleDeleteTrip={handleDeleteTrip} user={user} />
            </Route>
            <Route exact path="/new">
              <NewTripPage handleAddTrip={handleAddTrip} />
            </Route>
            <Route exact path="/details">
              <TripDetailPage />
            </Route>
            <Route exact path="/edit">
              <EditTripPage handleUpdateTrip={handleUpdateTrip} />
            </Route>
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
