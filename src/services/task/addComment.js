import firebase from 'firebase/app'

// -- function adds a new comment document under the task collection and comments subcollection
// -- returns the id of the new comment doc. This return value is currently not used
export default async function addComment(taskId, comment, userObj) {
	const collectionRef = firebase
		.firestore()
		.collection('tasks')
		.doc(taskId)
		.collection('comments')

	try {
		// -- comment doc's fields will not be atomized in order to save on extra query search. Both the username and email will be save in the comment doc. The username and email can be retrieved using the userId, but that requires an extra querying step, which neans more $.
		let newDocRef = await collectionRef.add({
			comment,
			name: userObj.name,
			userId: userObj.id,
			email: userObj.email,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		return newDocRef.id // -- returns the id of the newly added comment
	} catch (error) {
		alert('Errow with saving the comment: ' + error.message)
	}
}
