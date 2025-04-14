'use client';

import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	constructor() {
		super();
		this.state = { dataPoints: [], isLoaded: false };
	}

	render() {
		const options = {
			theme: 'dark1', // "light2", "dark1", "dark2"
			animationEnabled: true,
			title: {
				text: 'Netflix Stock Price',
			},
			axisX: {
				interval: 3,
				intervalType: "month",
				titleFontSize: 10,
				labelAngle: -30,
			},
			axisY: {
				prefix: "$",
				title: "Price (in USD)"
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				yValueFormatString: "$##0.00",
				xValueType: "dateTime",
				dataPoints: this.state.dataPoints
			}
			]
		};
		const containerProps = {
			width: '1200px',
			height: '600px',

		};
		return (
			<div>
				<CanvasJSChart
					options={options}
					containerProps={containerProps}
					onRef={(ref) => (this.chart = ref)}
				/>
			</div>
		);
	}

	componentDidMount() {
		fetch('http://localhost:5050/stocks')
			.then((response) => {
				return response.json();
			})
            .then((data) => {
				const dps = data.map((item) => ({
					x: new Date(item.Datetimes), 
					y: [
					  parseFloat(item["Open "]), 
					  parseFloat(item.High),
					  parseFloat(item.Low),
					  parseFloat(item.Close),
					]
				  }));
			  
				  this.setState({
					isLoaded: true,
					dataPoints: dps
				  });
            });
	}

}

export default App;