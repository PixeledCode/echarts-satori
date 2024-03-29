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
import { BarChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import type { EChartsOption } from "echarts-for-react";
import { cn } from "@/lib/utils";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  SVGRenderer,
  UniversalTransition,
]);

export const ECharts = React.forwardRef(function ECharts(
  {
    chartOptions,
    className,
  }: {
    chartOptions: EChartsOption;
    className?: string;
  },
  ref?: React.Ref<HTMLDivElement>
) {
  return (
    <div className={cn("h-[500px] w-full", className)} ref={ref}>
      <ReactEChartsCore
        echarts={echarts}
        option={chartOptions}
        notMerge={true}
        lazyUpdate={true}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
});
