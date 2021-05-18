import {useEffect, useState} from 'react'
import firebase from 'firebase/app'

import {loadMoreComments} from '../services/task/loadMoreComments'

export default function CommentsList({taskId}) {
	const [initialComments, setInitialComments] = useState([])
	const [comments, setComments] = useState([])
	const [lastRetrievedDoc, setLastRetrievedDoc] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const queryLimit = 5

	useEffect(() => {
		setIsLoading(true)
		const commentsRef = firebase
			.firestore()
			.collection('tasks')
			.doc(taskId)
			.collection('comments')
			.orderBy('timestamp', 'desc')
			.limit(queryLimit)

		const unsubscribe = commentsRef.onSnapshot(
			(snapshot) => {
				const commentsArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data({serverTimestamps: 'estimate'}),
				}))
				setInitialComments(commentsArray)
				setComments(commentsArray)
				setLastRetrievedDoc(snapshot.docs[snapshot.docs.length - 1])
			},
			(error) => {
				throw new Error('Error: ' + error.message)
			}
		)
		setIsLoading(false)

		return () => unsubscribe()
	}, [taskId])

	useEffect(() => {
		let element = document.querySelector('#commentBtn')
		// -- on mount
		if (initialComments.length >= queryLimit)
			element.removeAttribute('disabled')
		if (initialComments.length < queryLimit - 1)
			element.attributes.setNamedItem(document.createAttribute('disabled'))

		// -- when there is no more to load
		if (lastRetrievedDoc === undefined)
			element.attributes.setNamedItem(document.createAttribute('disabled'))
	})

	async function handleClick(e) {
		// -- load additional comments on click
		e.preventDefault()
		setIsLoading(true)
		try {
			const {lastComment, commentList} = await loadMoreComments(
				taskId,
				queryLimit,
				lastRetrievedDoc
			)
			setLastRetrievedDoc(lastComment)
			setIsLoading(false)
			setComments((existingComments) => [...existingComments, ...commentList])
		} catch (error) {
			console.error("Can't load additional comments")
		}
	}

	let commentJSX = comments.map((comment) => (
		// -- each comment object has to have at least the following keys: id, timestamp, description, userId, name, email
		<li className="list-group-item list-group-item-action" key={comment.id}>
			<div className="d-flex w-100 justify-content-between">
				<a
					className="mb-1"
					href={`mailto:${comment.email}?subject=taskId:${taskId}`}
				>
					<small>{comment.name}</small>
				</a>
				<small className="text-muted">
					{comment.timestamp.toDate().toDateString()}
				</small>
			</div>
			<div className="text-muted">{comment.comment}</div>
		</li>
	))

	return (
		<>
			{<ul className="list-group">{commentJSX}</ul>}
			<div>{isLoading && 'Loading...'}</div>
			<button
				id="commentBtn"
				className="btn btn-secondary mt-2"
				onClick={handleClick}
			>
				Load additional comments
			</button>
		</>
	)
}
