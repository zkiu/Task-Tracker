import {RiFileEditLine} from 'react-icons/ri'
import {useHistory} from 'react-router-dom'

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
			<div className="accordion-item" key={task.id}>
				<div className="accordion-header p-0" id={task.id}>
					<div
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target={`#collapse-${task.id}`}
						aria-expanded="false"
						aria-controls={`collapse-${task.id}`}
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
					</div>
				</div>
				<div
					id={`collapse-${task.id}`}
					className="accordion-collapse collapse"
					aria-labelledby={task.id}
					data-bs-parent="#taskListaccordion"
				>
					<div className="accordion-body">
						<div className="container">
							<div className="row">
								<span className="col text-start">
									Priority: {task.priority === 'p1' && ' Low'}
									{task.priority === 'p2' && ' High'}
								</span>
								<span className="col text-end">Due Date: {task.dateDue}</span>
							</div>
							<p className="col text-start mt-2">{task.taskDescription}</p>
						</div>
					</div>
				</div>
			</div>
		)
	})

	return (
		<>
			<div className="accordion" id="taskListaccordion">
				{myTask}
			</div>
		</>
	)
}
