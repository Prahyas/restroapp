import React, { Fragment } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

const SettingsDetail = ({ settings, deleteSetting, editRow }) => {
	return (
		<Fragment>
			{settings.length > 0 ? (
				<Fragment>
					{settings.map((setting) => (
						<Card key={setting.uId} className="mb-3 shadow bg-white rounded">
							<CardHeader>
								<div className="flexbetween">
									<div>
										<h4>Details</h4>
									</div>
									<div>
										<Button
											size="sm"
											color="danger"
											onClick={() => deleteSetting(setting.uId)}
										>
											<i className="fas fa-times"></i>
										</Button>
									</div>
								</div>
							</CardHeader>
							<CardBody>
								<div className="flexbetween">
									<span>
										<strong> User Name</strong>
									</span>

									<span>
										{' '}
										<strong> {setting.userName}</strong>
									</span>
								</div>
								<hr />

								<div className="flexbetween">
									<span>
										<strong>Restaurant</strong>
									</span>

									<span>
										{' '}
										<strong> {setting.restaurantName}</strong>
									</span>
								</div>
								<hr />

								<div className="flexbetween">
									<span>
										<strong>Address</strong>
									</span>

									<span>
										{' '}
										<strong> {setting.address}</strong>
									</span>
								</div>
								<hr />

								<div className="flexbetween">
									<span>
										<strong> Contact</strong>
									</span>

									<span>
										{' '}
										<strong> {setting.contactNumber}</strong>
									</span>
								</div>
								<hr />

								<div className="flexbetween">
									<span>
										<strong>Service Charge</strong>
									</span>

									<span>
										{' '}
										<strong> {setting.serviceCharge}</strong>
									</span>
								</div>
								<hr />

								<div className="flexbetween">
									<span>
										<strong>VAT</strong>
									</span>

									<span>
										{' '}
										<strong> {setting.vat}</strong>
									</span>
								</div>
							</CardBody>
							<CardFooter>
								<Button onClick={() => editRow(setting)}>Edit</Button>
							</CardFooter>
						</Card>
					))}
				</Fragment>
			) : (
				<Fragment>
					<Card className="mb-3 shadow bg-white rounded">
						<CardHeader>
							<h4>Details</h4>
						</CardHeader>
						<CardBody>
							<div className="flexbetween">
								<span>
									<strong> User Name</strong>
								</span>

								<span>
									{' '}
									<strong>Not Specified</strong>
								</span>
							</div>
							<hr />

							<div className="flexbetween">
								<span>
									<strong>Restaurant</strong>
								</span>

								<span>
									{' '}
									<strong>Not Specified</strong>
								</span>
							</div>
							<hr />

							<div className="flexbetween">
								<span>
									<strong>Address</strong>
								</span>

								<span>
									{' '}
									<strong> Not Specified</strong>
								</span>
							</div>
							<hr />

							<div className="flexbetween">
								<span>
									<strong> Contact</strong>
								</span>

								<span>
									{' '}
									<strong>Not Specified</strong>
								</span>
							</div>
							<hr />

							<div className="flexbetween">
								<span>
									<strong>Service Charge</strong>
								</span>

								<span>
									{' '}
									<strong> Not Specified</strong>
								</span>
							</div>
							<hr />

							<div className="flexbetween">
								<span>
									<strong>VAT</strong>
								</span>

								<span>
									{' '}
									<strong> Not Specified</strong>
								</span>
							</div>
						</CardBody>
						<CardFooter>
							Please add the details using the add button above
						</CardFooter>
					</Card>
				</Fragment>
			)}
		</Fragment>
	);
};

export default SettingsDetail;
