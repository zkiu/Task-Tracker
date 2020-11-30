import React, {useEffect, useState} from 'react'
import firebase from 'firebase/app'
import addTask from '../services/task/addTask'

export default function TaskForm({taskId = null}) {
	// *** if task id is not null, preassign the initial useState values

	const [taskObj, setTaskObj] = useState({
		priority: '',
		status: '',
		dateCreated: '',
		dateDue: '',
		nameTaskCreator: '', // *** pre assign if L2 user
		nameResponsible: '',
		taskName: '',
		taskDescription: '',
	})

	useEffect(() => {
		if (taskId === null) {
			setTaskObj({
				...taskObj,
				dateCreated: firebase.firestore.FieldValue.serverTimestamp(), // -- add a timestamp property to the obj when creating a new doc
			})
		}
		// *** load L2 user info
	}, [])

	function handleChange(e) {
		setTaskObj({...taskObj, [e.target.name]: e.target.value})
	}
	function handlePriorityChange(e) {
		handleChange(e)

		// -- change the menu color based on the selection
		switch (e.target.value) {
			case '':
				e.target.setAttribute('style', 'background-color:white; color:black')
				break
			case 'P1':
				e.target.setAttribute('style', 'background-color:yellow; color:black')
				break
			case 'P2':
				e.target.setAttribute('style', 'background-color:orange; color:white')
				break

			default:
				break
		}
	}

	function handleStatusChange(e) {
		handleChange(e)

		// -- change the menu color based on the selection
		switch (e.target.value) {
			case '':
				e.target.setAttribute('style', 'background-color:white; color:black')
				break
			case 'S1':
				e.target.setAttribute('style', 'background-color:green; color:white')
				break
			case 'S2':
				e.target.setAttribute('style', 'background-color:gray; color:black')
				break
			case 'S3':
				e.target.setAttribute('style', 'background-color:black; color:white')
				break

			default:
				break
		}
	}

	async function createTask(e) {
		e.preventDefault()
		await addTask({name: 'new test'}) // *** change obj to be passed

		// *** disable button and add pop up message on button once clicked
	}
	function updateTask(e) {
		e.preventDefault()
		console.log('updated')
		// *** disable button and add pop up message on button once clicked
	}

	return (
		<>
			{/* display of heading will depend of status of taskId */}
			{taskId === null && <h1>Create a New Task</h1>}
			{taskId !== null && <h1>Update the Task</h1>}

			<form className="border p-2">
				<div className="form-row">
					<div className="form-group col-md-3">
						<label className="form-control-label" htmlFor="priority">
							Priority Level:
						</label>
						<select
							className="custom-select"
							name="priority"
							id="priority"
							value={taskObj.priority}
							onChange={handlePriorityChange}
							required
						>
							<option
								defaultValue
								value=""
								style={{backgroundColor: 'white', color: 'grey'}}
							>
								Priority...
							</option>
							<option
								value="P1"
								style={{backgroundColor: 'yellow', color: 'black'}}
							>
								Low
							</option>

							<option
								value="P2"
								style={{backgroundColor: 'orange', color: 'white'}}
							>
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
							Task Manager
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
							<option>***Dynamically generated list of employees</option>
						</select>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-3">
						<label className="form-control-label " htmlFor="status">
							Task Status:
						</label>
						<select
							className="custom-select"
							name="status"
							id="status"
							value={taskObj.status}
							onChange={handleStatusChange}
							required
						>
							<option
								defaultValue
								value=""
								style={{backgroundColor: 'white', color: 'grey'}}
							>
								Status...
							</option>
							<option
								style={{backgroundColor: 'green', color: 'white'}}
								value="S1"
							>
								In Progress
							</option>
							<option
								style={{backgroundColor: 'grey', color: 'black'}}
								value="S2"
							>
								Closing
							</option>
							<option
								style={{backgroundColor: 'black', color: 'white'}}
								value="S3"
							>
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
						{' '}
						{/* *** modify so that only show this field when updating the form. Keep for now to keep track that L2 name is showing proporly for saving *** */}
						{/* only L2 users can appear here */}
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
							// onChange={handleChange}
							disabled
						/>
						{/*  */}
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

				{/* only show when the taskId is null (i.e. creating a new task) */}
				{taskId === null && (
					<button className="btn btn-primary mt-2" onClick={createTask}>
						Create Task
					</button>
				)}
				{/* only show when the taskId is NOT null (i.e. editing an existing task) */}
				{taskId !== null && (
					<button className="btn btn-primary mt-2" onClick={updateTask}>
						Update Task
					</button>
				)}
			</form>
		</>
	)
}
