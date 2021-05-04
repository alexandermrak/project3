import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewTripPage from '../NewTripPage/NewTripPage';
import EditTripPage from '../EditTripPage/EditTripPage';
import TripDetailPage from '../TripDetailPage/TripDetailPage';
import TripListPage from '../TripListPage/TripListPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.css';

export default function App() {
	const [user, setUser] = useState(getUser());

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/lists/new'>
							<NewTripPage />
						</Route>
						<Route path='/orders'>
							<OrderHistoryPage />
						</Route>
						<Redirect to='/orders' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
