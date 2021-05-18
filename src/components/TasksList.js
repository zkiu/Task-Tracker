import React from 'react'
import {RiFileEditLine} from 'react-icons/ri'
import {MdArrowDropDownCircle} from 'react-icons/md'
import {useHistory} from 'react-router-dom'

// -- This compenent displays a list of tasks from a filtered Array passed on to it from Dashboard
export default function TasksList({filteredTasksArray}) {
	let history = useHistory()

	if (filteredTasksArray.length === 0) {
		return (
			<h4 className="text-white-50 mt-4">
				There are currently no task associated with your account.
			</h4>
		)
	}

	function handleClick(e, taskId) {
		e.stopPropagation()
		history.push('editTask/' + taskId)
	}

	let myTask = filteredTasksArray.map((task) => {
		return (
			<div className="card" key={task.id}>
				<div className="card-header p-0" id={task.id}>
					<div
						className="btn btn-block text-left"
						type="button"
						data-toggle="collapse"
						data-target={`#collapse${task.id}`}
						aria-expanded="false"
						aria-controls={`collapse${task.id}`}
					>
						<button
							type="button"
							className="btn btn-lg btn-outline-secondary col-1 p-2"
							title="Click to Edit Task"
							onClick={(e) => {
								handleClick(e, task.id)
							}}
						>
							<RiFileEditLine />
						</button>
						<div className="btn text-truncate text-nowrap text-left col-10">
							{task.taskName}
						</div>
						<div className="btn col-1">
							<MdArrowDropDownCircle />
						</div>
					</div>
				</div>

				<div
					id={`collapse${task.id}`}
					className="collapse"
					aria-labelledby={task.id}
					data-parent="#taskListaccordion"
				>
					<div className="card-body text-left ">
						<div className="container">
							<div className="card-title row justify-content-between">
								<span>
									Priority: {task.priority === 'p1' && ' Low'}
									{task.priority === 'p2' && ' High'}
								</span>
								<span>Due Date: {task.dateDue}</span>
							</div>
						</div>
						<p className="card-text">{task.taskDescription}</p>
					</div>
				</div>
			</div>
		)
	})

	// -- NOTE: the class 'accordion' was added below so that only one element is shown while the rest is collapsed. To have multiple tasks elements uncollapsed at the same time, remove the accordion class, and take out the id="taskListaccordion" below as well as the data-parent="#taskListaccordion" in the .map() function
	return (
		<>
			{/* <h1>BELOW IS THE TASK LIST:</h1> */}
			<div className="accordion" id="taskListaccordion">
				{myTask}
			</div>
		</>
	)
}
