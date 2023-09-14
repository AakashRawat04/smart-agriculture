export const GRAPH_OPTIONS = {
	title: {
		text: "Historic Data",
		color: "#eeeeee",
	},
	// backgroundColor : '#333333'

	// color:['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab','#91ca8c'],
	labelColor: "#eeeeee",
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "cross",
			label: {
				backgroundColor: "#6a7985",
			},
		},
	},
	legend: {
		data: ["Moisture Level", "Humidity", "Temperature"],
	},
	toolbox: {
		feature: {
			saveAsImage: {},
		},
	},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true,
	},
	xAxis: [
		{
			type: "category",
			boundaryGap: false,
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		},
	],
	yAxis: [
		{
			type: "value",
		},
	],
	series: [
		{
			name: "Moisture Level",
			type: "line",
			stack: "Total",
			areaStyle: {},
			emphasis: {
				focus: "series",
			},
			data: [30, 45, 87, 59, 57, 69, 90],
		},
		{
			name: "Humidity",
			type: "line",
			stack: "Total",
			areaStyle: {},
			emphasis: {
				focus: "series",
			},
			data: [45, 87, 69, 42, 57, 40, 70],
		},

		{
			name: "Temperature",
			type: "line",
			stack: "Total",
			areaStyle: {},
			emphasis: {
				focus: "series",
			},
			data: [57, 43, 50, 30, 45, 37, 49],
		},
	],
};
