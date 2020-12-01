import firebase from 'firebase/app'
import {useEffect, useState} from 'react'
// import {getUserInfo} from './getUserInfo'

// -- React custom hook that listen for when the user doc changes and loads it to the stateful val newUserObj
// -- currently is used to update/change the user profile in Firestore
export default function useFirestoreUserChange(userId) {
	const [newUserObj, setNewUserObj] = useState({})

	useEffect(() => {
		if (userId === null || userId === undefined) {
			setNewUserObj(null)
		} else {
			const userDocRef = firebase.firestore().collection('users').doc(userId)

			const unsubscribe = userDocRef.onSnapshot(
				(snapshot) => {
					setNewUserObj({id: userId, ...snapshot.data()})
				},
				(error) => {
					throw new Error('Error finding the user document: ' + error.message)
				}
			)
			return () => unsubscribe()
		}
	}, [userId])

	return newUserObj
}
