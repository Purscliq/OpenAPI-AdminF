"use client";
import { Column } from "@ant-design/plots";

const DashboardChart = () => {
  const data = [
    {
      type: "mon",
      sales: 38,
    },
    {
      type: "tues",
      sales: 52,
    },
    {
      type: "wed",
      sales: 61,
    },
    {
      type: "thurs",
      sales: 95,
    },
    {
      type: "fri",
      sales: 48,
    },
    {
      type: "sat",
      sales: 38,
    },
    {
      type: "sun",
      sales: 38,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: "#000",
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "ok",
      },
      sales: {
        alias: "ok",
      },
    },

 
  };
  return <Column {...config} />;
};

export default DashboardChart;
