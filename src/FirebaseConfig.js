import firebase from 'firebase/app'
// import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyC4AqLcu0oB49R0374JDOr-CQJOIsfS8Yw',
	authDomain: 'task-tracker-84155.firebaseapp.com',
	databaseURL: 'https://task-tracker-84155.firebaseio.com',
	projectId: 'task-tracker-84155',
	storageBucket: 'task-tracker-84155.appspot.com',
	messagingSenderId: '383114024098',
	appId: '1:383114024098:web:08712aa4c5d195057333fb',
	measurementId: 'G-C9X0PD11Q6',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

// export const provider = new firebase.auth.GoogleAuthProvider()
// export const auth = firebase.auth()

export default firebase
