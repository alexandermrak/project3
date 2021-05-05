import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import * as tripAPI from "../../utilities/trips-api";
import NewTripPage from "../NewTripPage/NewTripPage";
import EditTripPage from "../EditTripPage/EditTripPage";
import TripDetailPage from "../TripDetailPage/TripDetailPage";
import TripListPage from "../TripListPage/TripListPage";
import NavBar from "../../components/NavBar/NavBar";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // This is listening for each time puppies state is changed,
    // then will run our function below to reroute
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

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/new">
              <NewTripPage handleAddTrip={handleAddTrip} />
            </Route>
            <Route exact path="/">
              <TripListPage trips={trips} />
            </Route>
            <Route exact path='/details'>
              <TripDetailPage />
            </Route>
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
