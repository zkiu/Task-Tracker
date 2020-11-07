import firebase from 'firebase/app'

// Wrapper for Firebase api
export const getCurrentUser = async () => {
	const user = firebase.auth().currentUser()
	if (!user) return null
	return {} // -- to be expanded later
}
