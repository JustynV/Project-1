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
				interval: 1,
				intervalType: "month",
				valueFormatString: "MMM"
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
			width: '800px',
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
		fetch('WIP')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				var dps = [];
				for (var i = 0; i < data.length; i++) {
					dps.push({
						x: data[i].x,
						y: data[i].y
					});
				}

				this.setState({
					isLoaded: true,
					dataPoints: dps
				})
			});
	}

}

export default App;