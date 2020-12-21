// [{dateCreated, dateDue, nameResponsible, nameResponsibleId, nameTaskCreator, nameTaskCreatorId, priority, status, taskDescription, taskName}]

export const filterTask = (taskList, searchCriteria, orderBy) => {
	let orderedList = []
	if (orderBy === 'date') {
		orderedList = orderByDate(taskList)
	}
	if (orderBy === 'priority') {
		orderedList = orderByPriority(taskList)
	}
	// -- just return the whole list, once sorted, if there are no search criteria
	if (searchCriteria.length === 0) return orderedList

	return orderedList
}

// -- order an Array of objects by the dateDue key
function orderByDate(taskList) {
	let sortArray = taskList.sort((a, b) => {
		// -- sort in ascending order (earlier to later dates)
		return Date.parse(a.dateDue) - Date.parse(b.dateDue)
		// -- sort in descending order (later to earlier dates)
		// return Date.parse(b.dateDue) - Date.parse(a.dateDue)
		/*
		NOTE: I am using Date.parse to be quick and dirty. Risk: There are still many differences in how different hosts parse date strings.
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
		*/
	})
	return sortArray
}
// -- order an Array of objects by the priority key
function orderByPriority(taskList) {
	console.log('ordered by priority')
	/*******************************************************************/
	// *** insert sort code
	/*******************************************************************/
	return taskList
}
