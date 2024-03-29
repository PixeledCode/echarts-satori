export const chartOptions = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    containLabel: true,
    left: "5%",
  },

  yAxis: [
    {
      type: "category",
      data: [
        "Batadraba Morigaon Part",
        "Bhurbandha",
        "Dolongghat Morigaon Part",
        "Kapili",
        "Laharighat",
        "Mayong",
        "Moirabari",
      ],
    },
  ],
  color: "rgb(55,162,218)",
  backgroundColor: "white",

  xAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      data: [801, 6615, 1246, 3886, 11146, 13879, 5859],
      type: "bar",
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        fontWeight: "bold",
      },
    },
  ],
};
