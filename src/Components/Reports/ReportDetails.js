import React, { Fragment, useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/Data';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { Button, Card, CardBody, CardHeader, Table } from 'reactstrap';

const ReportDetails = ({ match }) => {
	const { reportValue } = useContext(DataContext);
	const [reports] = reportValue;
	const [singleReport, setSingleReport] = useState([]);
	const { settingValue } = useContext(DataContext);
	const [settings] = settingValue;

	const userName = settings.map((x) => {
		return x.userName;
	});
	const restaurantName = settings.map((x) => {
		return x.restaurantName;
	});
	const address = settings.map((x) => {
		return x.address;
	});
	const contactNumber = settings.map((x) => {
		return x.contactNumber;
	});
	const serviceCharge = settings.map((x) => {
		return x.serviceCharge;
	});
	const vat = settings.map((x) => {
		return x.vat;
	});
	const totalPrice = singleReport.map((x) => {
		return x.totalPrice;
	});
	const addedServiceCharge = (totalPrice * serviceCharge) / 100;
	const addedVat = (totalPrice * vat) / 100;
	const grandTotal = (+addedServiceCharge + +serviceCharge + +addedVat).toFixed(
		2
	);

	const getSingleReport = () => {
		if (match.params.oId) {
			const data = reports.filter((item) => item.oId == match.params.oId);
			setSingleReport(data);
		}
	};

	const pdf = () => {
		// html2canvas(document.querySelector('#capture')).then((canvas) => {
		// 	document.body.appendChild(canvas); // if you want see your screenshot in body.
		// 	const imgData = canvas.toDataURL('image/png');
		// 	const pdf = new jsPDF();
		// 	pdf.addImage(imgData, 'PNG', 0, 0);
		// 	pdf.save('download.pdf');
		// });
		html2canvas(document.querySelector('#capture')).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			// const pdf = new jsPDF({
			// 	orientation: 'landscape',
			// });
			const pdf = new jsPDF('p', 'mm', 'a4');
			const imgProps = pdf.getImageProperties(imgData);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
			const filename = singleReport.map((x) => {
				return x.tableName;
			});
			const date = singleReport.map((x) => {
				return x.date;
			});

			pdf.setFontSize(100);
			pdf.save(`${filename}-${date}.pdf`);
		});
	};

	useEffect(() => {
		getSingleReport();
	}, []);

	// const print = () => {
	// 	let content = document.getElementById('printarea');
	// 	let pri = document.getElementById('ifmcontentstoprint').contentWindow;
	// 	pri.document.open();
	// 	pri.document.write(content.innerHTML);
	// 	pri.document.close();
	// 	pri.focus();
	// 	pri.print();
	// };
	const print = () => {
		window.print();
	};

	return (
		<Fragment>
			<div className="flexbetween">
				<h3 className="mb-1">Invoice </h3>
				<div className="downloadprinticons">
					{/* <Button size="sm" className="mr-2" onClick={() => pdf()}>
						<i className="fa fa-download" aria-hidden="true"></i>
					</Button> */}
					<Button size="sm" onClick={() => print()}>
						<i className="mr-2 fas fa-print"></i>
						<span>Print</span>
					</Button>
				</div>
			</div>
			<hr />
			{/* <iframe
				title="reportiframe"
				id="ifmcontentstoprint"
				style={{
					height: '0px',
					width: '0px',
					position: 'absolute',
					display: 'none',
				}}
			></iframe> */}
			<span className="note">
				<strong>
					Note : To download and print via mobile please change the orientation
					to landscape mode and make sure that you check on view as desktop mode
					on the browser.
				</strong>
			</span>

			<div id="printarea" className="mt-4">
				{singleReport.map((report) => (
					<Card
						key={Math.random() * 1000}
						className="mb-3 shadow bg-white rounded"
					>
						<div id="capture">
							<CardHeader className="flexbetween">
								<div>
									<span>
										<strong>
											{' '}
											{settings.length === 0
												? 'Restaurant App'
												: `${restaurantName}`}
										</strong>
									</span>
									<br />
									<span>{address}</span>
									<br />
									<span>{contactNumber}</span>
								</div>
								<div>
									<span>
										<strong>{report.tableName}</strong>
									</span>
									<br />
									<span>
										<strong>{report.date}</strong>
									</span>
									<br />
									<span>
										<strong>Order Id : {report.oId}</strong>
									</span>
									<br />
									<span>
										<strong>
											{' '}
											Cashier: {settings.length === 0 ? 'admin' : `${userName}`}
										</strong>
									</span>
								</div>
							</CardHeader>

							<CardBody>
								<Table className="fontsizefortables" size="sm" responsive>
									<thead>
										<tr>
											<th>Item Name</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Amount</th>
										</tr>
									</thead>
									<tbody>
										{report.cart.map((x) => (
											<tr key={x.mId}>
												<td>{x.itemName}</td>

												<td>{x.price}</td>
												<td>{x.quantity}</td>
												<td>{x.totalPrice}</td>
												<td></td>
											</tr>
										))}
									</tbody>

									<tfoot>
										{singleReport.map((x) => (
											<tr key={x.oId}>
												<td colSpan={3}>
													<strong>Total</strong>
												</td>

												<td>
													<strong>{x.totalPrice}</strong>
												</td>
												<td></td>
											</tr>
										))}
										<tr className={serviceCharge.length > 0 ? '' : 'none'}>
											<td colSpan={3}>Service Charge ({serviceCharge}%)</td>
											<td>{addedServiceCharge}</td>
										</tr>

										<tr className={vat.length > 0 ? '' : 'none'}>
											<td colSpan={3}>Vat ({vat}%)</td>
											<td>{addedVat}</td>
										</tr>
										<tr>
											<td colSpan={3}>
												<strong>Grand Total</strong>{' '}
											</td>
											<td>
												<strong>
													{serviceCharge.length > 0 && vat.length > 0
														? grandTotal
														: totalPrice}
												</strong>
											</td>
										</tr>
									</tfoot>
								</Table>
							</CardBody>
						</div>
					</Card>
				))}
			</div>
		</Fragment>
	);
};

export default ReportDetails;
