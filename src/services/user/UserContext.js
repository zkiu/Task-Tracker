import {createContext} from 'react'

import {useFirestoreUserDoc} from './useFirestoreUserDoc'
import {useAuth} from '../firebaseAuth/useAuth'

export const UserContext = createContext(null)

export function UserDataProvider({children}) {
	let userId = null
	// -- updates when login status changes, 'user' has property user.id and user.email
	let {authUser, isLoading} = useAuth()
	// -- updates when the user profile changes in Firestore
	if (authUser !== null) {
		userId = authUser.id // -- NOTE that user obj is returned from Auth(). It has the auto generated property 'uid' instead of 'id'
	}
	// -- Listener for changes to the user's profile. Returns null if no one is logged in
	// -- can simplify this code further by creating a new function called useCurrentFirestoreUserDoc, which has no need for the userId param
	let userObj = useFirestoreUserDoc(userId)

	return (
		<UserContext.Provider value={{authUser, userObj}}>
			{children}
		</UserContext.Provider>
	)
}
