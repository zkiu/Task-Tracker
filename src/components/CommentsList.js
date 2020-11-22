import React from 'react'
import useComments from '../services/task/useComments'

export default function CommentsList({taskId}) {
	const commentsArray = useComments(taskId) // -- returns an array of comment objects

	// *** can apply a date sort to the array before mapping the JSX

	let commentJSX = commentsArray.map((comment) => {
		// -- each comment object has to have at least the following keyss: id, date, description, userId, name, email
		return (
			<li className="list-group-item list-group-item-action" key={comment.id}>
				<div className="d-flex w-100 justify-content-between">
					<a
						className="mb-1"
						href={`mailto:${comment.email}?subject=taskId:${taskId}`}
					>
						<small>{comment.name}</small>
					</a>
					<small className="text-muted">{comment.date}</small>
				</div>
				<div className="text-muted">{comment.comment}</div>
			</li>
		)
	})

	// *** add class active when roll over
	return (
		<>
			<ul className="list-group">{commentJSX}</ul>
		</>
	)
}
