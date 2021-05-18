import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import TestMessage from '../components/TestMessage'
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
					history.push('/dashboard')
				}
			})
			.catch((error) => {
				if (error.message !== null) {
					changeLoginUser({...loginUser, errorMessage: error.message})
				} else {
					console.error(error)
				}
			})
	}

	return (
		<section>
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

									<div className="">
										<label
											className="form-control visually-hidden"
											htmlFor="e	mail"
										>
											Email
										</label>
										<input
											required
											autoFocus
											autoComplete="true"
											className="form-control mb-2 border border-secondary"
											type="email"
											id="email"
											name="email"
											placeholder="Email"
											value={loginUser.email}
											onChange={handleChange}
										/>
									</div>
									<div className="">
										<label
											className="form-control visually-hidden"
											htmlFor="password"
										>
											Email
										</label>
										<input
											required
											autoComplete="true"
											className="form-control mb-2 border border-secondary"
											type="password"
											name="password"
											placeholder="Password"
											value={loginUser.password}
											onChange={handleChange}
										/>
									</div>
									<div className=" text-end mb-0">
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
			<TestMessage changeLoginUser={changeLoginUser} />
		</section>
	)
}

export default Login
