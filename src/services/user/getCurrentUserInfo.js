import {getCurrentUser} from '../firebaseAuth/getCurrentUser'
import {getUserInfo} from './getUserInfo'

// -- returns the currently logged in user's info from the 'users' collection

export const getCurrentUserInfo = async () => {
	const userAuthObj = getCurrentUser()

	if (!userAuthObj) {
		return null
	} else {
		const userObj = await getUserInfo(userAuthObj.id)
		return userObj
	}
}
