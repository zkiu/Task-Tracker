import React, {useState} from 'react'
import TasksList from '../components/TasksList'
import {navigate} from '@reach/router'
import {useTaskList} from '../services/task/useTaskList'
import {filterTask} from '../services/task/filterTask'

export default function DashboardPage() {
	// *** implement pagination, so only top 10 records gets shown until user scroll further down or request more https://www.youtube.com/watch?v=poqTHxtDXwU&list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&index=7

	const [orderBy, setOrderby] = useState('recent')
	const [searchCriteria, setSearchCriteria] = useState('')
	let taskList = useTaskList()
	let filteredTasksArray = []
	if (taskList.length !== 0 && taskList !== undefined && taskList !== null) {
		filteredTasksArray = filterTask(taskList, searchCriteria, orderBy)
	}
	function handleClick(e) {
		e.preventDefault()
		navigate('editTask')
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
								className="form-control border border-primary"
								aria-label="Text input with dropdown button"
								placeholder="Enter search keywords..."
								autoFocus
								value={searchCriteria}
								onChange={(e) => setSearchCriteria(e.target.value)}
							/>
							<input
								type="Query Type Label"
								className="form-control text-center col-lg-3"
								aria-label=""
								value="Order Search by:"
								disabled
							/>
							<select
								className="custom-select col-lg-3"
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
