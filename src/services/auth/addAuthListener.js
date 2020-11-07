import firebase from 'firebase/app'

// Wrapper for Firebase api
export const addAuthListener = (callback) => {
	const onChange = (user) => {
		if (user) {
			callback({}) // can modify parameters later
		} else {
			callback(null)
		}

		return firebase.auth().onAuthStateChanged(onChange)
	}
}
