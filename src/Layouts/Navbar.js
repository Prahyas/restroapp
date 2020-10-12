import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { DataContext } from '../Context/Data';
const Navbar = () => {
	const { toggleValue } = useContext(DataContext);
	const [toggle, setToggle] = toggleValue;
	return (
		<Fragment>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Button
					className="sidebar-toggle text-light mr-3"
					onClick={() => setToggle(!toggle)}
				>
					<i className="fa fa-bars"></i>
				</Button>

				<Link to="/sell/tables" className="navbar-brand appname">
					<i className="fas fa-hamburger"></i> <span>Restro App</span>
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
								<i className="fa fa-user"></i> Admin
							</Link>
							<div
								className="dropdown-menu dropdown-menu-right"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<Link to="/" className="dropdown-item">
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
