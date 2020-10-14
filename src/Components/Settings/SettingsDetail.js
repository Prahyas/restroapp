import React from 'react';
import { Table, Button } from 'reactstrap';

const SettingsDetail = ({ settings, deleteSetting, editRow }) => {
	return (
		<div>
			{settings.length > 0 ? (
				<Table className="fontsizefortables" size="sm" responsive>
					<thead>
						<tr>
							<th>User name</th>
							<th>Restaurant name</th>
							<th>Address</th>
							<th>Contact</th>
							<th>Service Charge</th>
							<th>VAT</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{settings.map((setting) => (
							<tr key={setting.uId}>
								<td>{setting.userName}</td>
								<td>{setting.restaurantName}</td>
								<td>{setting.address}</td>
								<td>{setting.contactNumber}</td>
								<td>{setting.serviceCharge}</td>
								<td>{setting.vat}</td>
								<td>
									<Button
										size="sm"
										color="warning"
										onClick={() => editRow(setting)}
										className="mr-2"
									>
										Edit
									</Button>
									<Button
										size="sm"
										color="danger"
										onClick={() => deleteSetting(setting.uId)}
									>
										X
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				'Please add the information about your restaurant with the add button above'
			)}
		</div>
	);
};

export default SettingsDetail;
