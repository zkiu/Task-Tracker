import React from 'react'
import {Link} from '@reach/router'
import {RiCheckDoubleLine} from 'react-icons/ri'

import {signOut} from '../services/firebaseAuth/signOut'

function Navigation({userInfo, isLoading}) {
	function logoutUser() {
		signOut()
	}

	return (
		<nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<RiCheckDoubleLine className="mr-1" />
					Task Tracker
				</Link>
				<div className="navbar-nav ml-auto">
					<Link className="nav-item nav-link" to="/register">
						register
					</Link>

					<Link className="nav-item nav-link" to="/login">
						log in
					</Link>

					{/* if userInfo is not null then display the JSX */}
					{userInfo && (
						<div className="nav-item navbar-text text-dark">
							Greetings {userInfo.firstName + ' ' + userInfo.lastName},
						</div>
					)}

					<Link className="nav-item nav-link" to="/login" onClick={logoutUser}>
						log out
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
