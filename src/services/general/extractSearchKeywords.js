/* 
Takes a string and return an array with the space and uppercase addressed */
export const extractSearchKeywords = (str) => {
	let cleanStr = str.trim().toLowerCase()
	// break multi keywords into array at each space
	let searchTermArray = cleanStr.split(' ')
	// -- remove empty string elements from the array (happens when the user puts multiple spaces between search terms)
	searchTermArray = searchTermArray.filter((item) => {
		if (item.length > 0) {
			return true
		}
		return false
	})
	return searchTermArray
}
