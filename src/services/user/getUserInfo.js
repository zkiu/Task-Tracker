import firebase from 'firebase/app'
const db = firebase.firestore()

// -- Returns all of a user's details in Firestore doc given an id
export const getUserInfo = async (userId) => {
	if (userId === null) return null // -- handle the improbably situation where userId is null

	const docReference = db.collection('users').doc(userId)
	const docSnapShot = await docReference.get()

	if (!docSnapShot.exists) {
		return null // we are saying to explicitely return null since userInfo is 'undefined' if no doc found
	}

	const docData = docSnapShot.data()

	return {...docData, id: userId} // -- adds id key because docData does not contain the id directly
}
