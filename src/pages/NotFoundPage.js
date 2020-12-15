import {useContext} from 'react'
import {UserContext} from '../services/user/UserContext'

// *** Make this page nicer

export default function NotFound() {
	const {authUser, userObj} = useContext(UserContext)
	/*******************************************************************/
	console.log('AAAA  value for: authUser ')
	console.log(authUser)
	console.log('BBBB  value for: userObj ')
	console.log(userObj)
	/*******************************************************************/
	return (
		<>
			{/* <div>{authUser}</div>
			<div>{userObj}</div>
			 */}
			<div>maybe some data</div>
		</>
	)
}
