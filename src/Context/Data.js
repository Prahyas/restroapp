import React, { useState, createContext, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
	const tableData = [];
	const [tables, setTables] = useState(tableData);
	const initialFormState = {
		tId: null,
		tableName: '',
		reserved: false,
	};

	const [table, setTable] = useState(initialFormState);
	const [menus, setMenus] = useState([]);
	const [toggle, setToggle] = useState(true);
	const [cart, setCart] = useState([]);
	const [orders, setOrders] = useState([]);
	const [reports, setReports] = useState([]);
	const [settings, setSettings] = useState([]);

	useEffect(() => {
		getLocal();
	}, []);
	useEffect(() => {
		saveLocal();
	}, [tables, menus, orders, reports, settings]);

	const saveLocal = () => {
		localStorage.setItem('tables', JSON.stringify(tables));
		localStorage.setItem('menus', JSON.stringify(menus));
		// localStorage.setItem('cart', JSON.stringify(cart));
		localStorage.setItem('orders', JSON.stringify(orders));
		localStorage.setItem('reports', JSON.stringify(reports));
		localStorage.setItem('settings', JSON.stringify(settings));
	};
	const getLocal = () => {
		if (localStorage.getItem('tables') === null) {
			localStorage.setItem('tables', JSON.stringify([]));
		} else {
			let localDb = JSON.parse(localStorage.getItem('tables'));
			setTables(localDb);
		}
		if (localStorage.getItem('menus') === null) {
			localStorage.setItem('menus', JSON.stringify([]));
		} else {
			let localDb = JSON.parse(localStorage.getItem('menus'));
			setMenus(localDb);
		}
		// if (localStorage.getItem('cart') === null) {
		// 	localStorage.setItem('cart', JSON.stringify([]));
		// } else {
		// 	let localDb = JSON.parse(localStorage.getItem('cart'));
		// 	setCart(localDb);
		// }
		if (localStorage.getItem('orders') === null) {
			localStorage.setItem('orders', JSON.stringify([]));
		} else {
			let localDb = JSON.parse(localStorage.getItem('orders'));
			setOrders(localDb);
		}
		if (localStorage.getItem('reports') === null) {
			localStorage.setItem('reports', JSON.stringify([]));
		} else {
			let localDb = JSON.parse(localStorage.getItem('reports'));
			setReports(localDb);
		}
		if (localStorage.getItem('settings') === null) {
			localStorage.setItem('settings', JSON.stringify([]));
		} else {
			let localDb = JSON.parse(localStorage.getItem('settings'));
			setSettings(localDb);
		}
	};

	return (
		<DataContext.Provider
			value={{
				toggleValue: [toggle, setToggle],
				tablesValue: [tables, setTables],
				tableValue: [table, setTable],
				menuValue: [menus, setMenus],
				initialvaluefortable: initialFormState,
				cartValue: [cart, setCart],
				orderValue: [orders, setOrders],
				reportValue: [reports, setReports],
				settingValue: [settings, setSettings],
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};
