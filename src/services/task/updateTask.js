import firebase from 'firebase/app'

// -- wrapper to firebase for updating a task
export default async function updateTask(taskId, taskObj) {
	// -- NOTE: ensures that the timestamp is not overwritten
	delete taskObj.dateCreated

	const tasksRef = firebase.firestore().collection('tasks').doc(taskId)
	try {
		await tasksRef.update(taskObj)
		return true
	} catch (error) {
		alert(error.message)
		throw new Error('Could not update the Task. Please contact Helpdesk.')
	}
}
