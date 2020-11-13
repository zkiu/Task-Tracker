import {useParams} from '@reach/router' // -- gets the dynamic segment directly from the url instead of being passed as a prop. useful because we are using the middleware ProtectedRoute

function EditUserPage() {
	return <h1>userId passed from the url: {useParams().userId}</h1>
}

export default EditUserPage
