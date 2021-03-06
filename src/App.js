import React, { Fragment } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Layouts/Navbar';
import Sidebar from './Layouts/Sidebar';
import Sell from './Components/Sell/Sell';
import Menu from './Components/Menus/Menu';
import { DataProvider } from './Context/Data';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Reports from './Components/Reports/Reports';
import ReportDetails from './Components/Reports/ReportDetails';
import OrderDetails from './Components/Orders/OrderDetails';
import Settings from './Components/Settings/Settings';
import Login from './Auth/Login';

const App = () => {
	return (
		<Fragment>
			<div id="top"></div>
			<DataProvider>
				<BrowserRouter>
					<Navbar />
					<Switch>
								<Route exact path="/" component={Login} />
					<div className="d-flex align-items-stretch">
						<Sidebar />
						<div className="content p-4">
							<div className="p-3 border border-light shadow p-3 mb-5 bg-white rounded">
								<Route path="/dashboard" component={Dashboard} />
								<Route path="/sell/:tId/:tableName" component={Sell} />
								<Route path="/menu" component={Menu} />
								<Route exact path="/orders" component={Orders} />
								<Route path="/orders/:oId" component={OrderDetails} />
								<Route exact path="/reports" component={Reports} />
								<Route path="/reports/:oId" component={ReportDetails} />
								<Route path="/settings" component={Settings} />
							</div>
						</div>
					</div>

					</Switch>
					<div className="scrollbuttons">
						<a href="#top">
							<i className=" tothetop fa fa-arrow-circle-up"></i>
						</a>
					</div>
				</BrowserRouter>
			</DataProvider>

			{/* <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} /> */}
		</Fragment>
	);
};

export default App;
