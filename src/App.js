import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// -- initialize firebase
import './FirebaseConfig'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'

import BtnPortfolio from './components/resumeBanner/BtnPortfolio'
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
	let {authUser, isLoading} = useAuth()
	if (authUser !== null) {
		userId = authUser.id
	}
	let userObj = useFirestoreUserDoc(userId)

	return (
		<div id="app">
			<Router>
				<Navigation userObj={userObj} />
				<BtnPortfolio />
				<Switch>
					<HomePage path="/" exact isAuth={!!authUser} />
					<LoginPage path="/login" exact />
					<RegisterPage path="/register" exact />
					<ProtectedRoute
						isLoading={isLoading}
						isAuth={!!authUser}
						path="/dashboard"
						Component={DashboardPage}
					/>
					<ProtectedRoute
						isLoading={isLoading}
						isAuth={!!authUser}
						path="/editTask"
						Component={TaskPage}
					/>
					{/* 
					<EditUserPage path="editUser/:userId" />
					<TaskPage path="editTask/:taskId" />
					<NotFoundPage default />
				</ProtectedRoute> */}
				</Switch>
			</Router>
		</div>
	)
}

export default App
