import React, {useEffect, useState} from 'react'
import firebase from '../FirebaseConfig'

import ErrorForm from '../components/ErrorForm'

function Register(prop) {
	const [regData, setRegData] = useState({
		displayName: '',
		email: '',
		passOne: '',
		passTwo: '',
		errorMessage: null,
	})

	/// -- ** add new state 'password match' to be true/false. only can submit when true

	function handleChange(e) {
		setRegData({
			...regData,
			[e.target.name]: e.target.value,
		})
	}
	useEffect(() => {
		//checking passwors match
		if (regData.passOne !== regData.passTwo) {
			setRegData({
				...regData,
				errorMessage: 'The passwords do not match.',
			})
		} else {
			setRegData({...regData, errorMessage: null})
		}
		// eslint-disable-next-line
	}, [regData.passOne, regData.passTwo]) // ** if only include regData, then infinite look. Need to move setRegData outside of useEffect

	function handleSubmit(e) {
		e.preventDefault()

		let registrationInfo = {
			displayName: regData.displayName,
			email: regData.email,
			password: regData.passOne,
		}

		firebase
			.auth()
			.createUserWithEmailAndPassword(
				// -- triggers firebase.auth().onAuthStateChanged() when successfully signed in after registering
				registrationInfo.email,
				registrationInfo.password
			)
			.then((userCredentials) => {
				prop.registerUser(userCredentials.user, registrationInfo.displayName)
			})
			.catch((error) => {
				if (error.message !== null) {
					setRegData({...regData, errorMessage: error.message})
				} else {
					setRegData({...regData, errorMessage: null})
				}
			})
	}

	return (
		<form className="mt-3" onSubmit={handleSubmit}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="card bg-light">
							<div className="card-body">
								<h3 className="font-weight-light mb-3">Register</h3>
								<div className="form-row">
									{regData.errorMessage ? (
										<ErrorForm errorMessage={regData.errorMessage} />
									) : null}
									<section className="col-sm-12 form-group">
										<label
											className="form-control-label sr-only"
											htmlFor="displayName"
										>
											Display Name
										</label>
										<input
											className="form-control"
											type="text"
											id="displayName"
											placeholder="Display Name"
											name="displayName"
											required
											value={regData.displayName}
											onChange={handleChange}
										/>
									</section>
								</div>
								<section className="form-group">
									<label className="form-control-label sr-only" htmlFor="email">
										Email
									</label>
									<input
										className="form-control"
										type="email"
										id="email"
										placeholder="Email Address"
										required
										name="email"
										value={regData.email}
										onChange={handleChange}
									/>
								</section>
								<div className="form-row">
									<section className="col-sm-6 form-group">
										<input
											className="form-control"
											type="password"
											name="passOne"
											placeholder="Password"
											value={regData.passOne}
											onChange={handleChange}
										/>
									</section>
									<section className="col-sm-6 form-group">
										<input
											className="form-control"
											type="password"
											required
											name="passTwo"
											placeholder="Repeat Password"
											value={regData.passTwo}
											onChange={handleChange}
										/>
									</section>
								</div>
								<div className="form-group text-right mb-0">
									<button className="btn btn-primary" type="submit">
										Register
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

export default Register
