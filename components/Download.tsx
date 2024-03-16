'use client'

import { domToURI, downloadFile } from '@/lib/utils'
import { EChartsOption } from 'echarts-for-react'
import { ChartTemplate } from './ChartTemplate'
import { reactToSVG } from '@/lib/satori'
import { Button } from './Button'
import React from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './Dialog'
import { Skeleton } from './Skeleton'
import { Input } from './Input'
import { Label } from './Label'
import { DownloadIcon } from 'lucide-react'

export default function Download({
	chartOptions,
}: {
	chartOptions: EChartsOption
}) {
	const [title, setTitle] = React.useState('Some random title')
	const [satoriURI, setSatoriURI] = React.useState({ uri: '', template: '' })
	const [imageURI, setImageURI] = React.useState('')

	async function handleOpen() {
		const data = await fetch('/api/chart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(chartOptions),
		}).then((res) => res.text())

		// convert the svg string to a Data URI
		const imageURI = await domToURI(data, 'svg')
		setImageURI(imageURI)
		// create a svg string with the ChartTemplate component
		await generateSatoriURI({ uri: imageURI, title })
	}

	async function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTitle(e.target.value)
		await generateSatoriURI({ uri: imageURI, title: e.target.value })
	}

	async function generateSatoriURI({
		uri,
		title,
	}: {
		uri: string
		title: string
	}) {
		const template = await reactToSVG(
			<ChartTemplate data={uri} title={title} />,
			{
				width: 1270,
			}
		)
		const templateURI = await domToURI(template, 'svg')
		setSatoriURI({
			uri: templateURI,
			template,
		})
	}

	async function handleDownload(type: 'svg' | 'png') {
		const downloadURI = await domToURI(satoriURI.template, type)
		downloadFile(downloadURI, `chart.${type}`)
	}

	return (
		<div className="flex items-center justify-center">
			<Dialog
				onOpenChange={(e) => {
					e === true && handleOpen()
				}}
			>
				<DialogTrigger asChild>
					<Button>Download</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Download Chart</DialogTitle>
						<DialogDescription>
							Change the title and download the chart as an SVG or PNG file.
						</DialogDescription>
					</DialogHeader>

					<div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
						<Label htmlFor="title">Chart Title</Label>
						<Input
							type="title"
							id="title"
							placeholder="Type out Some title"
							value={title}
							onChange={handleTitleChange}
						/>
					</div>
					{satoriURI.uri.length > 0 ? (
						<img
							height={300}
							src={satoriURI.uri}
							alt="chart"
							className="w-full"
						/>
					) : (
						<Skeleton className="h-[300px]" />
					)}

					<div className="flex flex-wrap gap-2 justify-end">
						<Button onClick={() => handleDownload('svg')} size="sm">
							<DownloadIcon className="mr-2 h-3 w-3" />
							SVG
						</Button>
						<Button onClick={() => handleDownload('png')} size="sm">
							<DownloadIcon className="mr-2 h-3 w-3" />
							PNG
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}
