import React from 'react'

// ** make this into a floating modal/toast

function ErrorForm(prop) {
	return (
		<div className="col-12 alert alert-danger px-3">{prop.errorMessage}</div>
	)
}

export default ErrorForm
