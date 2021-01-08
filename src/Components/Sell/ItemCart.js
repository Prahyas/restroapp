import React, { useContext } from 'react';
import { Card, CardHeader, CardBody, Button, Table } from 'reactstrap';

import { DataContext } from '../../Context/Data';

const ItemCart = ({ match, table, tables, setTables }) => {
	const { cartValue } = useContext(DataContext);
	const [cart, setCart] = cartValue;
	const { orderValue } = useContext(DataContext);
	const [orders, setOrders] = orderValue;

	const check = cart.map((x) => {
		return x.quantity;
	});
	console.log(check);
	console.log(cart);

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
		<Card className="mb-3 shadow bg-white rounded">
			<CardHeader>
				{' '}
				<div className="flexbetween">
					<h5 className="classheaderspan">{match.params.tableName}</h5>

					<h5> Ordered Items : {cart.length}</h5>
				</div>
			</CardHeader>
			{cart.length === 0 ? (
				<CardBody>No Orders</CardBody>
			) : (
				<CardBody>
					<Table className="fontsizefortables" size="sm" responsive>
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
											className="itemcarttablebutton mr-2"
											onClick={() => decrease(item.mId)}
										>
											<span>-</span>
										</Button>
										<span>{item.quantity}</span>
										<Button
											size="sm"
											className="itemcarttablebutton ml-2"
											onClick={() => increase(item.mId)}
										>
											<span>+</span>
										</Button>
									</td>
									<td>{item.totalPrice ? item.totalPrice : 0}</td>
									<td>
										<Button
											className="itemcarttablebutton"
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
						disabled={check.includes(0)}
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
