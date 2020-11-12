import React, {useState, useEffect} from 'react'
import {Router} from '@reach/router'

import './FirebaseConfig' // -- initialize firebase

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import {ProtectedRoute} from './services/general/ProtectedRoute'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TaskFormPage from './pages/TaskFormPage'
import {useAuth} from './services/firebaseAuth/useAuth'
import {signIn} from './services/firebaseAuth/signIn' // ************ delete after test
import {getCurrentUserInfo} from './services/user/getCurrentUserInfo'

function App() {
	let {user, isLoading} = useAuth()
	/// -- user has property user.id and user.email
	// -- ** will isLoading be true on initial mount, and will be false there after

	const [userInfo, setUserInfo] = useState({})

	useEffect(() => {
		async function loadUserInfo() {
			console.log('value for: user inside useEffect')
			console.log(user)
			if (user) {
				const temp = await getCurrentUserInfo(user.id)
				setUserInfo(temp)
			} else {
				setUserInfo(null)
			}
		}
		loadUserInfo()
	}, [user])

	return (
		<div>
			{/* ************** delete after test}*/}
			<button onClick={() => signIn('1@1.com', '123123')}>sign-in</button>
			<br />
			<button onClick={() => console.log(user)}>useAuth user value</button>
			<br />
			{/* ************** delete after test}*/}

			<Navigation isLoading={isLoading} userInfo={userInfo} />
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
