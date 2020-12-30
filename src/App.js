import React from 'react'
import {Router} from '@reach/router'
// -- initialize firebase
import './FirebaseConfig'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'

import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TaskPage from './pages/TaskPage'
import NotFoundPage from './pages/NotFoundPage'
import EditUserPage from './pages/EditUserPage'

import {ProtectedRoute} from './services/general/ProtectedRoute'
import {useAuth} from './services/firebaseAuth/useAuth'
import {useFirestoreUserDoc} from './services/user/useFirestoreUserDoc'

function App() {
	let userId = null
	// -- updates when login status changes, 'user' has property user.id and user.email
	let {authUser, isLoading} = useAuth()
	// -- updates when the user profile changes in Firestore
	if (authUser !== null) {
		userId = authUser.id // -- NOTE that user obj is returned from Auth(). It has the auto generated property 'uid' instead of 'id'
	}
	// -- Listener for changes to the user's profile. Returns null if no one is logged in
	// -- can simplify this code further by creating a new function called useCurrentFirestoreUserDoc, which has no need for the userId param
	let userObj = useFirestoreUserDoc(userId)

	return (
		<div>
			<Navigation userObj={userObj} />
			<Router>
				<HomePage path="/" isAuth={!!authUser} />
				<LoginPage path="login" />
				<RegisterPage path="register" />
				<ProtectedRoute path="/" isLoading={isLoading} isAuth={!!authUser}>
					<DashboardPage path="dashboard" />
					<EditUserPage path="editUser/:userId" />
					<TaskPage path="editTask" />
					<TaskPage path="editTask/:taskId" />
					<NotFoundPage default />
				</ProtectedRoute>
			</Router>
		</div>
	)
}

export default App
