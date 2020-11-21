import React from 'react'
import {useParams} from '@reach/router' // -- NOTE gets the dynamic segment directly from the url instead of being passed as a prop. useful because we are using the middleware ProtectedRoute
import CommentsList from '../components/CommentsList'

export default function TaskFormPage() {
	const taskId = useParams().taskId

	function handleClick(e) {
		console.log('clicked')
	}

	return (
		<div className="container">
			<h1>TASK FORM PAGE</h1>

			<div className="row justify-content-between m-0 mb-1">
				<h5>Comment List:</h5>
				<button className="btn btn-primary" type="button" onClick={handleClick}>
					+ Comment
				</button>
			</div>

			<CommentsList taskId={taskId} />
		</div>
	)
}

// may need a component just to list all the comments
// *** based on user's jobLevel, some fields cannot be changed
