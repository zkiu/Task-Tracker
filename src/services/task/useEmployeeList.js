// *** create index in firestore to add compound filtering

import {useState, useEffect} from 'react'
import firebase from 'firebase/app'

/*
useEmployeeList is a custom React Hook.
returns a realtime array of employees at the JOBLEVEL 1
*/
export default function useEmployeeList() {
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		const usersRef = firebase.firestore().collection('users')

		const unsubscribe = usersRef
			.where('jobLevel', '==', 'L1')
			// .orderBy('name', 'desc')
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
		// -- the return func*
	}, [])

	return employees // -- an array of users objects with all the key value pairs, including the doc id. The doc.id will be used as the element's unique key when rendering the React component
}
