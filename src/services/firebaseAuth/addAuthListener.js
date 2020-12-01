import firebase from 'firebase/app'

// Wrapper for Firebase api
// could have used this code directly in useAuth.js, but here we extracted the code to make a wrapper,so that we can easily migrate away from Firebase, if required.

export const addAuthListener = (callback) => {
	const onChange = (user) => {
		if (user) {
			callback(user)
		} else {
			callback(null)
		}
	}
	return firebase.auth().onAuthStateChanged(onChange) // -- .onAuthStateChanged() passes the user credentials || null to the function onChange
}
