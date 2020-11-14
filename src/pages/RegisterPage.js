import React, {useEffect, useState} from 'react'
import registerUser from '../services/user/registerUser'
import ErrorForm from '../components/ErrorForm'

function Register() {
	const [regData, setRegData] = useState({
		name: '',
		email: '',
		jobLevel: '',
		passOne: '',
		passTwo: '',
	})

	const [errorMessage, setErrorMessage] = useState(null)

	//checking passwors match
	useEffect(() => {
		if (regData.passOne !== regData.passTwo) {
			setErrorMessage('Passwords do not match.')
		} else {
			setErrorMessage(null)
		}
	}, [regData.passOne, regData.passTwo])

	function handleChange(e) {
		setRegData({
			...regData,
			[e.target.name]: e.target.value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()

		// -- prevent the form submission the 2 passwords doesn't match
		if (regData.passOne !== regData.passTwo) {
			setErrorMessage(
				'Passwords do not match. Please fix before re-submitting.'
			)
			return
		}

		let registrationInfo = {
			name: regData.name,
			email: regData.email,
			jobLevel: regData.jobLevel,
			password: regData.passOne,
		}

		// -- validation of required field and email syntax is done via htlm code
		// -- validation that there is no duplicate user email is done via firebase.auth()
		// -- validation of minimum required passwordcomplexity is done by firebase.auth()
		registerUser(registrationInfo)

		// -- resets the registration form after submitting
		setRegData({
			name: '',
			email: '',
			jobLevel: '',
			passOne: '',
			passTwo: '',
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
									{/* *** Feature: make Error Message into modal/toast */}
									{errorMessage ? (
										<ErrorForm errorMessage={errorMessage} />
									) : null}

									<section className="col-sm-12 form-group">
										<label
											className="form-control-label sr-only"
											htmlFor="name"
										>
											Name
										</label>
										<input
											className="form-control"
											type="text"
											id="name"
											placeholder="Name"
											name="name"
											required
											value={regData.name}
											onChange={handleChange}
										/>
									</section>
								</div>
								<div className="form-row">
									<section className="col-sm-6 form-group">
										<label
											className="form-control-label sr-only"
											htmlFor="email"
										>
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
									<section className="col-sm-6 form-group">
										<label
											className="form-control-label sr-only"
											htmlFor="name"
										>
											Job Level
										</label>
										<select
											className="custom-select"
											name="jobLevel"
											id="jobLevel"
											value={regData.jobLevel}
											onChange={handleChange}
											required
										>
											{/* Form is prevented from being submitted when the job level is not selecetd thanks to the 'required' property above and the value='' below  */}
											<option defaultValue value="">
												Job Level...
											</option>
											<option value="L1">L1: General Employee</option>
											<option value="L2">L2: Supervisor</option>
										</select>
									</section>
								</div>
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
