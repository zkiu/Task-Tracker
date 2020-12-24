import {useEffect, useState} from 'react'
import firebase from 'firebase/app'
import {getCurrentAuthUser} from '../firebaseAuth/getCurrentAuthUser'
/*
A wrapper API that RETURNS a realtime array of task Objects associated with the currently logged on userId
ex: [{dateCreated, dateDue, nameResponsible, nameResponsibleId, nameTaskCreator, nameTaskCreatorId, priority, status, taskDescription, taskName}]
NOTE refer to the comments in useComments for detail innerworkings of the code below
*/
export const useTaskList = () => {
	let userAuthObj = getCurrentAuthUser()
	let finalList = []
	const [tasksCreator, setTasksCreator] = useState([])
	const [tasksResponsible, setTasksResponsible] = useState([])

	// -- loading Docs where current userId match the creator field
	useEffect(() => {
		let tasksArray = []
		const tasksRef = firebase.firestore().collection('tasks')
		const unsubscribe = tasksRef
			.where('nameTaskCreatorId', '==', userAuthObj.id)
			.onSnapshot((snapshot) => {
				tasksArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data({serverTimestamps: 'estimate'}),
				}))
				// -- convert the Firestore timestamp value to a simplified date STRING of YYYY-MM-DD
				tasksArray = tasksArray.map((obj) => {
					// -- creates a new Date() from the milliseconds Firestore Timestamp
					let simpleDate = obj.dateCreated.toDate()
					simpleDate = simpleDate.toISOString().slice(0, 10)
					obj.dateCreated = simpleDate
					return obj
				})
				setTasksCreator(tasksArray)
			})
		return () => unsubscribe()
		// eslint-disable-next-line
	}, [])
	// -- loading Docs where current userId match the responsible field
	useEffect(() => {
		let tasksArray = []
		const tasksRef = firebase.firestore().collection('tasks')
		const unsubscribe = tasksRef
			.where('nameResponsibleId', '==', userAuthObj.id)
			.onSnapshot((snapshot) => {
				tasksArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data({serverTimestamps: 'estimate'}),
				}))
				// -- convert the Firestore timestamp value to a simplified date STRING of YYYY-MM-DD
				tasksArray = tasksArray.map((obj) => {
					// -- creates a new Date() from the milliseconds Firestore Timestamp
					let simpleDate = obj.dateCreated.toDate()
					simpleDate = simpleDate.toISOString().slice(0, 10)
					obj.dateCreated = simpleDate
					return obj
				})
				setTasksResponsible(tasksArray)
			})
		return () => unsubscribe()
		// eslint-disable-next-line
	}, [])

	finalList = [...tasksCreator, ...tasksResponsible]
	return finalList
}

/*******************************************************************/
// *** bring useeffect outside as a custom hook inside a custom hook
/*******************************************************************/

// ;[
// 	{
// 		dateCreated,
// 		dateDue,
// 		nameResponsible,
// 		nameResponsibleId,
// 		nameTaskCreator,
// 		nameTaskCreatorId,
// 		priority,
// 		status,
// 		taskDescription,
// 		taskName,
// 	},
// ]
