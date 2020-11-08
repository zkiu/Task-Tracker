import {navigate} from '@reach/router'
import React, {useState} from 'react'
import firebase from '../FirebaseConfig'

import ErrorForm from '../components/ErrorForm'

function Login(prop) {
	// -- *** not yet used prop
	const [loginUser, changeLoginUser] = useState({
		email: '',
		password: '',
		errorMessage: null,
	})

	function handleChange(e) {
		changeLoginUser({...loginUser, [e.target.name]: e.target.value})
	}

	function handleSubmit(e) {
		e.preventDefault()

		firebase
			.auth()
			.signInWithEmailAndPassword(loginUser.email, loginUser.password)
			.then((user) => {
				if (user) {
					//if the user is not null then
					navigate('/meetings')
				}
			})
			.catch((error) => {
				if (error.message !== null) {
					changeLoginUser({...loginUser, errorMessage: error.message})
				} else {
					changeLoginUser({...loginUser, errorMessage: null})
				}
			})
	}

	return (
		<form className="mt-3" onSubmit={handleSubmit}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="card bg-light">
							<div className="card-body">
								<h3 className="font-weight-light mb-3">Log in</h3>

								{loginUser.errorMessage && (
									<ErrorForm errorMessage={loginUser.errorMessage} />
								)}

								<section className="form-group">
									<label className="form-control-label sr-only" htmlFor="Email">
										Email
									</label>
									<input
										required
										className="form-control"
										type="email"
										id="email"
										name="email"
										placeholder="Email"
										value={loginUser.email}
										onChange={handleChange}
									/>
								</section>
								<section className="form-group">
									<input
										required
										className="form-control"
										type="password"
										name="password"
										placeholder="Password"
										value={loginUser.password}
										onChange={handleChange}
									/>
								</section>
								<div className="form-group text-right mb-0">
									<button className="btn btn-primary" type="submit">
										Log in
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default Login
