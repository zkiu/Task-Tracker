import firebase from 'firebase/app'

// Wrapper for Firebase api
export const getCurrentUser = () => {
	const user = firebase.auth().currentUser
	if (!user) {
		return null
	} else {
		return {id: user.uid, email: user.email}
	}
}
