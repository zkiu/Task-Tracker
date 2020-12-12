import {getCurrentUser} from '../firebaseAuth/getCurrentUser'
import {getUserInfo} from './getUserInfo'

// -- returns the currently logged in user's info from the Firestore 'users' collection
// -- returns Null if not logged in

export const getCurrentUserInfo = async () => {
	const userAuthObj = getCurrentUser()

	if (!userAuthObj) {
		return null
	} else {
		const userObj = await getUserInfo(userAuthObj.id)
		return userObj
	}
}
