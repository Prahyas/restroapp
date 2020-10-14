import React, { Fragment, useContext, useState } from 'react';
import { DataContext } from '../../Context/Data';
import { Button, Container, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddSettings from './AddSettings';
import EditSettings from './EditSettings';
import SettingsDetail from './SettingsDetail';
import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
} from 'reactstrap';

const Settings = () => {
	const { settingValue } = useContext(DataContext);
	const [settings, setSettings] = settingValue;
	const [editing, setEditing] = useState(false);
	const initialFormState = {
		uId: null,
		userName: '',
		restaurantName: '',
		address: '',
		contactNumber: '',
		serviceCharge: '',
		vat: '',
	};
	const [currentSetting, setcurrentSetting] = useState(initialFormState);
	const [addModal, setAddModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	const toggleAdd = () => setAddModal(!addModal);
	const toggleEdit = () => setEditModal(!editModal);

	const addSetting = (setting) => {
		setting.uId = 1;
		setSettings([...settings, setting]);
		toggleAdd();
	};
	const deleteSetting = (uId) => {
		setEditing(false);
		setSettings(settings.filter((setting) => setting.uId !== uId));
	};

	const updateSetting = (uId, updatedSetting) => {
		setEditing(false);
		setSettings(
			settings.map((setting) =>
				setting.uId === uId ? updatedSetting : setting
			)
		);
	};
	const editRow = (setting) => {
		setEditing(true);
		setcurrentSetting({
			uId: setting.uId,
			userName: setting.userName,
			restaurantName: setting.restaurantName,
			address: setting.address,
			contactNumber: setting.contactNumber,
			serviceCharge: setting.serviceCharge,
			vat: setting.vat,
		});
		toggleEdit();
	};

	return (
		<Fragment>
			<div className="flexbetween">
				<h3 className="mb-1">Settings</h3>

				<Button
					disabled={settings.length === 1}
					size="sm"
					color="primary"
					onClick={toggleAdd}
				>
					Add Information
				</Button>
			</div>
			<hr />
			<Modal isOpen={addModal} toggle={toggleAdd}>
				<ModalHeader toggle={toggleAdd} charCode="x">
					Add Information
				</ModalHeader>
				<ModalBody>
					<Container>
						<AddSettings addSetting={addSetting} toggleadd={toggleAdd} />
					</Container>
				</ModalBody>
			</Modal>
			<Modal isOpen={editModal} toggle={toggleEdit}>
				<ModalHeader toggle={toggleEdit} charCode="x">
					Edit Information
				</ModalHeader>
				<ModalBody>
					<Container>
						<EditSettings
							currentSetting={currentSetting}
							updateSetting={updateSetting}
							editing={editing}
							setEditing={setEditing}
							toggleEdit={toggleEdit}
						/>
					</Container>
				</ModalBody>
			</Modal>

			<Container>
				<SettingsDetail
					settings={settings}
					editRow={editRow}
					deleteSetting={deleteSetting}
				/>
			</Container>
			<hr />
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

export default Settings;
