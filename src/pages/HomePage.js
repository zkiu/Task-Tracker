import React from 'react'
import {Link, useHistory} from 'react-router-dom'

// -- page user lands only when not logged in.
function Home({isAuth}) {
	let history = useHistory()
	if (isAuth) {
		history.push('/dashboard')
	}

	// -- if there are NO user logged in, the provide these options
	return (
		<div className="container text-center">
			<div className="row justify-content-center">
				<div className="col-10 col-md-10 col-lg-8 col-xl-7">
					<div className="display-4 text-primary mt-3 mb-2">Task Dashboard</div>
					<p className="lead text-white">Please login to see your dashboard</p>

					<Link to="/register" className="btn btn-secondary me-2">
						Register
					</Link>
					<Link to="/login" className="btn btn-secondary me-2">
						Log In
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
