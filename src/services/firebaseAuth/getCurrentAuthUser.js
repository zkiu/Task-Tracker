import firebase from 'firebase/app'

// Wrapper for Firebase Auth api which returns only the id and email properties. Detailed user info is stored in Firestore under the same user id (see getUserInfo.js)
export const getCurrentAuthUser = () => {
	const user = firebase.auth().currentUser
	if (!user) {
		return null // -- return null if no user is logged in
	} else {
		return {id: user.uid, email: user.email}
	}
}
