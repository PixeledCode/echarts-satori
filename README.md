# Echarts Satori

## 1st Part - Setup Project

1. Setup Next.js.
2. Install packages `echarts` and `echarts-for-react`.
3. Create a component for Echarts that accepts an [chartOptions](./components/data.ts) prop.
4. Setup the Echart in the [page](./app/page.tsx) route.

## 2nd Part - Download Chart

1. Create a route handler at `api/chart/route.ts` that returns an SVG string of the chart.
2. Implement a Download component that performs a POST request using the `chartOptions`.
3. Convert the SVG string to either an SVG URI or PNG URI based on the use case.

## 3rd Part - Download Custom Chart

1. Setup Satori:

- Install package `satori` and `intl-segmenter-polyfill`.
- Extend the global `window` interface with `__resource` [typings.d.ts](./typings.d.ts).
- Add the font file using by satori to the `public` directory.

2. Creaye a `reactToSVG` function that converts a React component to an SVG string [satori](./lib/satori.ts)
3. Add a React Template to customize the chart [ChartTemplate](./components/ChartTemplate.tsx).
4. Pass the template to Satori using `reactToSVG` to generate an SVG string of the customized chart.
5. Convert the SVG string to a data URI and download it.

## 4th Part - Improvement

1. Instead of returning an SVG string from route handler, you can return a data URI directly so that we can skip one function call.
