import React, { useState, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddSettings = ({ addSetting }) => {
	const initialFormState = {
		uId: null,
		userName: '',
		restaurantName: '',
		address: '',
		contactNumber: '',
		serviceCharge: '',
		vat: '',
	};
	const [setting, setSetting] = useState(initialFormState);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSetting({ ...setting, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addSetting(setting);
		setSetting(initialFormState);
	};

	return (
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
					Submit
				</Button>
			</Form>
		</Fragment>
	);
};

export default AddSettings;
