import firebase from 'firebase/app'

// -- wrapper to firebase for adding an object and returning the object with the newly created id

// *** implement data cleansing and validation before upload to firestore
export default async function addTasks(taskObj) {
	const tasksRef = firebase.firestore().collection('tasks')
	const docRef = await tasksRef.add(taskObj)
	const docSnap = await docRef.get()

	// console.log(docRef.id)
	// console.log(docSnap.data())

	// console.log({id: docRef.id, ...docSnap.data()})
	return {id: docRef.id, ...docSnap.data()} // -- returns the id with the data
}
