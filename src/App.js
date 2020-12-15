import React from 'react'
import {Router} from '@reach/router'

import './FirebaseConfig' // -- initialize firebase

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

import {UserDataProvider} from './services/user/UserContext'
import {useFirestoreUserDoc} from './services/user/useFirestoreUserDoc'

/* 
testing stuff
*/
import {signIn} from './services/firebaseAuth/signIn' // ************ delete after test
/* 
testing stuff
*/

function App() {
	let userId = null
	// -- updates when login status changes, 'user' has property user.id and user.email
	let {authUser, isLoading} = useAuth()
	// -- updates when the user profile changes in Firestore
	if (authUser === null) {
		userId = null
	} else {
		userId = authUser.uid // -- NOTE that user obj is returned from Auth(). It has the auto generated property 'uid' instead of 'id'
	}
	// -- Listener for changes to the user's profile. Returns null if no one is logged in
	let userObj = useFirestoreUserDoc(userId)

	return (
		<div>
			{/* ************** delete after test}*/}
			<button onClick={() => signIn('1@1.com', '123123')}>sign-in</button>
			<br />
			<button onClick={() => console.log(authUser)}>useAuth user value</button>
			<br />
			{/* ************** delete after test}*/}

			<Navigation userObj={userObj} />
			<Router>
				<HomePage path="/" isAuth={!!authUser} />
				<LoginPage path="login" />
				<RegisterPage path="register" />
				<ProtectedRoute
					path="dashboard"
					isLoading={isLoading}
					isAuth={!!authUser}
					component={<DashboardPage />}
				/>
				<ProtectedRoute
					path="editUser/:userId"
					isLoading={isLoading}
					isAuth={!!authUser}
					component={<EditUserPage />}
				/>
				<ProtectedRoute
					path="editTask"
					isLoading={isLoading}
					isAuth={!!authUser}
					component={<TaskPage />}
				/>
				<ProtectedRoute
					path="editTask/:taskId"
					isLoading={isLoading}
					isAuth={!!authUser}
					component={<TaskPage />}
				/>
				<UserDataProvider path="/">
					<NotFoundPage default />
				</UserDataProvider>
			</Router>
		</div>
	)
}

export default App
