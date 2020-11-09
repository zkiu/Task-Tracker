import firebase from 'firebase/app'

// Wrapper for Firebase api
export const getCurrentUser = () => {
	const user = firebase.auth().currentUser
	if (!user) return null
	return user // -- to be updated later as necessay
}
