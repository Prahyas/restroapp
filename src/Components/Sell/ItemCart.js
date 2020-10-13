import React, { useContext } from 'react';
import { Card, CardHeader, CardBody, Button, Table } from 'reactstrap';

import { DataContext } from '../../Context/Data';

const ItemCart = ({ match, table, tables, setTables }) => {
	const { cartValue } = useContext(DataContext);
	const [cart, setCart] = cartValue;
	const { orderValue } = useContext(DataContext);
	const [orders, setOrders] = orderValue;

	const deleteFromCart = (mId) => {
		setCart(cart.filter((item) => item.mId !== mId));
	};

	let totalPrice = cart.reduce((prev, current) => {
		return prev + +current.totalPrice;
	}, 0);

	let totalQuantity = cart.reduce((prev, current) => {
		return prev + +current.quantity;
	}, 0);

	const addToOrders = () => {
		setOrders([
			...orders,
			{
				oId: Math.floor(Math.random() * 10000),
				tId: +match.params.tId,
				tableName: match.params.tableName,
				date: new Date().toLocaleString(),
				totalPrice,
				totalQuantity,
				cart,
			},
		]);
		setCart([]);
		window.location.assign('/orders');
	};
	const decrease = (mId) => {
		cart.forEach((item) => {
			if (item.mId === mId) {
				item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
				item.totalPrice = item.price * item.quantity;
				setCart([...cart]);
				console.log(cart);
			}
		});

		// alert('decreased');
	};
	const increase = (mId) => {
		cart.forEach((item) => {
			if (item.mId === mId) {
				item.quantity++;
				item.totalPrice = item.price * item.quantity;
				setCart([...cart]);
				console.log(cart);
			}
		});

		// alert('increased');
	};
	const reservedCase = () => {
		setTables(
			tables.map((item) => {
				if (item.tId === table.tId) {
					return {
						...item,
						reserved: !item.reserved,
					};
				}
				return item;
			})
		);
	};

	return (
		<Card className="cardsinsidecurrent mb-3 shadow bg-white rounded">
			<CardHeader>
				{' '}
				<div className="flexbetween">
					<h5 className="classheaderspan">
						Orders for : {match.params.tableName}
					</h5>

					<h5> Ordered Items : {cart.length}</h5>
				</div>
			</CardHeader>
			{cart.length === 0 ? (
				<CardBody>No Orders</CardBody>
			) : (
				<CardBody>
					<Table size="sm" responsive>
						<thead>
							<tr>
								<th>Item Name</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => (
								<tr key={Math.random() * 1000}>
									<td>{item.itemName}</td>
									<td>
										<Button
											size="sm"
											className="mr-2"
											onClick={() => decrease(item.mId)}
										>
											<span>-</span>
										</Button>
										<span>{item.quantity}</span>
										<Button
											size="sm"
											className="ml-2"
											onClick={() => increase(item.mId)}
										>
											<span>+</span>
										</Button>
									</td>
									<td>{item.totalPrice}</td>
									<td>
										<Button
											size="sm"
											color="danger"
											onClick={() => deleteFromCart(item.mId)}
										>
											{' '}
											X
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>

					<Button
						size="sm"
						className="mt-2"
						onClick={() => {
							addToOrders();
							reservedCase();
							// refreshPage();
						}}
					>
						Place
					</Button>
				</CardBody>
			)}
		</Card>
	);
};

export default ItemCart;
