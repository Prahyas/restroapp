import React, { useState, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddMenu = ({ addMenu, toggleadd }) => {
	const initialFormState = {
		mId: null,
		itemName: '',
		quantity: 0,
		price: '',
		totalPrice: '',
	};
	const [menu, setMenu] = useState(initialFormState);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setMenu({ ...menu, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addMenu(menu);
		setMenu(initialFormState);
	};

	return (
		<Fragment>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="exampleEmail">Item name</Label>
					<Input
						type="input"
						name="itemName"
						value={menu.itemName}
						onChange={handleInputChange}
					/>
				</FormGroup>

				<FormGroup>
					<Label for="examplePassword">Price</Label>
					<Input
						type="input"
						name="price"
						value={menu.price}
						onChange={handleInputChange}
					/>
				</FormGroup>
				<Button
					size="sm"
					// disabled={!user.lastName && !user.firstName && !user.address}
					color="primary"
				>
					Submit
				</Button>
				<Button
					size="sm"
					onClick={() => {
						toggleadd();
					}}
				>
					Cancel
				</Button>
			</Form>
		</Fragment>
	);
};

export default AddMenu;
