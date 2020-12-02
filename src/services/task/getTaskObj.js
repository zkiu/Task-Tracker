import firebase from 'firebase/app'

// -- Returns an object with all the fields of a task for a given taskId || undefined if no record match taskId (not likely scenario, maybe when connectino is lost?)
export default async function getTaskObj(taskId) {
	const taskRef = firebase.firestore().collection('tasks').doc(taskId)
	const docRef = await taskRef.get()
	return docRef.data()
}
