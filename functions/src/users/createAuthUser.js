import * as admin from 'firebase-admin'

/* 
Were are not making wrapper functions for this, because these codes are to be used with Google Cloud functions.
 */
export const createAuthUser = async (newUserInfo) => {
	const auth = admin.auth()

	//*** NOTE that the course uses emailAddress
	const {email, password} = newUserInfo

	const newUser = await auth.createUser({email, password})

	return newUser.uid
}
