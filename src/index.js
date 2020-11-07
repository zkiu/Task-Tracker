import React from 'react'
import ReactDOM from 'react-dom'

import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

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
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
