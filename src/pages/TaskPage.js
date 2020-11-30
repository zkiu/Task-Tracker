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
	// -- this path is reached when the url with a taskId is bookmarked, but the task is deleted in the database or the url has been modified
	// if (!confirmTaskIdExist(taskId)) {
	// 	return <h1>The task you are looking for doesn't exist</h1>
	// }

	return (
		<div className="container">
			<TaskForm taskId={taskId} />
			<h5 className="mt-3">Comment List:</h5>
			<CommentsSection taskId={taskId} />
		</div>
	)
}

// *** based on user's jobLevel, some fields cannot be changed
