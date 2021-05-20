import {BrowserRouter as Router, Switch} from 'react-router-dom'
// -- initialize firebase
import './FirebaseConfig'
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
						exact
						Component={DashboardPage}
					/>
					<ProtectedRoute
						isLoading={isLoading}
						isAuth={!!authUser}
						exact
						path="/editTask"
						Component={TaskPage}
					/>
					<ProtectedRoute
						isLoading={isLoading}
						isAuth={!!authUser}
						path="/editTask/:taskId"
						Component={TaskPage}
					/>
					<ProtectedRoute
						isLoading={isLoading}
						isAuth={!!authUser}
						path="/editUser/:userId"
						Component={EditUserPage}
					/>
					<NotFoundPage path="*" />
				</Switch>
			</Router>
		</div>
	)
}

export default App
