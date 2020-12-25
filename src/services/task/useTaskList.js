import {useEffect, useState} from 'react'
import firebase from 'firebase/app'
import {getCurrentAuthUser} from '../firebaseAuth/getCurrentAuthUser'
/*
A wrapper API that RETURNS a realtime array of task Objects associated with the currently logged on userId by matching either at nameTaskCreator or nameResponsible
						
NOTE refer to the comments in useComments for detail innerworkings of the code below
*/
export const useTaskList = () => {
	const tasksCreator = useUserBelongToTask('nameTaskCreatorId')
	const tasksResponsible = useUserBelongToTask('nameResponsibleId')
	let finalList = [...tasksCreator, ...tasksResponsible]
	return removeDuplicateArr(finalList)
}

// -- Param userTypeFilter is either 'nameTaskCreatorId' or 'nameResponsibleId'
const useUserBelongToTask = (userTypeFilter) => {
	let userAuthObj = getCurrentAuthUser()
	const [tasks, setTasks] = useState([])
	// -- loading Docs where current userId match the creator field
	useEffect(() => {
		let tasksArray = []
		const tasksRef = firebase.firestore().collection('tasks')
		const unsubscribe = tasksRef
			.where(userTypeFilter, '==', userAuthObj.id)
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
					// -- curate what will be returned so we can control future changes better
					return {
						id: obj.id,
						dateCreated: obj.dateCreated,
						dateDue: obj.dateDue,
						priority: obj.priority,
						status: obj.status,
						nameTaskCreator: obj.nameTaskCreator,
						nameTaskCreatorId: obj.nameTaskCreatorId,
						nameResponsible: obj.nameResponsible,
						nameResponsibleId: obj.nameResponsibleId,
						taskName: obj.taskName,
						taskDescription: obj.taskDescription,
					}
				})
				setTasks(tasksArray)
			})
		return () => unsubscribe()
		// eslint-disable-next-line
	}, [])
	return tasks
}

function removeDuplicateArr(arr) {
	const getHash = (item) => item.id
	// to ensure uniqueness of id
	const seenHash = new Set()

	return arr.filter((item) => {
		if (seenHash.has(getHash(item))) {
			return false
		} else {
			seenHash.add(getHash(item))
			return true
		}
	})
}
