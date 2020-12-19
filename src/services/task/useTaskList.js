import {useEffect, useState} from 'react'
import firebase from 'firebase/app'
import {getCurrentAuthUser} from '../firebaseAuth/getCurrentAuthUser'

/*
Returns a realtime array of task Objects for the given the currently logged on userId, either they are the creator or assigned as the one responsible

ex: [{dateCreated, dateDue, nameResponsible, nameResponsibleId, nameTaskCreator, nameTaskCreatorId, priority, status, taskDescription, taskName}]

-- NOTE refer to the comments in useComments for detail innerworkings of the code below
*/
export const useTaskList = () => {
	let userAuthObj = getCurrentAuthUser()
	const [tasksCreator, setTasksCreator] = useState([])
	const [tasksResponsible, setTasksResponsible] = useState([])

	// -- leading Doc where current userId match the creator field
	useEffect(() => {
		const tasksRef = firebase.firestore().collection('tasks')
		const unsubscribe = tasksRef
			.where('nameTaskCreatorId', '==', userAuthObj.id)
			.onSnapshot((snapshot) => {
				const tasksArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data({serverTimestamps: 'estimate'}),
				}))
				setTasksCreator([...tasksCreator, ...tasksArray])
			})

		return () => unsubscribe()
		// eslint-disable-next-line
	}, [])
	// -- leading Doc where current userId match the responsible field
	useEffect(() => {
		const tasksRef = firebase.firestore().collection('tasks')
		const unsubscribe = tasksRef
			.where('nameResponsibleId', '==', userAuthObj.id)
			.onSnapshot((snapshot) => {
				const tasksArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data({serverTimestamps: 'estimate'}),
				}))
				setTasksResponsible([...tasksResponsible, ...tasksArray])
			})

		return () => unsubscribe()
		// eslint-disable-next-line
	}, [])

	return [...tasksCreator, ...tasksResponsible]
}
