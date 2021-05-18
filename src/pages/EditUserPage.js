import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getUserInfo} from '../services/user/getUserInfo'
import {updateUserInfo} from '../services/user/updateUserInfo'
import ErrorForm from '../components/ErrorForm'

export default function EditUserPage() {
	// -- user id to be modified is taken from the url
	// *** currently any log-in user can modify other user info (name and jobLevel) as long as they have the user's unique firestore id number. To set restrictions based on jobLevel
	// const userId = useParams().userId
	const {userId} = useParams()

	// *** adding an email and password update feature means accessing firebase.auth(). This project will just stick with just database changes for now (firestore)
	// -- updating the jobLevel will change access right to the app
	const [existingData, setExistingData] = useState({
		name: '',
		jobLevel: '',
	})
	const [newData, setNewData] = useState({
		name: '',
		jobLevel: '',
	})
	const [errorMessage, setErrorMessage] = useState(null)

	// -- initial load of existing user information on mount of component
	useEffect(() => {
		async function loadUserData() {
			const userObj = await getUserInfo(userId)
			setExistingData({name: userObj.name, jobLevel: userObj.jobLevel})
			setNewData({name: userObj.name, jobLevel: userObj.jobLevel})
		}
		loadUserData()
	}, [userId])

	// -- Activate/Deactivate submit button by checking if the user changed the initial information
	useEffect(() => {
		const buttonRef = document.querySelector('#submitButton')
		if (
			newData.name === existingData.name &&
			newData.jobLevel === existingData.jobLevel
		) {
			// -- assigned the 'disabled' attribute to the button element
			buttonRef.attributes.setNamedItem(document.createAttribute('disabled'))
		} else {
			if (buttonRef.hasAttribute('disabled')) {
				buttonRef.attributes.removeNamedItem('disabled')
			}
		}
	}, [newData, existingData])

	// -- record user's changes to the state
	function handleChange(e) {
		setNewData({
			...newData,
			[e.target.name]: e.target.value,
		})
	}

	async function handleSubmit(e) {
		e.preventDefault()
		let ObjToBeSaved = {name: newData.name, jobLevel: newData.jobLevel}

		let result = await updateUserInfo(userId, ObjToBeSaved)

		if (result) {
			alert('record updated') // **** modal/toast that update has been saved
			setExistingData(ObjToBeSaved)
			// -- Once setExistingData(ObjToBeSaved) is triggered, the useEffect to Activate/Deactivate kicks in and disables the button again
		} else {
			setErrorMessage('Trouble updating the information. Please try again.')
		}
	}

	return (
		<form className="mt-3" onSubmit={handleSubmit}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="card bg-light">
							<div className="card-body">
								<h3 className="font-weight-light mb-3">
									Edit User Information
								</h3>
								<div className="form-row">
									{errorMessage ? (
										<ErrorForm errorMessage={errorMessage} />
									) : null}
									<section className="col-sm-12 form-group">
										<label
											className="form-control-label visually-hidden"
											htmlFor="name"
										>
											Name
										</label>
										<input
											required
											autoComplete="true"
											className="form-control border border-secondary"
											type="text"
											id="name"
											placeholder="Name"
											name="name"
											value={newData.name}
											onChange={handleChange}
										/>
									</section>
								</div>
								<div className="form-row">
									<section className="col-sm-12 form-group">
										<label
											className="form-control-label visually-hidden"
											htmlFor="name"
										>
											Job Level
										</label>
										<select
											className="form-select mb-2"
											name="jobLevel"
											id="jobLevel"
											value={newData.jobLevel}
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
								<div className="form-group text-right mb-0">
									<button
										id="submitButton"
										className="btn btn-secondary"
										type="submit"
									>
										Update Info
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
