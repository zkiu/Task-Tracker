import {useEffect, useState} from 'react'
import {addAuthListener} from './addAuthListener'
import {getCurrentUser} from './getCurrentUser'

export const useAuth = () => {
	const [authInfo, setAuthInfo] = useState(() => {
		const user = getCurrentUser()
		const isLoading = !user
		return {isLoading, user}
	})

	useEffect(() => {
		const unsubscribe = addAuthListener((user) => {
			setAuthInfo({isLoading: false, user})
		})
		return unsubscribe // -- basically means that React will automatically call this unsubscribe function when the hook unmounts
	}, [])

	return authInfo
}
