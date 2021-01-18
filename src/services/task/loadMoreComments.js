import firebase from 'firebase/app'

export async function loadMoreComments(
	taskId,
	queryLimit,
	lastRetrievedDoc = null
) {
	const incrementalQuery = firebase
		.firestore()
		.collection('tasks')
		.doc(taskId)
		.collection('comments')
		.orderBy('timestamp', 'desc')
		.limit(queryLimit)

	let snapshot

	if (lastRetrievedDoc === null) {
		snapshot = await incrementalQuery.get()
	} else {
		snapshot = await incrementalQuery.startAfter(lastRetrievedDoc).get()
	}

	// -- Get the last document in the limited query search. lastComment will be undefined when snapshot.docs.length === 0
	const lastComment = snapshot.docs[snapshot.docs.length - 1]
	const commentList = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
	return {lastComment, commentList}
}
