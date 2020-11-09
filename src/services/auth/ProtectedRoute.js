import React from 'react'
import {navigate} from '@reach/router'

export const ProtectedRoute = ({isLoading, user, component}) => {
	if (isLoading) {
		return <div>Loading...</div>
	}

	// -- ** insert feature: floating modal to remind of logging 1st ** -- //

	if (!user) {
		navigate('/login')
	}

	return component
}
