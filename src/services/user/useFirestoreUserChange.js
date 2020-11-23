import firebase from 'firebase/app'
import {useEffect, useState} from 'react'
// import {getUserInfo} from './getUserInfo'

// *** remove default userId parameter

// -- a react custom hook that listen for when the user doc changes
export default function useFirestoreUserChange(userId) {
	const [newUserObj, setNewUserObj] = useState({}) // *** should be setting the default to be an emty object or the existing user obj based on the given userId?

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
