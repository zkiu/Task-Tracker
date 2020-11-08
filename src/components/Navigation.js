import React from 'react'
import {Link} from '@reach/router'

import {RiCheckDoubleLine} from 'react-icons/ri'

function Navigation() {
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

					<div className="nav-item navbar-text text-dark">
						Greetings NAME_PLACEHOLDERSS,
					</div>

					<Link className="nav-item nav-link" to="/login">
						log out
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
