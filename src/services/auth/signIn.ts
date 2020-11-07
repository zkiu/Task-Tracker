import firebase from 'firebase/app'

// Wrapper for Firebase api
export const signIn = async (email: string, password: string): Promise<any> => {
	try {
		const result = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
		return {} // -- update the return statement in the future when we know what we explicitely need
	} catch (error) {
		throw new Error('Error signing in')
	}
}
