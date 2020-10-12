import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<Fragment>
			<div className="loginbody">
				<div className="containersmall">
					<h3 className="mb-5 text-center title">
						Restaurant Management System
					</h3>
					<h3 className="mb-4 text-center">Login</h3>

					<Form>
						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="Enter your email"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
								type="password"
								name="password"
								id="examplePassword"
								placeholder="enter your password"
							/>
						</FormGroup>
					</Form>
					<Link to="/dashboard">
						<Button size="sm" color="secondary">
							Login
						</Button>
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
