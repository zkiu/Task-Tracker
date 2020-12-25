/*
Returns true if a string contains anything other than 0-9, a-z (case insensitive), and whitespace
*/
export const containsBadChar = (str) => {
	var regex = /[^a-z0-9\s]/gi
	return regex.test(str)
}
