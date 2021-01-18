// !!! CURRENTLY NOT BEING USED IN THE PROJECT ANYMORE, BUT GOOD TO KEEP AROUND TO USE AS A REFERENCE

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
		const unsubscribe = commentsRef.orderBy('timestamp', 'desc').onSnapshot(
			(snapshot) => {
				/* 
				-- Learning from article https://medium.com/firebase-developers/the-secrets-of-firestore-fieldvalue-servertimestamp-revealed-29dd7a38a82b
				-- NOTE: this onSnapshot listener is triggered before the timestamp is written to the server (causing the property timestame to be null). It is then trigerred again with the actual server timestamp once written to the server. However, the app may hang on the 1st 'null' trigger. We can address by putting the data option as so: doc.data({serverTimestamps: 'estimate'}) THIS IS THE METHOD WE WILL USE IN THIS APP.
				 */
				const commentsArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data({serverTimestamps: 'estimate'}),
				}))
				setComments(commentsArray) // -- NOTE this setComments seems to need to be called inside the onSnapshot callback. Defining a var 1 layer up and setting the value outside and at the end of this callback function gets tricky
				/*
				// -- The other options is to use the metadata associated with the DocumentSnapshot delivered to the listener:
				const commentsArray = snapshot.docs.map((doc) => {
					if (doc) {
						if (!doc.data().timestamp && doc.metadata.hasPendingWrites) {
							console.log('Warning: doc has pending writes')
							return {
								...doc.data(),
								id: doc.id,
								timestamp: firebase.firestore.Timestamp.now(),
							}
						} else {
							// now we have the final timestamp value
							return {id: doc.id, ...doc.data()}
						}
					}
				})
				setComments(commentsArray)
				*/
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
