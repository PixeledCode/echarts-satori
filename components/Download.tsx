'use client'

import { domToURI, downloadFile } from '@/lib/utils'
import { EChartsOption } from 'echarts-for-react'
import { ChartTemplate } from './ChartTemplate'
import { reactToSVG } from '@/lib/satori'

export default function Download({
	chartOptions,
}: {
	chartOptions: EChartsOption
}) {
	async function handleClick() {
		const data = await fetch('/api/chart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(chartOptions),
		}).then((res) => res.text())

		// convert the svg string to a Data URI
		const imageURI = await domToURI(data, 'svg')

		// create a svg string with the ChartTemplate component
		const template = await reactToSVG(
			<ChartTemplate data={imageURI} title={'Randomly generated Title'} />,
			{
				width: 1270,
			}
		)

		// convert the svg string to a Data URI and download it
		const templateURI = await domToURI(template, 'svg')
		downloadFile(templateURI, 'chart.svg')
	}

	return (
		<div className="flex items-center justify-center">
			<button
				onClick={handleClick}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Download
			</button>
		</div>
	)
}
