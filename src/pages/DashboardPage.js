import React from 'react'
import {Link} from '@reach/router'
import TaskList from '../components/TaskList'

// ** need to add component to filter/query through tasks before sending array to TaskList
export default function DashboardPage() {
	return (
		<div className="container text-center">
			<div className="row justify-content-center">
				<div className="col-10 col-md-10 col-lg-8 col-xl-7">
					<div className="display-4 text-primary mt-3 mb-2">Task Dashboard</div>
					<p className="lead">Tasks assigned to you:</p>
					<div>--- implement search and filter function</div>
					<div>--- TASKLIST component appears below</div>
					<TaskList />
				</div>
			</div>
		</div>
	)
}
