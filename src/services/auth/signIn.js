import firebase from 'firebase/app'

// Wrapper for Firebase api
export const signIn = async (email, password) => {
	try {
		let result = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
		return result
	} catch (error) {
		throw new Error('Error signing in')
	}
}
