import Download from "@/components/Download";
import { ECharts } from "@/components/ECharts";
import { chartOptions } from "@/lib/data";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <ECharts
        chartOptions={chartOptions}
        className="w-screen h-[calc(100dvh_-_52px)]"
      />
      <Download chartOptions={chartOptions} />
    </main>
  );
}
