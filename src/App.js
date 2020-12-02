import React, {useState, useEffect} from 'react'
import {Router} from '@reach/router'

import './FirebaseConfig' // -- initialize firebase

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import './App.css'

import {ProtectedRoute} from './services/general/ProtectedRoute'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TaskPage from './pages/TaskPage'
import NotFoundPage from './pages/NotFoundPage'
import EditUserPage from './pages/EditUserPage'
import {useAuth} from './services/firebaseAuth/useAuth'
import {signIn} from './services/firebaseAuth/signIn' // ************ delete after test
import {getCurrentUserInfo} from './services/user/getCurrentUserInfo'

/* 
testing stuff
*/
import useFirestoreUserChange from './services/user/useFirestoreUserChange'

function App() {
	const [userInfo, setUserInfo] = useState({})

	// -- updates when login status changes
	let {user, isLoading} = useAuth()
	/// -- user has property user.id and user.email
	// -- isLoading true on initial mount, and will be false thereafter

	// -- this triggers when there is useAuth() change (login, logout)
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

	// -- updates when the user profile changes in Firestore
	let userId = null
	if (user === null) {
		userId = null
	} else {
		userId = user.uid // -- NOTE that user obj is returned from Auth(). As such, it has the property 'uid instead of 'id'
	}
	let newUserObj = useFirestoreUserChange(userId) // -- useFirestoreUserChange() has a listener for changes to the user's profile. It will return null if no one is logged in

	// -- the effect occurs whenever newUserObj changes (i.e. the firestore doc is modified)
	useEffect(() => {
		if (newUserObj) {
			setUserInfo(newUserObj)
		} else {
			setUserInfo(null)
		}
	}, [newUserObj])

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
					path="editUser/:userId"
					isLoading={isLoading}
					user={user}
					component={<EditUserPage />}
				/>
				<ProtectedRoute
					path="editTask"
					isLoading={isLoading}
					user={user}
					component={<TaskPage />}
				/>
				<ProtectedRoute
					path="editTask/:taskId"
					isLoading={isLoading}
					user={user}
					component={<TaskPage />}
				/>

				<NotFoundPage default />
			</Router>
		</div>
	)
}

export default App
