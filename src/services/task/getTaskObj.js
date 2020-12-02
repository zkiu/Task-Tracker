import firebase from 'firebase/app'

// -- Returns an object with all the fields of a task for a given taskId || undefined if no record match taskId (not likely scenario, maybe when connectino is lost?)
export default async function getTaskObj(taskId) {
	const taskRef = firebase.firestore().collection('tasks').doc(taskId)
	const docRef = await taskRef.get()
	const obj = docRef.data()

	// -- convert the Firestore timestamp value to a simplified date of YYYY-MM-DD
	let simpleDate = obj.dateCreated.toDate() // -- creates a new Date() from the milliseconds
	simpleDate = simpleDate.toISOString().slice(0, 10)

	return {...obj, dateCreated: simpleDate}
}
