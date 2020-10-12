import React, { Fragment } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddTables = ({ table, handleInputChange, handleSubmit }) => {
	return (
		<Fragment>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="exampleEmail">Table Name</Label>
					<Input
						type="input"
						name="tableName"
						value={table.tableName}
						onChange={handleInputChange}
					/>
				</FormGroup>
			</Form>
		</Fragment>
	);
};

export default AddTables;
