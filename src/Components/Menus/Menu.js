import React, { Fragment, useContext, useState } from 'react';
import { DataContext } from '../../Context/Data';
import AddMenu from './AddMenu';
import EditMenu from './EditMenu';
import { Button, Container, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MenuTable from './MenuTable';

const Menu = () => {
	const { menuValue } = useContext(DataContext);
	const [menus, setMenus] = menuValue;
	const [editing, setEditing] = useState(false);
	const initialFormState = {
		mId: null,
		itemName: '',
		quantity: 0,
		price: '',
		totalPrice: '',
	};
	const [currentMenu, setcurrentMenu] = useState(initialFormState);
	const [addModal, setAddModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	const toggleAdd = () => setAddModal(!addModal);
	const toggleEdit = () => setEditModal(!editModal);

	const addMenu = (menu) => {
		// user.id = Math.floor(Math.random() * 100);
		menu.mId = menus.length + 1;
		setMenus([...menus, menu]);
		toggleAdd();
	};
	const deleteMenu = (mId) => {
		setEditing(false);
		setMenus(menus.filter((menu) => menu.mId !== mId));
	};

	const updateMenu = (mId, updatedMenu) => {
		setEditing(false);
		setMenus(menus.map((menu) => (menu.mId === mId ? updatedMenu : menu)));
	};
	const editRow = (menu) => {
		setEditing(true);
		setcurrentMenu({
			mId: menu.mId,
			itemName: menu.itemName,
			price: menu.price,
			quantity: 0,
			totalPrice: '',
		});
		toggleEdit();
	};
	// useEffect(() => {
	// 	console.log(menus);
	// }, [menus]);
	return (
		<Fragment>
			<div className="flexbetween">
				<h3 className="mb-1">Menu</h3>

				<Button size="sm" color="primary" onClick={toggleAdd}>
					Add Menu
				</Button>
			</div>
			<hr />
			<Modal isOpen={addModal} toggle={toggleAdd}>
				<ModalHeader toggle={toggleAdd} charCode="x">
					Add menu item
				</ModalHeader>
				<ModalBody>
					<Container>
						<AddMenu addMenu={addMenu} toggleadd={toggleAdd} />
					</Container>
				</ModalBody>
			</Modal>
			<Modal isOpen={editModal} toggle={toggleEdit}>
				<ModalHeader toggle={toggleEdit} charCode="x">
					Edit menu
				</ModalHeader>
				<ModalBody>
					<Container>
						<EditMenu
							currentMenu={currentMenu}
							updateMenu={updateMenu}
							editing={editing}
							setEditing={setEditing}
							toggleEdit={toggleEdit}
						/>
					</Container>
				</ModalBody>
			</Modal>

			<Container>
				<MenuTable menus={menus} editRow={editRow} deleteMenu={deleteMenu} />
			</Container>
		</Fragment>
	);
};

export default Menu;
