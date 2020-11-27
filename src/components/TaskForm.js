import React from 'react'

export default function TaskForm({taskId = null}) {
	function handleChange(e) {
		console.log('typing')
	}

	function createTask(e) {
		e.preventDefault()
		console.log('created')
		// *** disable button and add message on button once clicked
	}
	function updateTask(e) {
		e.preventDefault()
		console.log('updated')
	}

	return (
		<>
			<h1>CREATE TASK PAGE</h1>

			<form>
				<label
					className="form-control-label sr-only"
					htmlFor="priority"
				></label>
				<select
					className="custom-select"
					name="priority"
					id="priority"
					value="{XXX.priority}"
					onChange={handleChange}
					required
				>
					<option defaultValue value="">
						Priority...
					</option>
					<option value="P1">Priority: Low</option>
					<option value="P2">Priority: High</option>
				</select>
				<label className="form-control-label sr-only" htmlFor="status"></label>
				<select
					className="custom-select"
					name="status"
					id="status"
					value="{XXX.status}"
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

				<label className="form-control-label sr-only" htmlFor="dateCreated">
					Date Created:
				</label>
				<input
					className="form-control"
					type="text"
					id="dateCreated"
					placeholder="Loading..."
					name="dateCreated"
					value="{XXX.dateCreated}"
					onChange={handleChange}
				/>
				<label className="form-control-label sr-only" htmlFor="dateDue">
					Date Created:
				</label>
				<input
					className="form-control"
					type="text"
					id="dateDue"
					placeholder="Loading..."
					required
					name="dateDue"
					value="{XXX.dateDue}"
					onChange={handleChange}
				/>

				<label className="form-control-label sr-only" htmlFor="leadName">
					Task Name
				</label>
				<input
					className="form-control"
					type="text"
					id="leadName"
					placeholder="Loading..."
					name="Leader's Name"
					value="{XXX.LeadName}"
					onChange={handleChange}
					disabled
				/>
				<label className="form-control-label sr-only" htmlFor="responsibleName">
					Task Name
				</label>
				<select
					className="custom-select"
					name="responsibleName"
					id="responsibleName"
					value="{XXX.responsibleName}"
					onChange={handleChange}
					required
				>
					<option defaultValue value="">
						Appoint Responsible Level 1 Employee...
					</option>
					<option>***Dynamically generated list of employees</option>
				</select>

				<label className="form-control-label sr-only" htmlFor="taskName">
					Task Name
				</label>
				<input
					className="form-control"
					type="text"
					id="taskName"
					placeholder="Enter Task Name..."
					name="taskName"
					required
					value="{XXX.taskName}"
					onChange={handleChange}
				/>
				<label className="form-control-label sr-only" htmlFor="taskDescription">
					Task Description
				</label>
				<textarea
					className="form-control"
					name="taskDescription"
					id="taskDescription"
					required
					placeholder="Enter Task Description..."
					value="{XXX.name}"
					onChange={handleChange}
					cols="30"
					rows="10"
				></textarea>

				<button className="btn btn-primary" onClick={createTask}>
					Create Task
				</button>
				<button className="btn btn-primary" onClick={updateTask}>
					Update Task
				</button>
			</form>
		</>
	)
}
