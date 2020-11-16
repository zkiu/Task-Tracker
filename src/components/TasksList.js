import React from 'react'
import {RiFileEditLine} from 'react-icons/ri'
import {MdArrowDropDownCircle} from 'react-icons/md'
import {navigate} from '@reach/router'

// -- This compenent displays a list of tasks from a filtered Array passed on to it from Dashboard
export default function TasksList(prop) {
	// *** disable props for now

	// *** sample filtered tasks array from Dashboard
	let tasksArray = [
		{
			id: '4wsqXU',
			taskName: 'Suspendisse potenti.',
			priority: 'P2',
			status: 'Archieved',
			dateCreated: '2020-08-27',
			dateModified: '2020-06-05',
			description:
				'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
			supervisorId: 'user2',
			responsibleId: 'user1',
			commentListId: 'aIfCnh',
		},
		{
			id: 'zQ0wwr',
			taskName:
				'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
			priority: 'P2',
			status: 'Archieved',
			dateCreated: '2020-01-10',
			dateModified: '2020-02-16',
			description:
				'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
			supervisorId: 'user2',
			responsibleId: 'user1',
			commentListId: '1USQQR',
		},
		{
			id: 'yRdat4',
			taskName: 'Nunc nisl.',
			priority: 'P1',
			status: 'Archieved',
			dateCreated: '2020-02-06',
			dateModified: '2020-01-27',
			description:
				'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
			supervisorId: 'user2',
			responsibleId: 'user1',
			commentListId: '7ZnMis',
		},
		{
			id: 'haBkOA',
			taskName: 'Nullam porttitor lacus at turpis.',
			priority: 'P1',
			status: 'Archieved',
			dateCreated: '2019-12-26',
			dateModified: '2020-08-10',
			description:
				'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
			supervisorId: 'user4',
			responsibleId: 'user1',
			commentListId: '8Aikbc',
		},
	]

	let myTask = tasksArray.map((task) => {
		return (
			<div className="accordion" id="oneTaskElement" key={task.id}>
				<div className="card">
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
								title="Edit Task"
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
						data-parent="#oneTaskElement"
					>
						<div className="card-body">{task.description}</div>
					</div>
				</div>
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
