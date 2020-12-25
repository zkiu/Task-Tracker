import firebase from 'firebase/app'

// -- wrapper to firebase for adding an object and returning the object with the newly created id
export default async function addTask(taskObj) {
	const tasksRef = firebase.firestore().collection('tasks')

	try {
		const docRef = await tasksRef.add(taskObj)
		const docSnap = await docRef.get()
		return {id: docRef.id, ...docSnap.data()} // -- returns the id with the data
	} catch (error) {
		alert(error.message)
		throw new Error(error)
	}
}
