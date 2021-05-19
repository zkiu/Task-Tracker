import {Redirect, Route} from 'react-router-dom'

export const ProtectedRoute = ({isLoading, isAuth, Component, path}) => {
	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!isAuth) {
		return <Redirect to="/login" />
	}

	return <Route component={Component} path={path} />
}
