import {useEffect, useState} from 'react'
import {addAuthListener} from './addAuthListener'
import {getCurrentUser} from './getCurrentUser'

/*
useComments is a custom React Hook.
https://reactjs.org/docs/hooks-custom.html
*/

export const useAuth = () => {
	const [authInfo, setAuthInfo] = useState(() => {
		const user = getCurrentUser()
		const isLoading = !user
		return {isLoading, user}
	})

	useEffect(() => {
		const unsubscribe = addAuthListener((user) => {
			setAuthInfo({isLoading: false, user}) // -- isLoading will be explicitly false once sign-in state has changed
		})
		return unsubscribe // -- basically means that React will automatically call this unsubscribe function when the hook unmounts --- a clean up
	}, [])

	return authInfo // -- the value of the 'user' key will  be null when not logged in or when logging out
}
