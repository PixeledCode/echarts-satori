'use client'

import { domToURI, downloadFile } from '@/lib/utils'
import { EChartsOption } from 'echarts-for-react'
import { ChartTemplate } from './ChartTemplate'
import { reactToSVG } from '@/lib/satori'
import { Button } from './Button'
import React from 'react'

export default function Download({
	chartOptions,
}: {
	chartOptions: EChartsOption
}) {
	const [loading, setLoading] = React.useState(false)

	async function handleClick() {
		setLoading(true)
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
				width: 1920,
			}
		)

		// convert the svg string to a Data URI and download it
		const templateURI = await domToURI(template, 'svg')
		downloadFile(templateURI, 'chart.svg')
		setLoading(false)
	}

	return (
		<div className="flex items-center justify-center">
			<Button loading={loading} onClick={handleClick}>
				Download
			</Button>
		</div>
	)
}
