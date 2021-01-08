import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { DataContext } from '../Context/Data';
const Navbar = () => {
	const { toggleValue } = useContext(DataContext);
	const [toggle, setToggle] = toggleValue;
	const { settingValue } = useContext(DataContext);
	const [settings] = settingValue;

	const restaurantName = settings.map((x) => {
		return x.restaurantName;
	});
	const userName = settings.map((x) => {
		return x.userName;
	});
	return (
		<Fragment>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Button
					size="sm"
					className="sidebar-toggle text-light mr-3"
					onClick={() => setToggle(!toggle)}
				>
					<i className="fa fa-bars"></i>
				</Button>

				<Link to="/sell/:tId/:tableName" className="navbar-brand appname">
					<i className="fas fa-hamburger"></i>{' '}
					<span>
						{settings.length === 0 ? 'Restro App' : `${restaurantName}`}
					</span>
				</Link>

				<div className="navbar-collapse collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<Link
								to="/"
								className="nav-link dropdown-toggle"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
							>
								<i className="fa fa-user"></i>{' '}
								<span className="mr-2 ml-2">
									{settings.length === 0 ? 'admin' : `${userName}`}
								</span>
							</Link>
							<div
								className="dropdown-menu dropdown-menu-right"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<Link to="/settings" className="dropdown-item">
									Manage
								</Link>
								<Link to="/" className="dropdown-item">
									Log Out
								</Link>
							</div>
						</li>
					</ul>
				</div>
			
			</nav>
		</Fragment>
	);
};

export default Navbar;
