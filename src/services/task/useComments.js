import {useState, useEffect} from 'react'
import firebase from 'firebase/app'

/*
useComments is a custom React Hook.

Below is taken from the react website: https://reactjs.org/docs/hooks-custom.html
To share stateful logic between two or more JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!
A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
*/

// -- returns an array of comments for a given taskId
// -- using the prefix of 'use' in front of the function name is important to identify it as a custom hook
export default function useComments(taskId) {
	const [comments, setComments] = useState([])

	useEffect(() => {
		const commentsRef = firebase
			.firestore()
			.collection('tasks')
			.doc(taskId)
			.collection('comments') // comments is a subcollection of each task document
		const unsubscribe = commentsRef.onSnapshot(
			(snapshot) => {
				const commentsArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
				setComments(commentsArray)
			},
			(error) => {
				throw new Error('Error: ' + error.message)
			}
		)
		return () => unsubscribe()
		// -- the return function activates when the componentWillUnmount, which is to clean up (unsubscribe) to the onSnapshot listener
	}, [taskId])

	return comments // -- an array of comment objects with all the key value pairs, including the doc id. The doc.id will be used as the element's unique key when rendering the React component
}
