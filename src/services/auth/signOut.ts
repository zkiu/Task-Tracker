import firebase from 'firebase/app'

// Wrapper for Firebase api
export const signOut = async (): Promise<void> => {
	try {
		await firebase.auth().signOut()
	} catch (error) {
		throw new Error('Error with sign out')
	}
}
