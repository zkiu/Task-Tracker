import firebase from 'firebase/app'

// -- create new userCredentials in Firebase.Auth() and returns the unique id
export default async function createFBUserWithEmailandPass(email, password) {
	// -- note that when a user is successfully created, they will automatically be signed in
	try {
		const newUserCredential = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
		return newUserCredential.user.uid
	} catch (error) {
		throw new Error(error)
	}
}
