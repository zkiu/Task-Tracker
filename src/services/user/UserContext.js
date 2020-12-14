import {createContext, useEffect, useState} from 'react'

import {getCurrentUserInfo} from './getCurrentUserInfo'
import {getCurrentAuthUser} from '../firebaseAuth/getCurrentAuthUser'

export const UserContext = createContext(null)

// -- a code wrapper for the createContext Provider
export function UserDataProvider({children}) {
	// const [userObj, setUserObj] = useState(null)

	const [status, setStatus] = useState(0)

	// useEffect((parameters) => {})
	function handleClick(e) {
		setStatus(() => {
			return status + 1
		})
	}

	return (
		<UserContext.Provider value={{status, handleClick}}>
			{children}
		</UserContext.Provider>
	)
}
