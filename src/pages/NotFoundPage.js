import {useContext} from 'react'
import {UserContext} from '../services/user/UserContext'

// *** Make this page nicer

export default function NotFound() {
	const {status, handleClick, msg} = useContext(UserContext)

	return (
		<>
			<div>
				<button onClick={handleClick}>Click Here</button>
				Sorry, nothing here. I'll make this page prettier next time.But for now
				a message: {status} +++
			</div>
			<div>{msg}</div>
		</>
	)
}
