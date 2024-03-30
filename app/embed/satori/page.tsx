"use client";

import { Button } from "@/components/Button";
import { ECharts } from "@/components/ECharts";
import { chartOptions } from "@/lib/data";
import { domToURI, downloadFile } from "@/lib/utils";
import React from "react";
import { reactToSVG } from "@/lib/satori";
import { ChartTemplate } from "@/components/ChartTemplate";

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null);

  async function handleDownload() {
    const data = await fetch("/api/chart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chartOptions),
    }).then((res) => res.text());

    const imageURI = await domToURI(data, "png");
    const template = await reactToSVG(
      <ChartTemplate
        data={imageURI}
        title={"No. of households which availed the offer for employment"}
      />,
      {
        width: 1270,
      }
    );

    const templateURI = await domToURI(template, "png");

    downloadFile(templateURI, "chart.png");
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
