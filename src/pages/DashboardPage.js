import React from 'react'
import TasksList from '../components/TasksList'
import {navigate} from '@reach/router'
import {useTaskList} from '../services/task/useTaskList'

// ** need to add component to filter/query through tasks before sending array to TaskList
export default function DashboardPage() {
	// *** query based on priority, keywords in task name, MAYBE on due dates???
	// *** sort result before sending off??
	// *** implement pagination, so only top 10 records gets shown until user scroll further down or request more https://www.youtube.com/watch?v=poqTHxtDXwU&list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&index=7

	let filteredTasksArray = useTaskList() // *** insert query to get back filtered list

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
						<div>--- implement search and filter function</div>
						<TasksList filteredTasksArray={filteredTasksArray} />
					</div>
				</div>
			</div>
		</>
	)
}
