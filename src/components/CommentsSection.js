import React, {useState} from 'react'

import CommentsList from '../components/CommentsList'
import {getCurrentUserInfo} from '../services/user/getCurrentUserInfo'
import addComment from '../services/task/addComment'
import {containsBadChar} from '../services/general/containsBadChar'

export default function CommentsSection({taskId}) {
	const [newComment, setNewComment] = useState('')

	function handleChange(e) {
		e.preventDefault()
		setNewComment(e.target.value)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		try {
			const userObj = await getCurrentUserInfo()

			if (!userObj) {
				// -- execute this if userObj is Null
				throw new Error('User information cannot be verified')
			}
			// sanatize the comment field before sending off
			if (containsBadChar(newComment)) {
				// *** update this error message into a toast
				console.error(
					'Comments cannot contain special characters other than !?.$%&+-. Please remove the other special characters before saving'
				)
			} else {
				// -- currentlyLoggedInUser is an object with the key id, name, email
				await addComment(taskId, newComment, userObj)
				setNewComment('') // -- resets the form after submitting
				// -- because onSnapshop was used to generate the list of comments, the new comment should automatically be displayed
			}
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<div className="border p-2 card">
			<form className="input-group mb-3" onSubmit={handleSubmit}>
				<input
					name="comment"
					type="text"
					className="form-control border border-secondary"
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
