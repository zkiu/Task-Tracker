import React from 'react'
import firebase from '../FirebaseConfig'
import {RiFileEditLine} from 'react-icons/ri'
import {navigate} from '@reach/router'

// -- This compenent displays the lists of task from an Array
export default function TaskList(prop) {
	// *** dissable props for now
	// let {tasks} = prop.taskList

	let tasks = [
		{
			taskID: 'xyz',
			taskName: 'Creating this website is the task',
		},
	]

	let myTask = tasks.map((item) => {
		return (
			<div className="list-group-item d-flex" key={item.taskID}>
				<section
					className="btn-group align-self-center"
					role="group"
					aria-label="Task Option(s)"
				>
					<button
						className="btn btn-sm btn-outline-secondary"
						title="View/Edit task"
					>
						<RiFileEditLine />
					</button>
				</section>
				<section className="pl-3 text-left align-seft-center">
					{item.taskName /*add task status, duedates*/}
				</section>
			</div>
		)
	})

	return (
		<>
			<h1>BELOW IS THE TASK LIST:</h1>
			{myTask}
		</>
	)
}
