import firebase from 'firebase/app'
import {useEffect, useState} from 'react'
// import {getUserInfo} from './getUserInfo'

// -- React custom hook return the Firestore userObj for a given userId
// -- It will also listen for changes to the doc
export const useFirestoreUserDoc = function (userId) {
	const [userObj, setUserObj] = useState(null)

	useEffect(() => {
		if (userId === null || userId === undefined) {
			setUserObj(null)
		} else {
			const userDocRef = firebase.firestore().collection('users').doc(userId)

			const unsubscribe = userDocRef.onSnapshot(
				(snapshot) => {
					setUserObj({id: userId, ...snapshot.data()})
				},
				(error) => {
					throw new Error('Error finding the user document: ' + error.message)
				}
			)
			return () => unsubscribe()
		}
	}, [userId])

	return userObj
}
