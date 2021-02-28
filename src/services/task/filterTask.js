import {containsBadChar} from '../general/containsBadChar'
import {extractSearchKeywords} from '../general/extractSearchKeywords'

export const filterTask = (taskList, searchCriteria, orderBy) => {
	let orderedList = []

	switch (orderBy) {
		case 'recent':
			orderedList = orderByRecent(taskList)
			break
		case 'dueDate':
			orderedList = orderByDate(taskList)
			break
		case 'priority':
			orderedList = orderByPriority(taskList)
			break
		default:
			break
	}
	return searchByKeyword(orderedList, searchCriteria)
}

// -- order an Array of objects by the most recently added first (dateCreated)
function orderByRecent(taskList) {
	let sortArray = taskList.sort((a, b) => {
		// -- sort in ascending order (earlier to later dates)
		return Date.parse(b.dateCreated) - Date.parse(a.dateCreated)
		/*
		NOTE: I am using Date.parse to be quick and dirty. Risk: There are still many differences in how different hosts parse date strings.
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
		
		The Firestore timestamp dateCreated property in the var taskList was converted to a simple date STRING. As such, ordering tasks created on the same day will not exact.
		*/
	})
	return sortArray
}
// -- order an Array of objects by the dateDue key
function orderByDate(taskList) {
	let sortArray = taskList.sort((a, b) => {
		// -- sort in ascending order (earlier to later dates)
		return Date.parse(a.dateDue) - Date.parse(b.dateDue)
		// -- sort in descending order (later to earlier dates)
		// return Date.parse(b.dateDue) - Date.parse(a.dateDue)
	})
	return sortArray
}
// -- order an Array of objects by the priority key
function orderByPriority(taskList) {
	let p1Array = taskList.filter((elt) => {
		return elt.priority === 'p1'
	})
	let p2Array = taskList.filter((elt) => {
		return elt.priority === 'p2'
	})
	// -- then order by due date closest 1st
	return [...orderByDate(p2Array), ...orderByDate(p1Array)]
}
// -- order an Array of objects keywords
function searchByKeyword(taskList, searchCriteria = '') {
	let searchTermArray = []
	let results = []
	// -- just return the whole list if there are no search criteria
	if (searchCriteria.length === 0) return taskList
	// -- make sure that the search string is sanatized
	if (containsBadChar(searchCriteria)) {
		// *** implement a toast/modal for this error notification
		console.error('This field only accepts letters, digits, and spaces')
	} else {
		searchTermArray = extractSearchKeywords(searchCriteria)

		results = taskList.filter((task) => {
			/*
			for each keyword in the searchTermArray search in task.taskName and task.taskDescription to see if there is a match
			stop seach and return false if any keyword is not found in both taskName and taskDescription
			*/
			for (const keyword of searchTermArray) {
				if (
					!task.taskName.toLowerCase().includes(keyword) &&
					!task.taskDescription.toLowerCase().includes(keyword)
				)
					return false
			}
			return true
		})
	}
	return results
}
