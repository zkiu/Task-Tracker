import React from 'react'

function ErrorForm(prop) {
	return (
		<div className="col-12 alert alert-danger px-3">{prop.errorMessage}</div>
	)
}

export default ErrorForm
