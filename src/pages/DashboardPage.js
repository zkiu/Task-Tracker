import React from 'react'
import TasksList from '../components/TasksList'
import {navigate} from '@reach/router'

// ** need to add component to filter/query through tasks before sending array to TaskList
export default function DashboardPage({tasksList}) {
	// *** sample tasks array to send to TasksList
	let filteredTasksArray = [
		{
			id: '2NQyjS',
			taskName: 'Suspendisse potenti.',
			priority: 'High',
			status: 'Archieved',
			dateCreated: '2020-08-27',
			dateModified: '2020-06-05',
			dateDue: '2020-03-12',
			description:
				'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
			supervisorId: 'user2',
			responsibleId: 'user1',
			commentListId: 'aIfCnh',
		},
		{
			id: 'DqLbrH',
			taskName:
				'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
			priority: 'High',
			status: 'Archieved',
			dateCreated: '2020-01-10',
			dateModified: '2020-02-16',
			dateDue: '2020-03-12',
			description:
				'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
			supervisorId: 'user2',
			responsibleId: 'user1',
			commentListId: '1USQQR',
		},
	]
	// *** set so that users can only see their own task when responsible or created (if L2 then created, and responsible, L1 if responsible)
	// *** query based on priority, keywords in task name, MAYBE on due dates???
	// *** sort result before sending off??
	// *** implement pagination, so only top 10 records gets shown until user scroll further down or request more
	// *** https://www.youtube.com/watch?v=poqTHxtDXwU&list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&index=7

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
