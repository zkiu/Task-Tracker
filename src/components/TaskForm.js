// TODO: dynamic list of jobLevel 1 for the dropdown menu is further filtered by department (but this is for future improvements / production version)
import {useEffect, useState} from 'react'
import firebase from 'firebase/app'
import {useHistory} from 'react-router-dom'

import {getCurrentUserInfo} from '../services/user/getCurrentUserInfo'
import getTaskObj from '../services/task/getTaskObj'
import useEmployeeList from '../services/task/useEmployeeList'
import addTask from '../services/task/addTask'
import updateTask from '../services/task/updateTask'
import addComment from '../services/task/addComment'
import {containsBadChar} from '../services/general/containsBadChar'

export default function TaskForm({taskId = null}) {
	let history = useHistory()
	const [userObj, setuserObj] = useState({})

	const [taskObj, setTaskObj] = useState({
		priority: '',
		status: '',
		dateDue: '',
		nameResponsible: '',
		nameResponsibleId: '',
		taskName: '',
		taskDescription: '',
	})
	// -- used to keep track if the data has been changed
	const [existingTaskObj, setExistingTaskObj] = useState({
		priority: '',
		status: '',
		dateDue: '',
		nameResponsible: '',
		nameResponsibleId: '',
		taskName: '',
		taskDescription: '',
	})
	// -- these presets are for fields not to be modified once the task is created
	const [taskObjPresets, setTaskObjPresets] = useState({
		dateCreated: '',
		nameTaskCreator: '',
		nameTaskCreatorId: '',
	})
	// -- load employee list for dropdown menu
	// -- currently allowing the task creator to assign themselves as the one responsible. this may change as the app evolves
	let employeeL1List = useEmployeeList('L1').map((item) => {
		return (
			<option key={item.id} data-key={item.id} value={item.name}>
				{item.name}
			</option>
		)
	})
	let employeeL2List = useEmployeeList('L2').map((item) => {
		return (
			<option key={item.id} data-key={item.id} value={item.name}>
				{item.name}
			</option>
		)
	})
	// Load the currently logged user info
	useEffect(() => {
		const userObj = async () => {
			const data = await getCurrentUserInfo()
			setuserObj(data)
		}
		userObj()
		// -- since getCurrentUserInfo() is async, it will constantly cycle from a promise to fullfilled everytime it is called. As such, I am using the empty [] to only do this action once when the component mounts. Furthermore, getCurrentUserInfo() should not changed while the component is mounted.
	}, [])
	// -- NEW task - set by default the status to be 'in progress'
	useEffect(() => {
		if (taskId === null) {
			// -- automatically set the status to be s1: in progress when creating a new task
			setTaskObj((old) => ({...old, status: 's1'}))
		}
	}, [taskId])
	// -- EXISTING task - set taskObj to the task info
	useEffect(() => {
		if (taskId !== null) {
			async function getTaskandSet() {
				const taskInfo = await getTaskObj(taskId)
				setTaskObjPresets({
					dateCreated: taskInfo.dateCreated,
					nameTaskCreator: taskInfo.nameTaskCreator,
					nameTaskCreatorId: taskInfo.nameTaskCreatorId,
				})
				// -- stripout these properties before setting the state for the following
				delete taskInfo.dateCreated
				delete taskInfo.nameTaskCreator
				delete taskInfo.nameTaskCreatorId
				setTaskObj({...taskInfo})
				setExistingTaskObj({...taskInfo})
			}
			getTaskandSet()
		}
	}, [taskId])
	// -- deactivate fields based on job level
	// *** Also need to implement security redundancy on the server side with security rules (else user can remove the disabled attribute in the browser and submit unauthorized datafields )
	useEffect(() => {
		let securedElements = document.querySelectorAll('[data-secured]')
		if (taskId !== null && userObj.jobLevel === 'L1') {
			for (const item of securedElements) {
				item.attributes.setNamedItem(document.createAttribute('disabled'))
			}
		}
	}, [taskId, userObj])
	// -- set colour of the dropdown menus
	useEffect(() => {
		let priorityMenus = document.querySelectorAll('.priority')
		for (const item of priorityMenus) {
			changeMenuColor(item)
		}
		let statusMenus = document.querySelectorAll('.status')
		for (const item of statusMenus) {
			changeMenuColor(item)
		}
	}, [taskObj])
	// -- Activate/Deactivate submit button by checking if the user changed the initial information
	useEffect(() => {
		const buttonRef = document.querySelector('#submitButton')
		if (
			// -- taskName, dateCreated, nameTaskCreator will not change once a task is created, so no need to detect changes
			taskObj.status === existingTaskObj.status &&
			taskObj.priority === existingTaskObj.priority &&
			taskObj.dateDue === existingTaskObj.dateDue &&
			taskObj.nameResponsible === existingTaskObj.nameResponsible &&
			taskObj.taskName === existingTaskObj.taskName &&
			taskObj.taskDescription === existingTaskObj.taskDescription
		) {
			// -- assigned the 'disabled' attribute to the button element
			buttonRef.attributes.setNamedItem(document.createAttribute('disabled'))
		} else {
			if (buttonRef.hasAttribute('disabled')) {
				buttonRef.attributes.removeNamedItem('disabled')
			}
		}
	}, [taskObj, existingTaskObj])

	function handleChange(e) {
		setTaskObj({...taskObj, [e.target.name]: e.target.value})
	}

	function handleResponsibleNameChange(e) {
		// -- gets the index of the targeted option in the dropdown
		const selectedIndex = e.target.options.selectedIndex
		// -- get the key at the selected option data-set
		const responsibleUserId =
			e.target.options[selectedIndex].getAttribute('data-key')
		setTaskObj({
			...taskObj,
			[e.target.name]: e.target.value,
			nameResponsibleId: responsibleUserId,
		})
	}
	function handlePriorityChange(e) {
		handleChange(e)
		changeMenuColor(e.target)
	}
	function handleStatusChange(e) {
		handleChange(e)
		changeMenuColor(e.target)
	}
	// -- change the menu color based on the selection
	function changeMenuColor(htmlElement) {
		switch (htmlElement.value) {
			// -- '' is for all menus (Default case when there is no value selected in the drop down menu)
			case '':
				htmlElement.setAttribute('style', 'background-color:white; color:black')
				break
			// -- for the 'priority' menus
			case 'p1':
				htmlElement.setAttribute(
					'style',
					'background-color:yellow; color:black'
				)
				break
			case 'p2':
				htmlElement.setAttribute(
					'style',
					'background-color:orange; color:white'
				)
				break
			// -- for the 'status' menus
			case 's1':
				htmlElement.setAttribute('style', 'background-color:green; color:white')
				break
			case 's2':
				htmlElement.setAttribute('style', 'background-color:gray; color:black')
				break
			case 's3':
				htmlElement.setAttribute('style', 'background-color:black; color:white')
				break

			default:
				break
		}
	}
	async function handleSubmit(e) {
		e.preventDefault()
		// -- if creating a new task
		if (taskId === null) {
			//data validation before upload to firestore
			if (
				containsBadChar(taskObj.taskName) ||
				containsBadChar(taskObj.taskDescription)
			) {
				// *** update this error message into a toast
				console.error(
					'Comments cannot contain special characters other than !?.$%&+-. Please remove the other special characters before saving'
				)
			} else {
				// -- once data validation is passed
				let newTask = await addTask({
					...taskObj,
					nameTaskCreator: userObj.name, //-- name is entered directly along side the userId, so that we don't have to do another query to look up the name from the user id
					nameTaskCreatorId: userObj.id,
					dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
				})
				// -- auto generate comment about task created by so and so
				autoCommentBot(newTask.id, 'Auto Message: Task is created')

				alert('New task is saved') // *** make this into a toast/modal
				history.push('../dashboard')
			}
		} else {
			// UPDATING a task

			//data validation before upload to firestore
			if (
				containsBadChar(taskObj.taskName) ||
				containsBadChar(taskObj.taskDescription)
			) {
				// *** update this error message into a toast
				console.error(
					'Comments cannot contain special characters other than !?.$%&+-. Please remove the other special characters before saving'
				)
			} else {
				let result = await updateTask(taskId, taskObj)

				if (result) {
					// -- auto generate comment about task created by so and so
					autoCommentBot(taskId, 'Auto Message: Task was modified')

					alert('Task is updated') // *** make this into a toast/modal
					// -- don't navigate away as the user may edit further information

					// -- Once setExistingTaskObj is triggered, the useEffect to Activate/Deactivate kicks in and disables the button agai
					setExistingTaskObj(taskObj)
				}
			}
		}
	}
	async function autoCommentBot(taskId, newComment) {
		try {
			const userObj = await getCurrentUserInfo() // -- returns Null if no user is logged in
			// -- checks if user exits, or else something is wrong with the connection
			if (!userObj) {
				// -- execute this if userObj is Null
				throw new Error('User information cannot be verified')
			}
			await addComment(taskId, newComment, userObj) // -- currentlyLoggedInUser is an object with the key id, name, email
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<>
			{taskId === null ? (
				<h2 className="text-primary my-3">Create New Task Form</h2>
			) : (
				<h2 className="text-primary my-3">Update Task Form</h2>
			)}

			<form className="border p-2 bg-light card" onSubmit={handleSubmit}>
				<div className="row">
					<div className="form-group col">
						<label className="form-label" htmlFor="priority">
							Priority Level:
						</label>
						<select
							className="form-select mb-2 priority"
							name="priority"
							value={taskObj.priority}
							onChange={handlePriorityChange}
							required
						>
							<option defaultValue className="priority" value="">
								Priority...
							</option>
							<option value="p1" className="priority">
								Low
							</option>

							<option value="p2" className="priority">
								High
							</option>
						</select>
					</div>
					<div className="form-group col-md-3">
						<label className="form-label" htmlFor="dateDue">
							Deadline:
						</label>
						<input
							className="form-control"
							type="date"
							id="dateDue"
							placeholder="Select Task Deadline..."
							required
							name="dateDue"
							data-secured
							value={taskObj.dateDue}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group col-md-6">
						{/* only L1 users can appear here */}
						<label className="form-label" htmlFor="nameResponsible">
							Responsible Employee
						</label>
						<select
							className="form-select mb-2"
							name="nameResponsible"
							id="nameResponsible"
							required
							data-secured
							value={taskObj.nameResponsible}
							onChange={handleResponsibleNameChange}
						>
							<option value="" defaultValue disabled hidden>
								Select Responsible Employee
							</option>
							<optgroup label="L1 General Employees:">
								{employeeL1List}
							</optgroup>
							<optgroup label="L2 Supervisor Level:">{employeeL2List}</optgroup>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="form-group col-md-3">
						<label className="form-label " htmlFor="status">
							Task Status:
						</label>
						<select
							className="form-select mb-2 status"
							name="status"
							id="status"
							value={taskObj.status}
							onChange={handleStatusChange}
							required
						>
							<option defaultValue className="status" value="">
								Status...
							</option>
							<option className="status" value="s1">
								In Progress
							</option>
							<option className="status" value="s2">
								Closing
							</option>
							<option className="status" value="s3">
								Archived
							</option>
						</select>
					</div>
					<div className="form-group col-md-3">
						{/* only show when the taskId is NOT null (i.e. editing an existing task) */}
						{taskId !== null && (
							<>
								<label className="form-label" htmlFor="dateCreated">
									Date Created:
								</label>
								<input
									className="form-control"
									type="date"
									id="dateCreated"
									placeholder="Loading..."
									name="dateCreated"
									value={taskObjPresets.dateCreated}
									disabled
								/>
							</>
						)}
					</div>
					<div className="form-group col-md-6">
						{taskId !== null && (
							<>
								<label className="form-label" htmlFor="nameTaskCreator">
									Task Creator
								</label>
								<input
									className="form-control"
									type="text"
									id="nameTaskCreator"
									placeholder="Leader's Name"
									name="nameTaskCreator"
									value={taskObjPresets.nameTaskCreator}
									disabled
								/>
							</>
						)}
					</div>
				</div>

				<label className="form-label" htmlFor="taskName">
					Task Name:
				</label>
				<input
					className="form-control border border-secondary"
					type="text"
					id="taskName"
					placeholder="Enter Task Name..."
					name="taskName"
					required
					data-secured
					value={taskObj.taskName}
					onChange={handleChange}
				/>
				<label className="form-label" htmlFor="taskDescription">
					Task Description:
				</label>
				<textarea
					className="form-control border border-secondary"
					name="taskDescription"
					id="taskDescription"
					required
					placeholder="Enter Task Description..."
					value={taskObj.taskDescription}
					onChange={handleChange}
					cols="30"
					rows="5"
				></textarea>
				<div className="form-group text-right mb-0">
					<button
						id="submitButton"
						className="btn btn-secondary mt-2"
						type="submit"
					>
						{taskId === null ? 'Create Task' : 'Update Task'}
					</button>
				</div>
			</form>
		</>
	)
}
