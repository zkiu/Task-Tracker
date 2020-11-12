import {getUserInfo} from '../user/getUserInfo'
import {mapAsync} from '../general/mapAsync'
import firebase from 'firebase/app'
const db = firebase.firestore()

export const getComments = async (taskId) => {
	const querySnapshot = await db
		.collection('comments')
		.where('taskId', '==', taskId)
		.get()
	const comments = querySnapshot.docs.map((commentDoc) => ({
		...commentDoc.data(),
		id: commentDoc.id,
	}))

	let populatedComments = await mapAsync(comments, async (comment) => {
		const authorObj = await getUserInfo(comment.userId)
		return {
			...comment,
			authorObj,
		}
	})

	return populatedComments
}
