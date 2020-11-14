import firebase from 'firebase/app'

// -- creates a new user doc at the 'users' collection. NOTE if 'users' is the right collection name in the projects when reusing this code.
export default async function createUserDoc(id, name, email, jobLevel) {
	const db = firebase.firestore()

	db.collection('users')
		.doc(id)
		.set({name, email, jobLevel})
		.catch((error) => {
			throw new Error(error.message)
		})
}
