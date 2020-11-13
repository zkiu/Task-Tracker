import firebase from 'firebase/app'

// Wrapper for Firebase api
export const getCurrentUser = () => {
	const user = firebase.auth().currentUser
	if (!user) {
		return null // -- return null if no user is logged in
	} else {
		return {id: user.uid, email: user.email}
	}
}
