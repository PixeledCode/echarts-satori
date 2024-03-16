'use client'

import React from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import {
	TitleComponent,
	ToolboxComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts-for-react'

echarts.use([
	TitleComponent,
	ToolboxComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	LineChart,
	CanvasRenderer,
	UniversalTransition,
])

export function ECharts({ options }: { options: EChartsOption }) {
	return (
		<div className="h-[500px] w-full">
			<ReactEChartsCore
				echarts={echarts}
				option={options}
				notMerge={true}
				lazyUpdate={true}
				style={{ height: '100%', width: '100%' }}
			/>
		</div>
	)
}
