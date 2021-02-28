/*
Returns true if a string contains anything other than 0-9, a-z (case insensitive), and whitespace.
This will also accept the following special char -> !?.$%&+-
*/
export const containsBadChar = (str) => {
	var regex = /[^a-z0-9\s\u0021\u003F\u002E\u0024\u0025\u0026\u002B\u002D]/gi
	return regex.test(str)
}
