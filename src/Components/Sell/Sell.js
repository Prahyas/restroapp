import React, { Fragment, useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/Data';
import TableCards from './TableCards';
import { Button, Container } from 'reactstrap';
import { toast } from 'react-toastify';
import AddTables from './AddTables';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classnames from 'classnames';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Row,
	Col,
} from 'reactstrap';
import MenuCard from './MenuCard';
import ItemCart from './ItemCart';

const Sell = ({ match }) => {
	const { tablesValue } = useContext(DataContext);
	const [tables, setTables] = tablesValue;
	const { tableValue } = useContext(DataContext);
	const [table, setTable] = tableValue;
	const { initialvaluefortable } = useContext(DataContext);

	const [modal, setModal] = useState(false);
	const [activeTab, setActiveTab] = useState('1');

	const toggleTab = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const toggle = () => setModal(!modal);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setTable({ ...table, [name]: value });
	};
	const addTable = (table) => {
		// user.id = Math.floor(Math.random() * 100);
		table.tId = tables.length + 1;
		let filteredTable = tables.filter((x) => x.tableName !== table.tableName);
		setTables([...filteredTable, table]);
		notify();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTable(table);
		setTable(initialvaluefortable);
		toggle();
	};
	const notify = () => {
		toast.success('Successfully Added', {
			autoClose: 2000,
		});
	};
	const fnCollection = (e) => {
		handleSubmit(e);
		toggle();
	};

	return (
		<Fragment>
			<div className="flexbetween">
				<h3 className="mb-1">Sell</h3>

				<Button size="sm" color="primary" onClick={toggle}>
					Add Tables
				</Button>
			</div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle} charCode="x">
					Add a table
				</ModalHeader>
				<ModalBody>
					<Container>
						<br />
						<AddTables
							handleInputChange={handleInputChange}
							handleSubmit={handleSubmit}
							table={table}
						/>
					</Container>
				</ModalBody>
				<ModalFooter>
					<Button size="sm" color="primary" onClick={fnCollection}>
						Add
					</Button>{' '}
					<Button size="sm" color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>

			<hr />
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => {
							toggleTab('1');
						}}
					>
						Order
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => {
							toggleTab('2');
						}}
						disabled
					>
						Current
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Row>
						<Col sm="12">
							{tables.length > 0 ? (
								<div className="flexevenly mt-4">
									{tables.map((table) => (
										<div key={table.tId}>
											<TableCards
												tId={table.tId}
												tableName={table.tableName}
												tables={tables}
												setTables={setTables}
												toggleTab={toggleTab}
												table={table}
												setTable={setTable}
											/>
										</div>
									))}
								</div>
							) : (
								<h3 className="mt-5 text-center">
									Please add new tables using Add tables button from above
								</h3>
							)}
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<div className="flexarround mt-4">
						<MenuCard match={match} />
						<ItemCart
							match={match}
							table={table}
							tables={tables}
							setTables={setTables}
							setTable={setTable}
						/>
					</div>
				</TabPane>
			</TabContent>
		</Fragment>
	);
};

export default Sell;
