import React from 'react'
import {useParams} from '@reach/router' // -- NOTE gets the dynamic segment directly from the url instead of being passed as a prop. useful because we are using the middleware ProtectedRoute
import TaskForm from '../components/TaskForm'
import CommentsSection from '../components/CommentsSection'

export default function TaskPage() {
	const taskId = useParams().taskId

	// -- if there is no task number provided(i.e. creating a new task)
	if (taskId === undefined) {
		return (
			<div className="container">
				<TaskForm taskId={null} />
			</div>
		)
	}

	// *** TODO below
	// -- this path is reachable when the url with a taskId is bookmarked (and the user is logged in), implement the following:
	// -- 1. if the task id no longer exist ->
	// if (!confirmTaskIdExist(taskId)) {
	// 	return <h1>The task you are looking for doesn't exist</h1>
	// }
	// -- 2. set restriction rights to access only the authorized tasks

	return (
		<div className="container">
			<TaskForm taskId={taskId} />
			<h4 className="text-primary mt-3">Comment List:</h4>
			<CommentsSection taskId={taskId} />
		</div>
	)
}
