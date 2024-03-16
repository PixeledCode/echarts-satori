import Download from '@/components/Download'
import { ECharts } from '@/components/ECharts'
import { chartOptions } from '@/components/data'
import React from 'react'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ECharts chartOptions={chartOptions} />
			<Download chartOptions={chartOptions} />
		</main>
	)
}
