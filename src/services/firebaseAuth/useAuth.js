import {useEffect, useState} from 'react'
import {addAuthListener} from './addAuthListener'
import {getCurrentAuthUser} from './getCurrentAuthUser'

/*
useAuth is a custom React Hook. 
https://reactjs.org/docs/hooks-custom.html
On user login status change, it load and return the login credentials (+ simple coded isLoading status) to authInfo 
*/

export const useAuth = () => {
	const [authInfo, setAuthInfo] = useState(() => {
		const authUser = getCurrentAuthUser()
		const isLoading = !authUser
		return {isLoading, authUser}
	})

	useEffect(() => {
		const unsubscribe = addAuthListener((authUser) => {
			setAuthInfo({isLoading: false, authUser}) // -- isLoading will be explicitly false once sign-in state has changed
		})
		return unsubscribe // -- basically means that React will automatically call this unsubscribe function when the hook unmounts --- a clean up
	}, [])

	return authInfo // -- the value of the 'user' key will be null when not logged in or when logging out
}
