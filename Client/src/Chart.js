import React from "react";

import Chart from "react-apexcharts";

const ApexChart = () => {
  const options = {
  //   chart: {
  //   zoom: {
  //     enabled: false,
  //   },
  // },
    
    xaxis: {
      labels: {
        rotate: -45,
        rotateAlways: true,
        trim: false,
      hideOverlappingLabels: false,
      },
      categories: ["Fraction", "Addition","Substraction", "2 Words", "Vocab", "T&M Game", "Mumbai MT", "Lemon", "Stamping","Family M&ID","Musium"]
    }
  };
  const series = [
    {
      name: "series-1",
      data: [4, 7, 3, 9, 6, 2, 7, 3,6,9,4]
    },
    // {
    //   name: "series-2",
    //   data: [23, 12, 54, 61, 32, 56, 81, 19]
    // },
    // {
    //   name: "series-3",
    //   data: [24, 20, 5, 75, 42, 79, 72, 35]
    // }
  ];

  return <Chart options={options} series={series} type="area" width={600} height={420} />;
};
export default ApexChart;
