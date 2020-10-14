import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Container } from 'reactstrap';
import { DataContext } from '../../Context/Data';

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
				<div className="cardsinsidedashboard">
					<Link to="/reports">
						<Card body inverse color="primary" className="mb-3">
							<CardTitle>
								{' '}
								<h3 className="text-center"> {reports.length}</h3>
							</CardTitle>

							<h5 className="text-center">Total Sales</h5>
						</Card>
					</Link>
				</div>
				<div className="cardsinsidedashboard">
					<Link to="/orders">
						<Card body inverse color="info" className="mb-3">
							<CardTitle>
								{' '}
								<h3 className="text-center"> {orders.length}</h3>
							</CardTitle>

							<h5 className="text-center">Active Orders</h5>
						</Card>
					</Link>
				</div>
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
		</Fragment>
	);
};

export default Dashboard;
