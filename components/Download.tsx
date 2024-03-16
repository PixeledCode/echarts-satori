'use client'

import { domToURI, downloadFile } from '@/lib/utils'
import { EChartsOption } from 'echarts-for-react'

export default function Download({ options }: { options: EChartsOption }) {
	async function handleClick() {
		const data = await fetch('/api/chart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(options),
		}).then((res) => res.text())

		// convert the svg string to a Data URI and download it
		const imageURI = await domToURI(data, 'svg')
		downloadFile(imageURI, 'chart.svg')
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
