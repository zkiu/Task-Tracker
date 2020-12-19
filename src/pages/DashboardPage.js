import React, {useState} from 'react'
import TasksList from '../components/TasksList'
import {navigate} from '@reach/router'
import {useTaskList} from '../services/task/useTaskList'

// ** need to add component to filter/query through tasks before sending array to TaskList
export default function DashboardPage() {
	// *** query based on priority, keywords in task name, MAYBE on due dates???
	// *** sort result before sending off??
	// *** implement pagination, so only top 10 records gets shown until user scroll further down or request more https://www.youtube.com/watch?v=poqTHxtDXwU&list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&index=7

	let filteredTasksArray = useTaskList() // *** insert query to get back filtered list

	const [orderBy, setOrderby] = useState('date')
	const [searchCriteria, setSearchCriteria] = useState('')

	function handleClick(e) {
		navigate('editTask')
	}
	return (
		<>
			<div className="container text-center">
				<div className="row justify-content-center">
					<div className="col-10 col-md-10 col-lg-8 col-xl-7">
						<div className="display-4 text-primary mt-3 mb-2">
							Task Dashboard
						</div>
						<button className="btn btn-secondary" onClick={handleClick}>
							Create New Task
						</button>
						<p className="lead">Tasks assigned to you:</p>
						{/*  */}

						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								aria-label="Text input with dropdown button"
								placeholder="Enter search keywords..."
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
								<option defaultValue value="date">
									Due Date
								</option>
								<option value="priority">Priority</option>
							</select>
						</div>
						{/*  */}

						{/*  */}
						<TasksList filteredTasksArray={filteredTasksArray} />
					</div>
				</div>
			</div>
		</>
	)
}
