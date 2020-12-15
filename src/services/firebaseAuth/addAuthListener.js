import firebase from 'firebase/app'

// Wrapper for Firebase api
// could have used this code directly in useAuth.js, but here we extracted the code to make a wrapper,so that we can easily migrate away from Firebase, if required.
export const addAuthListener = (callback) => {
	// -- onChange is an intermediary function that allows us (if desired) to pass exactly what we want to the callback by modifying condation A and condition B
	// -- this makes sure we are not locked into the firebase api onAuthStateChanged(), and makes it easier to switch to another service
	const onChange = (user) => {
		if (user) {
			// -- condition A
			callback(user) // -- we could have passed specific properties from the user obj returned by onAuthStateChanged(), such as {id: user.uid, email: user.email}
		} else {
			// -- condition B
			callback(null)
		}
	}
	return firebase.auth().onAuthStateChanged(onChange) // -- .onAuthStateChanged() passes the user credentials || null to the function onChange
}
