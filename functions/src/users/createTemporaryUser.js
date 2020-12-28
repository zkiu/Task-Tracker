import * as admin from 'firebase-admin'
import {v4 as uuid} from 'uuid'

export const createTemporaryUser = async (authUid, newUserInfo) => {
	const firestore = admin.firestore()

	//*** NOTE that the course uses emailAddress
	const {name, email, jobLevel} = newUserInfo
	const confirmationHash = uuid()
	const createdAt = Date.now()
	const tempUserInfo = {
		name,
		email,
		jobLevel,
		confirmationHash,
		createdAt,
	}

	// Note that we need to explicitely return
	return firestore.collection('temporaryUsers').doc(authUid).set(tempUserInfo)
	// *** below is the course version
	// return firestore.collection('temporaryUsers').doc().set(tempUserInfo)
}
