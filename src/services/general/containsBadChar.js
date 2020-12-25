/*
Returns true if a string contains anything other than 0-9, a-z (case insensitive), and whitespace.
This will also accept !(u0021), ?(003F), and .(002E)
*/
export const containsBadChar = (str) => {
	var regex = /[^a-z0-9\s\u0021\u003F\u002E]/gi
	return regex.test(str)
}
