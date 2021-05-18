export default function TestMessage({changeLoginUser}) {
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-lg-4">
					<div className="card bg-light">
						<div className="card-body">
							<h4 className="font-weight-light mb-3">
								Select a guess account to test the site:
							</h4>
							<div className="list-group list-group-horizontal">
								<button
									className="list-group-item list-group-item-action"
									onClick={() => {
										changeLoginUser({
											email: 'test1@1.com',
											password: '123123',
											errorMessage: null,
										})
									}}
								>
									<p className="fw-bold">Job Level: General Employee</p>
									Email: test1@1.com <br /> Password: 123123
								</button>
								<button
									className="list-group-item list-group-item-action"
									onClick={() => {
										changeLoginUser({
											email: 'test2@2.com',
											password: '123123',
											errorMessage: null,
										})
									}}
								>
									<p className="fw-bold">Job Level: Supervisor</p>
									Email: test2@2.com <br /> Password: 123123
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
