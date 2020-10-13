import React, { Fragment, useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/Data';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { Button, Card, CardBody, CardHeader, Table } from 'reactstrap';

const OrderDetails = ({ match }) => {
	const { orderValue } = useContext(DataContext);
	const [orders, setOrders] = orderValue;
	const [singleOrder, setSingleOrder] = useState([]);

	const getSingleOrder = () => {
		if (match.params.oId) {
			const data = orders.filter((item) => item.oId == match.params.oId);
			setSingleOrder(data);
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
			const filename = singleOrder.map((x) => {
				return x.tableName;
			});
			const date = singleOrder.map((x) => {
				return x.date;
			});

			pdf.setFontSize(100);
			pdf.save(`${filename}-${date}.pdf`);
		});
	};

	useEffect(() => {
		getSingleOrder();
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
					<Button size="sm" className="mr-2" onClick={() => pdf()}>
						<i className="fa fa-download" aria-hidden="true"></i>
					</Button>
					<Button size="sm" onClick={() => print()}>
						<i className="fas fa-print"></i>
					</Button>
				</div>
			</div>
			<hr />
			{/* <iframe
				title="orderiframe"
				id="ifmcontentstoprint"
				style={{
					height: '0px',
					width: '0px',
					position: 'absolute',
					display: 'none',
				}}
			></iframe> */}
			<span>
				<strong>
					Note : To download and print via mobile please change the orientation
					to landscape mode and make sure that you check on view as desktop mode
					on the browser.
				</strong>
			</span>

			<div id="printarea" className="mt-4">
				{singleOrder.map((order) => (
					<Card
						key={Math.random() * 1000}
						className="mb-3 shadow bg-white rounded"
					>
						<div id="capture">
							<CardHeader className="flexbetween">
								<div>
									<span>
										<strong>Restaurant Management System</strong>
									</span>
									<br />
									<span>Chabahil,Kathmandu</span>
									<br />
									<span>987654321</span>
								</div>
								<div>
									<span>
										<strong>{order.tableName}</strong>
									</span>
									<br />
									<span>
										<strong>{order.date}</strong>
									</span>
									<br />
								</div>
							</CardHeader>

							<CardBody>
								<Table size="sm" responsive>
									<thead>
										<tr>
											<th>Item Name</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Amount</th>
										</tr>
									</thead>
									<tbody>
										{order.cart.map((x) => (
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
										{singleOrder.map((x) => (
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

export default OrderDetails;
