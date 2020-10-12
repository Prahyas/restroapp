import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Button, Table } from 'reactstrap';
import { DataContext } from '../../Context/Data';
const MenuCard = () => {
	const { menuValue } = useContext(DataContext);
	const [menus] = menuValue;
	const { cartValue } = useContext(DataContext);
	const [cart, setCart] = cartValue;

	const addToCart = (mId) => {
		const check = cart.every((item) => {
			return item.mId !== mId;
		});
		if (check) {
			const data = menus.filter((menu) => {
				return menu.mId === mId;
			});

			setCart([...cart, ...data]);
		} else {
			alert('Already added');
		}
	};

	return (
		<div>
			<Card className="cardsinsidecurrent mb-3 shadow bg-white rounded">
				<CardHeader>
					{' '}
					<h5 className="classheaderspan">Select Items</h5>
				</CardHeader>
				<CardBody>
					{menus.length > 0 ? (
						<Table size="sm" responsive>
							<thead>
								<tr>
									<th>Item Name</th>
									<th>Price</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{menus.map((menu) => (
									<tr key={menu.mId}>
										<td>{menu.itemName}</td>

										<td>{menu.price}</td>
										<td>
											<Button
												size="sm"
												color="primary"
												onClick={() => addToCart(menu.mId)}
											>
												{' '}
												+
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					) : (
						<Fragment>
							<div>Please add the Menus first</div>
							<div>Go to</div>

							<div>
								<Link to="/menu">
									<Button size="sm" color="primary">
										Menu page
									</Button>
								</Link>
							</div>
						</Fragment>
					)}

					{/* <Button className="btn btn-secondary">Add to Order List</Button> */}
				</CardBody>
			</Card>
		</div>
	);
};

export default MenuCard;
