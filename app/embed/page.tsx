import Download from "@/components/Download";
import { ECharts } from "@/components/ECharts";
import { chartOptions } from "@/lib/data";
import React from "react";

export default function Home() {
  return (
    <main className="p-2">
      <div className="pt-6 border border-borderDefault">
        <div className="px-6 pb-4 border-b border-borderDefault">
          <h1 className="font-medium">
            No. of households which availed the offer for employment
          </h1>
          <p className="mt-2 text-sm">
            <span className="text-extra-light">from</span> Batadraba Morigaon
            Part, Bhurbandha, Dolongghat morigaon Part, Kapili, Laharighat,
            Mayong, Moirabari
          </p>
          <p className="mt-2 text-sm">
            <span className="text-extra-light">in</span> FY 2023-24
          </p>
        </div>
        <img
          width={844}
          src={"/chart.png"}
          alt="chart"
          className="w-full object-contain"
        />
        <div className="mt-4 py-4 border-t border-borderDefault flex items-center justify-center gap-2">
          <p className="text-sm">
            <span className="text-extra-light">accessed on</span> 29 March, 2024
          </p>
          <div className="w-[1px] h-4 bg-extra-light" />
          <p className="text-sm">
            <span className="text-extra-light">last updated on</span> 29
            December, 2023
          </p>
        </div>
      </div>
    </main>
  );
}
