import firebase from 'firebase/app'
const db = firebase.firestore()

export const getUserInfo = async (userId) => {
	const docReference = db.collection('users').doc(userId)
	const docSnapShot = await docReference.get()

	if (!docSnapShot.exists) {
		return null // we are saying to explicitely return null since userInfo is 'undefined' if no doc found
	}

	const docData = docSnapShot.data()

	return {...docData, id: userId} // -- added second property because docData does not contain the id
}
