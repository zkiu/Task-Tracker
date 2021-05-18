import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import registerUser from '../services/user/registerUser'

function Register() {
	let history = useHistory()
	const [regData, setRegData] = useState({
		name: '',
		email: '',
		jobLevel: '',
		password: '',
	})

	function handleChange(e) {
		setRegData({
			...regData,
			[e.target.name]: e.target.value,
		})
	}

	async function handleSubmit(e) {
		e.preventDefault()

		let registrationInfo = {
			name: regData.name,
			email: regData.email,
			jobLevel: regData.jobLevel,
			password: regData.password,
		}

		// -- validation of required field and email syntax is done via htlm code
		// -- validation that there is no duplicate user email is done via firebase.auth()
		// -- validation of minimum required passwordcomplexity is done by firebase.auth()
		await registerUser(registrationInfo)

		history.push('/dashboard')
	}

	return (
		<section>
			<form className="mt-3" onSubmit={handleSubmit}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="card bg-light">
								<div className="card-body">
									<h3 className="font-weight-light mb-3">Register</h3>
									<div className="">
										<label
											className="form-control visually-hidden"
											htmlFor="name"
										>
											Name
										</label>
										<input
											required
											autoFocus
											autoComplete="true"
											className="form-control mb-2 border border-secondary"
											type="text"
											id="name"
											placeholder="Name"
											name="name"
											value={regData.name}
											onChange={handleChange}
										/>
									</div>
									<div className="">
										<label
											className="form-control visually-hidden"
											htmlFor="email"
										>
											Email
										</label>
										<input
											required
											autoComplete="true"
											className="form-control mb-2 border border-secondary"
											type="email"
											id="email"
											placeholder="Email Address"
											name="email"
											value={regData.email}
											onChange={handleChange}
										/>
									</div>
									<div className="">
										<input
											required
											autoComplete="true"
											className="form-control mb-2 border border-secondary"
											type="password"
											name="password"
											placeholder="Password"
											value={regData.password}
											onChange={handleChange}
										/>
									</div>
									<div className="">
										<label
											className="form-control visually-hidden"
											htmlFor="name"
										>
											Job Level
										</label>
										<select
											className="form-select border border-secondary mb-2"
											name="jobLevel"
											id="jobLevel"
											value={regData.jobLevel}
											onChange={handleChange}
											required
										>
											{/* Form is prevented from being submitted when the job level is not selected thanks to the 'required' property above and the value='' below  */}
											<option defaultValue value="">
												Job Level...
											</option>
											<option value="L1">L1: General Employee</option>
											<option value="L2">L2: Supervisor</option>
										</select>
									</div>
									<div className="text-end mb-0">
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
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-lg-4">
						<div className="card bg-light">
							<div className="card-body">
								<div className="row mb-3">
									<h6 className="col-sm-9 col-form-label">
										Register OR use a guess account on the login page:
									</h6>
									<div className="col-sm-3 text-end">
										{/* <input type="email" class="form-control" id="inputEmail3" /> */}
										<button
											className="btn btn-primary"
											onClick={() => {
												history.push('./login')
											}}
										>
											Log-in Page
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Register
