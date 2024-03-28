"use client";

import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption } from "echarts-for-react";
import { cn } from "@/lib/utils";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

export function ECharts({
  chartOptions,
  className,
}: {
  chartOptions: EChartsOption;
  className?: string;
}) {
  return (
    <div className={cn("h-[500px] w-full", className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={chartOptions}
        notMerge={true}
        lazyUpdate={true}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
