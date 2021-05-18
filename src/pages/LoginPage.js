import {useHistory} from 'react-router-dom'
import React, {useState} from 'react'

import ErrorForm from '../components/ErrorForm'

import {signIn} from '../services/firebaseAuth/signIn'

function Login() {
	let history = useHistory()
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

		signIn(loginUser.email, loginUser.password)
			.then((user) => {
				if (user) {
					//if the user is not null then
					history.push('/dashboard')
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
										autoFocus
										autoComplete="true"
										className="form-control border border-primary"
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
										autoComplete="true"
										className="form-control border border-primary"
										type="password"
										name="password"
										placeholder="Password"
										value={loginUser.password}
										onChange={handleChange}
									/>
								</section>
								<div className="form-group text-right mb-0">
									<button className="btn btn-secondary" type="submit">
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
