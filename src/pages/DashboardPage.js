import React, {useState} from 'react'
import TasksList from '../components/TasksList'
import {useHistory} from 'react-router-dom'
import {useTaskList} from '../services/task/useTaskList'
import {filterTask} from '../services/task/filterTask'

export default function DashboardPage() {
	let history = useHistory()
	const [orderBy, setOrderby] = useState('recent')
	const [searchCriteria, setSearchCriteria] = useState('')
	let taskList = useTaskList()
	let filteredTasksArray = []
	if (taskList.length !== 0 && taskList !== undefined && taskList !== null) {
		filteredTasksArray = filterTask(taskList, searchCriteria, orderBy)
	}
	function handleClick(e) {
		e.preventDefault()
		history.push('editTask')
	}
	return (
		<>
			<div className="container text-center">
				<div className="row justify-content-center">
					<div className="col-10 col-md-10 col-lg-8 col-xl-7">
						<h1 className="display-4 text-primary mt-3 mb-2">Task Dashboard</h1>
						<button
							className="btn btn-secondary mt-4 mb-2"
							onClick={handleClick}
						>
							Create New Task
						</button>
						<div className="input-group mb-1">
							<input
								type="text"
								className="form-control"
								aria-label="Text input with dropdown button"
								placeholder="Enter search keywords..."
								autoFocus
								value={searchCriteria}
								onChange={(e) => setSearchCriteria(e.target.value)}
							/>
							<label className="input-group-text" htmlFor="searchOrder">
								Order Search by:
							</label>
							<select
								id="searchOrder"
								className="form-select"
								name="orderBy"
								value={orderBy}
								onChange={(e) => setOrderby(e.target.value)}
								required
							>
								<option value="recent" defaultValue>
									Recently Added
								</option>
								<option value="dueDate">Due Date</option>
								<option value="priority">Priority</option>
							</select>
						</div>
						<TasksList filteredTasksArray={filteredTasksArray} />
					</div>
				</div>
			</div>
		</>
	)
}
