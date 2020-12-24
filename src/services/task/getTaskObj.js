import firebase from 'firebase/app'

/*
Wrapper for Firebase API to get a task document
Returns an object with all the fields of a task for a given taskId || undefined if no record match taskId (not likely scenario, maybe when connectino is lost?)

Each task in the talk arrray is {dateCreated, dateDue, nameResponsible, nameResponsibleId, nameTaskCreator, nameTaskCreatorId, priority, status, taskDescription, taskName}
*/
export default async function getTaskObj(taskId) {
	const taskRef = firebase.firestore().collection('tasks').doc(taskId)
	const docRef = await taskRef.get()
	const obj = docRef.data()

	// -- convert the Firestore timestamp value to a simplified date STRING of YYYY-MM-DD
	let simpleDate = obj.dateCreated.toDate() // -- creates a new Date() from the milliseconds
	simpleDate = simpleDate.toISOString().slice(0, 10)

	// -- curate what will be returned so we can control future changes better
	return {
		id: taskId,
		dateCreated: simpleDate,
		dateDue: obj.dateDue,
		priority: obj.priority,
		status: obj.status,
		nameResponsible: obj.nameResponsible,
		nameResponsibleId: obj.nameResponsibleId,
		nameTaskCreator: obj.nameTaskCreator,
		nameTaskCreatorId: obj.nameTaskCreatorId,
		taskDescription: obj.taskDescription,
		taskName: obj.taskName,
	}
}
