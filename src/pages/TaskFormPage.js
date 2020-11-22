import React, {useState} from 'react'
import {useParams} from '@reach/router' // -- NOTE gets the dynamic segment directly from the url instead of being passed as a prop. useful because we are using the middleware ProtectedRoute
import CommentsList from '../components/CommentsList'
import {getCurrentUserInfo} from '../services/user/getCurrentUserInfo'
import addComment from '../services/task/addComment'

export default function TaskFormPage() {
	const taskId = useParams().taskId

	const [newComment, setNewComment] = useState('')

	function handleChange(e) {
		e.preventDefault()
		setNewComment(e.target.value)
	}

	async function handleSubmit(e) {
		// *** use function to sanatize the comment field before sending off
		e.preventDefault() // -- prevents reloading when the 'enter' key is pressed when typing in the input field
		try {
			const userObj = await getCurrentUserInfo() // -- returns Null if no user is logged in

			if (!userObj) {
				// -- execute this if userObj is Null
				throw new Error('User information cannot be verified')
			}

			await addComment(taskId, newComment, userObj) // -- currentlyLoggedInUser is an object with the key id, name, email
			// *** handle the return for addComment

			setNewComment('') // -- resets the form after submitting

			// -- because onSnapshop was used to generate the list of comments, the new comment should automatically be displayed
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<div className="container">
			<h1>TASK FORM PAGE</h1>
			<h5>Comment List:</h5>
			<form className="input-group mb-3" onSubmit={handleSubmit}>
				<input
					name="comment"
					type="text"
					className="form-control"
					placeholder="Add a new comment..."
					aria-label="New comment input field"
					aria-describedby="button-comment"
					value={newComment}
					onChange={handleChange}
				/>
				<div className="input-group-append">
					<button
						className="btn btn-secondary"
						type="button"
						id="button-comment"
						onClick={handleSubmit}
					>
						+ Comment
					</button>
				</div>
			</form>

			<CommentsList taskId={taskId} />
		</div>
	)
}

// may need a component just to list all the comments
// *** based on user's jobLevel, some fields cannot be changed
