import createFBUserWithEmailandPass from './createFBUserWithEmailandPass'
import createUserDoc from './createUserDoc'

// -- takes in one parametre (an object). This object is deconstructed into the following variables
export default async function registerUser({name, email, jobLevel, password}) {
	try {
		// -- create new userCredentials in Firebase.Auth() and return the id
		const id = await createFBUserWithEmailandPass(email, password)
		await createUserDoc(id, name, email, jobLevel)

		alert('Registration completed sucessfully')
		// *** forward to modal/toast a success message
	} catch (error) {
		console.log(error.message)
		// *** forward to modal/toast error message
	}
}
