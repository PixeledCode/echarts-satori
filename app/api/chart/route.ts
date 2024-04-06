let echarts = require("echarts");

export async function POST(request: Request) {
  // get the chart options
  const data = await request.json();

  // add animation false, otherwise the chart will look empty
  const chartOptions = { ...data, animation: false };

  // create a new chart instance
  let chart = echarts.init(null, null, {
    renderer: "svg",
    ssr: true, // enable server side rendering
    width: 1270,
    height: 720,
  });
  chart.setOption(chartOptions);

  // convert the chart to an svg string
  const svgString = chart.renderToSVGString();

  // convert the svg string to base64 to use as Data URI
  // const dataUriBar = `data:image/svg+xml;base64,${btoa(svgString)}`

  return new Response(svgString, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
