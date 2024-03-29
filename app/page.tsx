import Download from "@/components/Download";
import { ECharts } from "@/components/ECharts";
import { chartOptions } from "@/lib/data";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        ECharts + Satori
      </h1>
      <ECharts chartOptions={chartOptions} />
      <Download chartOptions={chartOptions} />
    </main>
  );
}
