"use client";

import { Button } from "@/components/Button";
import { ECharts } from "@/components/ECharts";
import { chartOptions } from "@/lib/data";
import { downloadFile } from "@/lib/utils";
import { domToPng } from "modern-screenshot";
import React from "react";

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null);

  function handleDownload() {
    const t = performance.now();
    const element = ref.current;
    if (!element) return;

    domToPng(element, {
      backgroundColor: "white",
    }).then((uri) => {
      downloadFile(uri, "chart.png");
      console.log("Time taken Screenshot:", performance.now() - t);
    });
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <ECharts
        ref={ref}
        chartOptions={chartOptions}
        className="w-screen h-[calc(100dvh_-_52px)]"
      />
      <Button onClick={handleDownload}>Download</Button>
    </main>
  );
}
