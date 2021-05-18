import {Link} from 'react-router-dom'
import {RiCheckDoubleLine} from 'react-icons/ri'

import {signOut} from '../services/firebaseAuth/signOut'

function Navigation({userObj}) {
	return (
		<nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<RiCheckDoubleLine className="me-1" />
					Task Tracker
				</Link>

				<div className="navbar-nav ml-auto">
					{/* if userObj is null then display the JSX */}
					{!userObj && (
						<>
							<Link className="nav-item nav-link" to="register">
								register
							</Link>
							{/* ** make login into a dropdown menu https://getbootstrap.com/docs/4.5/components/dropdowns/#forms*/}
							<Link className="nav-item nav-link" to="login">
								log in
							</Link>
						</>
					)}

					{/* if userObj is NOT null then display the JSX */}
					{userObj && (
						<>
							<Link className="nav-item nav-link" to={'editUser/' + userObj.id}>
								{userObj.name + ','}
							</Link>
							<Link className="nav-item nav-link" to="/login" onClick={signOut}>
								log out
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navigation
