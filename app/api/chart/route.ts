let echarts = require('echarts')

export async function POST(request: Request) {
	// get the chart options
	const data = await request.json()

	// add animation false, otherwise the chart will look empty
	const chartOptions = { ...data, animation: false }

	// create a new chart instance
	const chart = echarts.init(null, null, {
		renderer: 'svg',
		ssr: true, // enable server side rendering
		width: 1270,
		height: 720,
	})
	chart.setOption(chartOptions)

	// convert the chart to an svg string
	const svg = chart.renderToSVGString()

	// convert the svg string to base64 to use as Data URL
	const base64 = btoa(svg)

	const dataUrlBar = `data:image/svg+xml;base64,${base64}`

	return Response.json(dataUrlBar)
}
