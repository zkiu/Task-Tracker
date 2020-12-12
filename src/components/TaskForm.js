// *** error ' A component is changing a controlled input to be uncontrolled' appears when on page is reloaded, navigate to / or already in the task form page to edit existing task, make any change, then updating task - error not appear again until reload page

// *** dynamic list of jobLevel 1 for the dropdown menu is further filtered by department (but this is for future improvements / production version)
// *** set restrictions to field depending on joblevel
// *** lock taskName once created
// *** provide more detail of what was modified for Auto Messages when updating tasks
import React, {useEffect, useState} from 'react'
import firebase from 'firebase/app'
import {navigate} from '@reach/router'

import {getCurrentUserInfo} from '../services/user/getCurrentUserInfo'
import getTaskObj from '../services/task/getTaskObj'
import useEmployeeList from '../services/task/useEmployeeList'
import addTask from '../services/task/addTask'
import updateTask from '../services/task/updateTask'
import addComment from '../services/task/addComment'

export default function TaskForm({taskId = null}) {
	const [userObj, setuserObj] = useState({})

	const [taskObj, setTaskObj] = useState({
		priority: '',
		status: '',
		dateCreated: '',
		dateDue: '',
		nameTaskCreator: '',
		nameResponsible: '',
		taskName: '',
		taskDescription: '',
	})

	// -- used to keep track if the data has been changed
	const [existingTaskObj, setExistingTaskObj] = useState({
		priority: '',
		status: '',
		dateCreated: '',
		dateDue: '',
		nameTaskCreator: '',
		nameResponsible: '',
		taskName: '',
		taskDescription: '',
	})

	let employeeList = useEmployeeList().map((item) => {
		return <option key={item.id}>{item.name}</option>
	})
	// -- NEW task - Load the currently logged jobLevel 2 user info
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
			setTaskObj((old) => ({...old, status: 's1'}))
		}
	}, [taskId])
	// -- EXISTING task - set the state to the task info
	useEffect(() => {
		if (taskId !== null) {
			async function getTaskandSet() {
				const taskInfo = await getTaskObj(taskId)
				setTaskObj({...taskInfo})
				setExistingTaskObj({...taskInfo})
			}
			getTaskandSet()
		}
	}, [taskId])
	// -- set colour of the dropdown menues
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
			let newTask = await addTask({
				...taskObj,
				nameTaskCreator: userObj.name, // ***  name is entered directly instead of userId
				dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
			})
			// -- auto generate comment about task created by so and so
			autoCommentBot(newTask.id, 'Auto Message: Task is created')

			alert('New task is saved') // *** make this into a toast/modal
			navigate('../dashboard')
		} else {
			// -- if updating a task
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
			{/* display of heading will depend of status of taskId */}
			{taskId === null && <h1>Create a New Task</h1>}
			{taskId !== null && <h1>Update the Task</h1>}

			<form className="border p-2" onSubmit={handleSubmit}>
				<div className="form-row">
					<div className="form-group col-md-3">
						<label className="form-control-label" htmlFor="priority">
							Priority Level:
						</label>
						<select
							className="custom-select priority"
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
						<label className="form-control-label" htmlFor="dateDue">
							Deadline:
						</label>
						<input
							className="form-control"
							type="date"
							id="dateDue"
							placeholder="Select Task Deadline..."
							required
							name="dateDue"
							value={taskObj.dateDue}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group col-md-6">
						{/* only L1 users can appear here */}
						<label className="form-control-label" htmlFor="nameResponsible">
							Responsible Employee
						</label>
						<select
							className="custom-select"
							name="nameResponsible"
							id="nameResponsible"
							value={taskObj.nameResponsible}
							onChange={handleChange}
							required
						>
							<option defaultValue value="">
								Appoint Responsible Level 1 Employee...
							</option>
							{employeeList}
						</select>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-3">
						<label className="form-control-label " htmlFor="status">
							Task Status:
						</label>
						<select
							className="custom-select status"
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
								<label className="form-control-label" htmlFor="dateCreated">
									Date Created:
								</label>
								<input
									className="form-control"
									type="date"
									id="dateCreated"
									placeholder="Loading..."
									name="dateCreated"
									value={taskObj.dateCreated}
									disabled
								/>
							</>
						)}
					</div>
					<div className="form-group col-md-6">
						{taskId !== null && (
							<>
								<label className="form-control-label" htmlFor="nameTaskCreator">
									Task Creator
								</label>
								<input
									className="form-control"
									type="text"
									id="nameTaskCreator"
									placeholder="Leader's Name"
									name="nameTaskCreator"
									value={taskObj.nameTaskCreator}
									disabled
								/>
							</>
						)}
					</div>
				</div>

				<label className="form-control-label" htmlFor="taskName">
					Task Name:
				</label>
				<input
					className="form-control"
					type="text"
					id="taskName"
					placeholder="Enter Task Name..."
					name="taskName"
					required
					value={taskObj.taskName}
					onChange={handleChange}
				/>
				<label className="form-control-label" htmlFor="taskDescription">
					Task Description:
				</label>
				<textarea
					className="form-control"
					name="taskDescription"
					id="taskDescription"
					required
					placeholder="Enter Task Description..."
					value={taskObj.taskDescription}
					onChange={handleChange}
					cols="30"
					rows="5"
				></textarea>

				<button
					id="submitButton"
					className="btn btn-primary mt-2"
					type="submit"
				>
					{taskId === null && 'Create Task'}
					{taskId !== null && 'Update Task'}
				</button>
			</form>
		</>
	)
}
