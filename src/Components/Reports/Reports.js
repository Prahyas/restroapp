import React, { useContext, Fragment, useEffect } from 'react';
import { DataContext } from '../../Context/Data';
import { Button, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const Reports = () => {
	const { reportValue } = useContext(DataContext);
	const [reports, setReports] = reportValue;
	const copyReports = [...reports];
	const reversedReports = copyReports.reverse();

	const deleteAll = () => {
		setReports([]);
	};

	useEffect(() => {
		console.log(reports);
	}, [reports]);

	return (
		<Fragment>
			<div className="flexbetween">
				<h3 className="mb-1">Reports</h3>
				<Button onClick={() => deleteAll()}>Delete all</Button>
			</div>
			<hr />
			<Container>
				{reversedReports.length > 0 ? (
					<Table className="fontsizefortables" size="sm" responsive>
						<thead>
							<tr>
								<th>ID</th>
								<th>Date</th>
								<th>Table</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{reversedReports.map((report) => (
								<tr key={report.oId}>
									<td>{report.oId}</td>
									<td>{report.date}</td>

									<td>{report.tableName}</td>
									<td>
										<Link to={`/reports/${report.oId}`}>
											<Button
												size="sm"
												color="warning"
												// onClick={() => editRow(menu)}
												className="mr-2"
											>
												View
											</Button>
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					'No reports'
				)}
			</Container>
		</Fragment>
	);
};

export default Reports;
