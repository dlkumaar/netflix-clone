import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';

import { auth } from './firebase/firebase';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/login/Login';
import ProfilePage from './pages/profile-page/ProfilePage';

function App() {
	const user = useSelector(selectUser);

	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// logged in
				console.log(userAuth);
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// loggedout
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div
			className='max-auto bg-primary overflow-hidden 
				scrollbar-hide'>
			{/* <HomePage /> */}

			{!user ? (
				<Login />
			) : (
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/profile' exact component={ProfilePage} />
				</Switch>
			)}
		</div>
	);
}

export default App;
