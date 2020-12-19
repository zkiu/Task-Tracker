import {useState, useEffect} from 'react'
import firebase from 'firebase/app'

/*
useEmployeeList is a custom React Hook.
params: jobLevel is string L1 or L2
returns a realtime array of employees at the JOBLEVEL 1
*/
export default function useEmployeeList(jobLevel) {
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		const usersRef = firebase.firestore().collection('users')

		const unsubscribe = usersRef
			.where('jobLevel', '==', jobLevel)
			.orderBy('name', 'asc')
			.onSnapshot(
				(snapshot) => {
					const usersArray = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}))
					setEmployees(usersArray)
				},
				(error) => {
					throw new Error('Error: ' + error.message)
				}
			)
		return () => unsubscribe()
		// eslint-disable-next-line
	}, [])

	return employees // -- an array of users objects with all the key value pairs, including the doc id. The doc.id will be used as the element's unique key when rendering the React component
}
