import React, {useState, useEffect} from 'react'
import {Router} from '@reach/router'
import {ProtectedRoute} from './services/auth/ProtectedRoute'
import firebase from './FirebaseConfig'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TaskFormPage from './pages/TaskFormPage'
import {useAuth} from './services/auth/useAuth'

import {signIn} from './services/auth/signIn' // ************ delete after test

function App() {
	let {user, isLoading} = useAuth()

	return (
		<div>
			{/* delete after test}*/}
			<button onClick={() => signIn('1@1.com', '123123')}>sign-in</button>
			<br />
			<button onClick={() => console.log(user)}>useAuth user value</button>
			<br />
			{/* delete after test}*/}

			<Navigation />
			<Router>
				<HomePage path="/" user={user} />
				<LoginPage path="/login" />
				<RegisterPage path="/register" />
				<ProtectedRoute
					path="/dashboard"
					isLoading={isLoading}
					user={user}
					component={<DashboardPage />}
				/>
				<ProtectedRoute
					path="/taskform"
					isLoading={isLoading}
					user={user}
					component={<TaskFormPage />}
				/>

				{/* <NotFound / 404 page default /> */
				/**** to implement ********/}
			</Router>
		</div>
	)
}

export default App
