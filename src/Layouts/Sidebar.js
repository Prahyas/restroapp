import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/Data';
const Sidebar = () => {
	const { toggleValue } = useContext(DataContext);
	const [toggle, setToggle] = toggleValue;
	return (
		<Fragment>
			<div className={toggle ? 'sidebar bg-dark' : 'sidebar toggled bg-dark'}>
				<ul className="list-unstyled">
					<li>
						<Link to="/dashboard" onClick={() => setToggle(!toggle)}>
							<i className="fa fa-fw fa-tachometer-alt"></i> Dashboard
						</Link>
					</li>
					<li>
						<Link to="/menu" onClick={() => setToggle(!toggle)}>
							<i className="fa fa-fw fa-list"></i> Menu
						</Link>
					</li>
					<li>
						<Link to="/sell/select/a/table" onClick={() => setToggle(!toggle)}>
							<i className="fa fa-fw fa-table"></i> Sell
						</Link>
					</li>
					<li>
						<Link to="/orders" onClick={() => setToggle(!toggle)}>
							<i className="fas fa-bell"></i> Orders
						</Link>
					</li>

					{/* <li>
						<a href="#submenu1" data-toggle="collapse">
							<i className="fa fa-fw fa-address-card"></i> Dropdown Link
						</a>
						<ul id="submenu1" className="list-unstyled collapse">
							<li>
								<a href="#">Submenu Item</a>
							</li>
							<li>
								<a href="#">Submenu Item</a>
							</li>
							<li>
								<a href="#">Submenu Item</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#submenu2" data-toggle="collapse">
							<i className="fa fa-fw fa-address-card"></i> Dropdown Link 2
						</a>
						<ul id="submenu2" className="list-unstyled collapse">
							<li>
								<a href="#">Submenu Item</a>
							</li>
							<li>
								<a href="#">Submenu Item</a>
							</li>
							<li>
								<a href="#">Submenu Item</a>
							</li>
						</ul>
					</li> */}
					<li>
						<Link to="/reports" onClick={() => setToggle(!toggle)}>
							<i className="fa fa-file"></i> Reports
						</Link>
					</li>
					<li>
						<Link to="/settings" onClick={() => setToggle(!toggle)}>
							<i class="fas fa-cog"></i> Settings
						</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Sidebar;
