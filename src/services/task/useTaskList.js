import {useEffect, useState} from 'react'
import firebase from 'firebase/app'
import {getCurrentAuthUser} from '../firebaseAuth/getCurrentAuthUser'

// -- returns a realtime array of task for the given userId, either they are the creator or assigned as the one responsible
// -- NOTE refer to the comments in useComments for detail innerworkings of the code below
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
