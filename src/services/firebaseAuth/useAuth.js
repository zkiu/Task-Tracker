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
			setAuthInfo({isLoading: false, authUser})
			// -- isLoading true on initial mount, and will be false thereafter because we now have a defined value for authUser (either null or user data)
		})
		return unsubscribe // -- basically means that React will automatically call this unsubscribe function when the hook/component unmounts --- a clean up
	}, []) // -- empty array because only need need to add the listener when component mounts. The listener will stay active until unsubscribed during unmount

	return authInfo // -- the value of the 'user' key will be null when not logged in or when logging out
}
