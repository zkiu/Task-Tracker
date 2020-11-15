import firebase from 'firebase/app'
const db = firebase.firestore()

// *** Note that it won't resolve while offlined. Need to handle this situation
export const updateUserInfo = async (userId, ObjToBeSaved) => {
	try {
		const docReference = db.collection('users').doc(userId)
		await docReference.update(ObjToBeSaved)
		return true
	} catch (error) {
		return false
	}
}
