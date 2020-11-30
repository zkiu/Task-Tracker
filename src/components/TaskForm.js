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
			<h1>CREATE TASK PAGE</h1>

			<form>
				<label className="form-control-label" htmlFor="priority">
					Priority Level:
				</label>
				<select
					className="custom-select"
					name="priority"
					id="priority"
					value={taskObj.priority}
					onChange={handleChange}
					required
				>
					<option defaultValue value="">
						Priority...
					</option>
					<option value="P1">Priority: Low</option>
					<option value="P2">Priority: High</option>
				</select>
				<label className="form-control-label " htmlFor="status">
					Task Status:
				</label>
				<select
					className="custom-select"
					name="status"
					id="status"
					value={taskObj.status}
					onChange={handleChange}
					required
				>
					<option defaultValue value="">
						Status...
					</option>
					<option value="S1">Status: In Progress</option>
					<option value="S2">Status: Closing</option>
					<option value="S3">Status: Archieved</option>
				</select>

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

				<label className="form-control-label" htmlFor="taskName">
					Task Name
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
					Task Description
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
					rows="10"
				></textarea>

				{/* only show when the taskId is null (i.e. creating a new task) */}
				{taskId === null && (
					<button className="btn btn-primary" onClick={createTask}>
						Create Task
					</button>
				)}
				{/* only show when the taskId is NOT null (i.e. editing an existing task) */}
				{taskId !== null && (
					<button className="btn btn-primary" onClick={updateTask}>
						Update Task
					</button>
				)}
			</form>
		</>
	)
}
