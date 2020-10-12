import React from 'react';
import { Table, Button } from 'reactstrap';

const MenuTable = ({ menus, deleteMenu, editRow }) => {
	return (
		<div>
			{menus.length > 0 ? (
				<Table size="sm" responsive>
					<thead>
						<tr>
							<th>ID</th>
							<th>Item Name</th>
							<th>Price</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{menus.map((menu) => (
							<tr key={menu.mId}>
								<td>{menu.mId}</td>
								<td>{menu.itemName}</td>

								<td>{menu.price}</td>
								<td>
									<Button
										size="sm"
										color="warning"
										onClick={() => editRow(menu)}
										className="mr-2"
									>
										Edit
									</Button>
									<Button
										size="sm"
										color="danger"
										onClick={() => deleteMenu(menu.mId)}
									>
										X
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				'Please add the Menu items by clicking the Add Menu button above'
			)}
		</div>
	);
};

export default MenuTable;
