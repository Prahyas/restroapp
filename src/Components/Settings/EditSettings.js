import React, { useState, Fragment, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditSettings = ({
	updateSetting,
	currentSetting,
	setEditing,
	editing,
	toggleEdit,
}) => {
	const [setting, setSetting] = useState(currentSetting);
	useEffect(() => {
		setSetting(currentSetting);
	}, [updateSetting, currentSetting, setEditing, editing]);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSetting({ ...setting, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		updateSetting(setting.uId, setting);
		toggleEdit();
	};

	return (
		<div>
			<Fragment>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label for="examplePassword">User Name</Label>
						<Input
							type="input"
							name="userName"
							value={setting.userName}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Restaurant Name</Label>
						<Input
							type="input"
							name="restaurantName"
							value={setting.restaurantName}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Address</Label>
						<Input
							type="input"
							name="address"
							value={setting.address}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Contact</Label>
						<Input
							type="input"
							name="contactNumber"
							value={setting.contactNumber}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Service Charge</Label>
						<Input
							type="input"
							name="serviceCharge"
							value={setting.serviceCharge}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">VAT</Label>
						<Input
							type="input"
							name="vat"
							value={setting.vat}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<Button size="sm" color="primary">
						Update
					</Button>
					<Button
						size="sm"
						onClick={() => {
							setEditing(false);
							toggleEdit();
						}}
						className="Button muted-button"
					>
						Cancel
					</Button>
				</Form>
			</Fragment>
		</div>
	);
};

export default EditSettings;
