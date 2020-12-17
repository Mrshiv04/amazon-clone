import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		const unsunscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});

		return () => {
			unsunscribe();
		};
	}, []);

	console.log('User is ==> ', user);

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
