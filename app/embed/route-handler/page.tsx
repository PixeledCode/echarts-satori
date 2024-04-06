"use client";

import { Button } from "@/components/Button";
import { ECharts } from "@/components/ECharts";
import { chartOptions } from "@/lib/data";
import { domToURI, downloadFile } from "@/lib/utils";
import React from "react";

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null);

  async function handleDownload() {
    const t = performance.now();
    const data = await fetch("/api/chart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chartOptions),
    }).then((res) => res.text());

    const imageURI = await domToURI(data, "png");
    console.log("Time taken Route Handler:", performance.now() - t);
    downloadFile(imageURI, "chart.png");
  }

  return (
    <main className="flex min-h-screen flex-col bg-gra items-center justify-between p-2">
      <ECharts
        ref={ref}
        chartOptions={chartOptions}
        className="w-screen h-[calc(100dvh_-_52px)]"
      />
      <Button onClick={handleDownload}>Download</Button>
    </main>
  );
}
