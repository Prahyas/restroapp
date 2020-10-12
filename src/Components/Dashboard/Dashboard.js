import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Container } from 'reactstrap';
import { DataContext } from '../../Context/Data';
import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
} from 'reactstrap';
const Dashboard = () => {
	const { reportValue } = useContext(DataContext);
	const [reports] = reportValue;
	const { orderValue } = useContext(DataContext);
	const [orders] = orderValue;
	const { menuValue } = useContext(DataContext);
	const [menus] = menuValue;

	return (
		<Fragment>
			<h3 className="mb-1">Dashboard</h3>
			<hr />

			<div className="flexarround">
				<Link to="/reports">
					<div className="cardsinsidedashboard">
						<Card body inverse color="primary" className="mb-3">
							<CardTitle>
								{' '}
								<h3 className="text-center"> {reports.length}</h3>
							</CardTitle>

							<h5 className="text-center">Total Sales</h5>
						</Card>
					</div>
				</Link>
				<Link to="/orders">
					<div className="cardsinsidedashboard">
						<Card body inverse color="info" className="mb-3">
							<CardTitle>
								{' '}
								<h3 className="text-center"> {orders.length}</h3>
							</CardTitle>

							<h5 className="text-center">Active Orders</h5>
						</Card>
					</div>
				</Link>
				<div className="cardsinsidedashboard">
					<Link to="/menu">
						<Card body inverse color="danger" className="mb-3">
							<CardTitle>
								{' '}
								<h3 className="text-center"> {menus.length}</h3>
							</CardTitle>

							<h5 className="text-center">Menu Items</h5>
						</Card>
					</Link>
				</div>
			</div>
			<h3 className="mb-1">Instructions</h3>
			<hr />
			<Container className="mt-3 mb-3">
				<ListGroup>
					<ListGroupItem>
						<ListGroupItemHeading>
							Add Menus via Menu Paage
						</ListGroupItemHeading>
						<ListGroupItemText>
							You can add menu items and its respective price available on your
							restaurant
						</ListGroupItemText>
					</ListGroupItem>
					<ListGroupItem>
						<ListGroupItemHeading>
							Place Order via Sell Page
						</ListGroupItemHeading>
						<ListGroupItemText>
							You can add required number of tables. And to place an order just
							select your table name and click the Pkace order button.
						</ListGroupItemText>
					</ListGroupItem>
					<ListGroupItem>
						<ListGroupItemHeading>Add items to cart</ListGroupItemHeading>
						<ListGroupItemText>
							Add the items for order with respective quantity.
						</ListGroupItemText>
					</ListGroupItem>
					<ListGroupItem>
						<ListGroupItemHeading>
							View active orders via Orders Page
						</ListGroupItemHeading>
						<ListGroupItemText>
							Al the active orders are show here. You can checkout the order
							which places the orders to reports page.
						</ListGroupItemText>
					</ListGroupItem>
					<ListGroupItem>
						<ListGroupItemHeading>
							View all the sales via Reports Page
						</ListGroupItemHeading>
						<ListGroupItemText>
							Detailed reports for every sales.
						</ListGroupItemText>
					</ListGroupItem>
				</ListGroup>
			</Container>
		</Fragment>
	);
};

export default Dashboard;
