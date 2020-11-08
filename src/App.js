import React, {useState, useEffect} from 'react'
import {navigate, Router} from '@reach/router'
import firebase from './FirebaseConfig'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import Login from './pages/LoginPage'

import Register from './pages/RegisterPage'
import TaskListPage from './pages/TaskListPage'
import TaskFormPage from './pages/TaskFormPage'

function App() {
	return (
		<div>
			<Navigation />

			{/* <Router> */}
			<HomePage path="/" />
			<Login path="/login" />
			<Register path="/register" />
			<TaskListPage path="/tasklist" />
			<TaskFormPage path="/taskform" />
			{/* </Router> */}
		</div>
	)
}

export default App
