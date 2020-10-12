import React, { Fragment } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Layouts/Navbar';
import Sidebar from './Layouts/Sidebar';
import Sell from './Components/Sell/Sell';
import Menu from './Components/Menus/Menu';
import { DataProvider } from './Context/Data';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Reports from './Components/Reports/Reports';
import ReportDetails from './Components/Reports/ReportDetails';
import OrderDetails from './Components/Orders/OrderDetails';

const App = () => {
	return (
		<Fragment>
			<div id="top"></div>
			<DataProvider>
				<Router>
					<Navbar />
					<div className="d-flex align-items-stretch">
						<Sidebar />
						<div className="content p-4">
							<div className="p-3 border border-light shadow p-3 mb-5 bg-white rounded">
								<Route exact path="/" component={Dashboard} />
								<Route path="/dashboard" component={Dashboard} />
								<Route path="/sell/:tId/:tableName" component={Sell} />
								<Route path="/menu" component={Menu} />
								<Route exact path="/orders" component={Orders} />
								<Route path="/orders/:oId" component={OrderDetails} />
								<Route exact path="/reports" component={Reports} />
								<Route path="/reports/:oId" component={ReportDetails} />
							</div>
						</div>
					</div>

					<div className="scrollbuttons">
						<a href="#top">
							<i className="fa fa-arrow-circle-up"></i>
						</a>
					</div>
				</Router>
			</DataProvider>

			{/* <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} /> */}
		</Fragment>
	);
};

export default App;
