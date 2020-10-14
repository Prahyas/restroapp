import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	CardText,
	Button,
	CardFooter,
} from 'reactstrap';
import Orders from '../Orders/Orders';

toast.configure();

const TableCards = ({
	tId,
	tableName,
	tables,
	setTables,
	toggleTab,
	// selectedTable,
	table,
	setTable,
}) => {
	const deleteTable = (tId) => {
		setTables(tables.filter((table) => table.tId !== tId));
		notify(tId);
		console.log(tables);
	};
	const notify = (tId) => {
		tId === tables.tId
			? toast.warn('Error', {
					autoClose: 2000,
			  })
			: toast.success('Successfully Deleted', {
					autoClose: 2000,
			  });
	};
	const getTable = (table) => {
		setTable({
			tId: table.tId,
			tableName: table.tableName,
			reserved: table.reserved,
		});
	};

	return (
		<Fragment>
			<div key={tId} className="cardsinsidetables">
				<Card className="mb-3 shadow bg-white rounded">
					<CardHeader>
						{' '}
						<div className="flexbetween">
							<div>
								<span>{tableName}</span>
							</div>
							<div>
								<Button size="sm" onClick={() => deleteTable(tId)}>
									<i className="fas fa-times"></i>
								</Button>
							</div>
						</div>
					</CardHeader>
					<CardBody>
						<CardText>
							{' '}
							Status : {table.reserved ? 'Reserved' : 'Open'}
						</CardText>
					</CardBody>
					<CardFooter>
						<Link to={`/sell/${table.tId}/${table.tableName}`}>
							<Button
								size="sm"
								onClick={() => {
									toggleTab('2');
									getTable(table);
									// selectedTable(table);
								}}
								className="btn btn-secondary"
								disabled={table.reserved}
							>
								Place Order
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
		</Fragment>
	);
};

export default TableCards;
