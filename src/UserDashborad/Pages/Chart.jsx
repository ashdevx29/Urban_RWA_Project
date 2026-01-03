import React from 'react'
import ReactApexChart from "react-apexcharts";
export const Chart = () => {
    const referralBarData = [
    { month: "Jan", value: 220 },
    { month: "Feb", value: 240 },
    { month: "Mar", value: 350 },
    { month: "Apr", value: 410 },
    { month: "May", value: 230 },
    { month: "Jun", value: 160 },
    { month: "Jul", value: 340 },
    { month: "Aug", value: 360 },
    { month: "Sep", value: 260 },
    { month: "Oct", value: 220 },
    { month: "Nov", value: 410 },
    { month: "Dec", value: 500 },
  ];

  const referralAreaData = [
    { month: "Jan", value: 450 },
    { month: "Feb", value: 280 },
    { month: "Mar", value: 220 },
    { month: "Apr", value: 390 },
    { month: "May", value: 420 },
    { month: "Jun", value: 480 },
    { month: "Jul", value: 330 },
    { month: "Aug", value: 310 },
    { month: "Sep", value: 200 },
    { month: "Oct", value: 190 },
    { month: "Nov", value: 420 },
    { month: "Dec", value: 460 },
  ];


// ================= BAR CHART =================
const referralBarChart = {
  series: [
    {
      name: "Referrals",
      data: referralBarData.map(d => d.value),
    },
  ],
  options: {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },

    plotOptions: {
      bar: {
        borderRadius: 6,
        borderRadiusApplication: "around", // 👈 top + bottom dono
        columnWidth: "50%",
      },
    },

    // 👇 Gradient color for bars
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal", // 270deg feel ke liye
        shadeIntensity: 0,
        gradientToColors: ["#2659F2"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [2.27, 95.35],
      },
    },

    colors: ["#001D76"],

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `$${val}`,
      },
    },

    grid: {
      strokeDashArray: 6,
    },

    xaxis: {
      categories: referralBarData.map(d => d.month),
      labels: {
        style: {
          colors: "#000000",
        },
      },
    },

    yaxis: {
      min: 100,
      max: 500,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#000000",
        },
      },
    },
  },
};



// ================= AREA CHART =================
const referralAreaChart = {
  series: [
    {
      name: "Income",
      data: referralAreaData.map(d => d.value),
    },
  ],
  options: {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0,
      },
    },
    colors: ["#2563EB"],
    dataLabels: { enabled: false },
    grid: {
      strokeDashArray: 6,
    },
   
    xaxis: {
      categories: referralAreaData.map(d => d.month),
      labels: { style: { colors: "#000000" } },
    },
    yaxis: {
      min: 100,
      max: 500,
      tickAmount: 4,
    },
  },
};

  return (

    <>
    
    
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
    
      {/* LEFT : REFERRALS BAR */}
      <div className=" rounded-xl">
        <div className="neoCard p-5 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[1.4rem] font-bold text-[#000]">
              Referrals : 0
            </h3>
    
          <div
      className="flex gap-3 text-sm text-[#000000] rounded-lg px-3 py-2"
      style={{
        boxShadow: `
          6px 6px 11.4px 0px #0000002E,
          2px 2px 8.5px -5px #3E3E3EE5 inset,
          -2px -2px 4px 0px #00000040 inset
        `,
      }}
    >
      <span>1M</span>
      <span>6M</span>
      <span>1Y</span>
    
      <select className="bg-transparent outline-none">
        <option>2025</option>
      </select>
    </div>
          </div>
    
          <ReactApexChart
            options={referralBarChart.options}
            series={referralBarChart.series}
            type="bar"
            height={240}
          />
        </div>
      </div>
    
      {/* RIGHT : REFERRALS INCOME */}
      <div className=" rounded-xl">
        <div className="neoCard p-5 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-[#000]">
              Referrals Income &nbsp; 0.00 URBN
            </h3>
    
            <div
      className="flex gap-3 text-sm text-[#000000] rounded-lg px-3 py-2"
      style={{
        boxShadow: `
          6px 6px 11.4px 0px #0000002E,
          2px 2px 8.5px -5px #3E3E3EE5 inset,
          -2px -2px 4px 0px #00000040 inset
        `,
      }}
    >
      <span>1M</span>
      <span>6M</span>
      <span>1Y</span>
    
      <select className="bg-transparent outline-none">
        <option>2025</option>
      </select>
    </div>
    
          </div>
    
          <ReactApexChart
            options={referralAreaChart.options}
            series={referralAreaChart.series}
            type="area"
            height={240}
          />
        </div>
      </div>
    
    </div>
    </>
  )
}
