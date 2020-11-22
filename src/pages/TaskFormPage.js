import React from 'react'
import {useParams} from '@reach/router' // -- NOTE gets the dynamic segment directly from the url instead of being passed as a prop. useful because we are using the middleware ProtectedRoute
import CommentsSection from '../components/CommentsSection'

export default function TaskFormPage() {
	const taskId = useParams().taskId

	return (
		<div className="container">
			<h1>TASK FORM PAGE</h1>
			<h5>Comment List:</h5>
			<CommentsSection taskId={taskId} />
		</div>
	)
}

// may need a component just to list all the comments
// *** based on user's jobLevel, some fields cannot be changed
