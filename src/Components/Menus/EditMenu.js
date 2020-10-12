import React, { useState, Fragment, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditMenu = ({
	updateMenu,
	currentMenu,
	setEditing,
	editing,
	toggleEdit,
}) => {
	const [menu, setMenu] = useState(currentMenu);
	useEffect(() => {
		setMenu(currentMenu);
	}, [updateMenu, currentMenu, setEditing, editing]);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setMenu({ ...menu, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		updateMenu(menu.mId, menu);
		toggleEdit();
	};

	return (
		<div>
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

export default EditMenu;
