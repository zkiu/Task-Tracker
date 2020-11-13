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
import EditUserPage from './pages/EditUserPage'
import {useAuth} from './services/firebaseAuth/useAuth'
import {signIn} from './services/firebaseAuth/signIn' // ************ delete after test
import {getCurrentUserInfo} from './services/user/getCurrentUserInfo'

function App() {
	let {user, isLoading} = useAuth()
	/// -- user has property user.id and user.email
	// -- ** will isLoading be true on initial mount, and will be false there after

	const [userInfo, setUserInfo] = useState({})

	useEffect(() => {
		// -- load the user document based on the user.id
		async function loadUserInfo() {
			if (user) {
				const userObj = await getCurrentUserInfo(user.id)
				setUserInfo(userObj)
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
				<LoginPage path="login" />
				<RegisterPage path="register" />
				<ProtectedRoute
					path="dashboard"
					isLoading={isLoading}
					user={user}
					component={<DashboardPage />}
				/>
				<ProtectedRoute
					path="taskform"
					isLoading={isLoading}
					user={user}
					component={<TaskFormPage />}
				/>
				<ProtectedRoute
					path="editUser/:userId"
					isLoading={isLoading}
					user={user}
					component={<EditUserPage />}
				/>

				{/* <NotFound / 404 page default /> */
				/**** to implement ********/}
			</Router>
		</div>
	)
}

export default App
