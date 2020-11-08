import React from 'react'
import {Link} from '@reach/router'

// -- page user lands only when not logged in.
function Home(prop) {
	const {user} = prop

	return (
		<div className="container text-center">
			<div className="row justify-content-center">
				<div className="col-10 col-md-10 col-lg-8 col-xl-7">
					<div className="display-4 text-primary mt-3 mb-2">Task Dashboard</div>
					<p className="lead">Please login to see your dashboard.</p>
					{user == null && (
						<>
							<Link to="/register" className="btn btn-outline-primary mr-2">
								Register
							</Link>
							<Link to="/login" className="btn btn-outline-primary mr-2">
								Log In
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Home
