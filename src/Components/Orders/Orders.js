import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Container,
	Table,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import { DataContext } from '../../Context/Data';
const Orders = () => {
	const { orderValue } = useContext(DataContext);
	const [orders, setOrders] = orderValue;
	const { reportValue } = useContext(DataContext);
	const [reports, setReports] = reportValue;
	const { tableValue } = useContext(DataContext);
	const [table, setTable] = tableValue;
	const { tablesValue } = useContext(DataContext);
	const [tables, setTables] = tablesValue;
	const { initialvaluefortable } = useContext(DataContext);
	const [getOrder, setGetOrder] = useState({
		oId: null,
	});

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const addToReport = (oId) => {
		const data = orders.filter((order) => {
			return order.oId === oId;
		});
		setReports([...reports, ...data]);
	};

	const deleteOrders = () => {
		setTimeout(() => {
			setOrders(orders.filter((order) => order.oId !== getOrder.oId));
		}, 1000);
	};
	const deleteAll = () => {
		setOrders([]);
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

	const getTable = (order) => {
		setTable({
			tId: order.tId,
			tableName: order.tableName,
			reserved: order.reserved,
		});
	};
	const getSingleOrder = (order) => {
		setGetOrder({
			oId: order.oId,
		});
	};
	useEffect(() => {
		console.log(table);
	}, [table]);
	useEffect(() => {
		console.log(orders);
	}, [orders]);
	useEffect(() => {
		console.log(getOrder);
	}, [getOrder]);
	return (
		<Fragment>
			<div className="flexbetween">
				<h3 className="mb-1">Orders</h3>
				<Button onClick={() => deleteAll()}>Delete all</Button>
			</div>
			<hr />
			<Container>
				{orders.length > 0 ? (
					<div className="flexevenly mt-4">
						{orders.map((order) => (
							<Card
								key={Math.random() * 1000}
								className="ordercard mb-3 shadow bg-white rounded"
							>
								<CardHeader className="flexbetween">
									<span>
										Id : {order.oId} - {order.tableName}
									</span>
									<span>{order.date}</span>
								</CardHeader>
								<CardBody>
									<Table responsive>
										<thead>
											<tr>
												<th>Item Name</th>
												<th>Quantity</th>
												{/* <th>Price</th> */}
											</tr>
										</thead>
										<tbody>
											{order.cart.map((order) => (
												<tr key={order.mId}>
													<td>{order.itemName}</td>

													<td>{order.quantity}</td>
												</tr>
											))}
										</tbody>
									</Table>
								</CardBody>
								<CardFooter>
									<Button
										size="sm"
										className="btn btn-secondary"
										onClick={() => {
											getTable(order);
											getSingleOrder(order);
											toggle();
										}}
									>
										Checkout
									</Button>
								</CardFooter>
								<Modal isOpen={modal} toggle={toggle}>
									<ModalHeader toggle={toggle} charCode="x">
										Confirmation
									</ModalHeader>
									<ModalBody>
										<Container>Are you sure you want to checkout</Container>
									</ModalBody>
									<ModalFooter>
										<Link to={`/orders/${getOrder.oId}`}>
											<Button
												size="sm"
												color="primary"
												onClick={() => {
													reservedCase();
													addToReport(getOrder.oId);
													toggle();
													setTable(initialvaluefortable);
													deleteOrders();
												}}
											>
												Yes
											</Button>
										</Link>
										<Button
											size="sm"
											color="secondary"
											onClick={() => toggle()}
										>
											Cancel
										</Button>
									</ModalFooter>
								</Modal>
							</Card>
						))}
					</div>
				) : (
					<Fragment>
						No orders yet
						<div className="mt-2">
							All checkout orders are added to reports from here.
						</div>
					</Fragment>
				)}
			</Container>
		</Fragment>
	);
};

export default Orders;
