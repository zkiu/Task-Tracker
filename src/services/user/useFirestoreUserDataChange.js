import firebase from 'firebase/app'
import {useEffect, useState} from 'react'
// import {getUserInfo} from './getUserInfo'

// -- React custom hook that listen for when a given user doc changes and loads it to the stateful val newUserObj
// -- currently is used to update/change the user profile in Firestore
export const useFirestoreUserDataChange = function (userId) {
	const [userObj, setUserObj] = useState({})

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
