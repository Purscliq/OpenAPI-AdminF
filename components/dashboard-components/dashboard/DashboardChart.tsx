"use client";

import React from "react";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const EarningData = [
  { name: "1.00", uv: 4000, pv: 2400, amt: 2400 },
  { name: "2.00", uv: 3000, pv: 1398, amt: 2210 },
  { name: "3.00", uv: 2000, pv: 9800, amt: 2290 },
  { name: "4.00", uv: 2780, pv: 3908, amt: 2000 },
  { name: "5.00", uv: 1890, pv: 4800, amt: 2181 },
  { name: "6.00", uv: 2390, pv: 3800, amt: 2500 },
  { name: "7.00", uv: 3490, pv: 4300, amt: 2100 },
  { name: "8.00", uv: 3490, pv: 4300, amt: 2100 },
  { name: "9.00", uv: 3490, pv: 4300, amt: 2100 },
  { name: "10.00", uv: 3490, pv: 4300, amt: 2100 },
  { name: "11.00", uv: 3490, pv: 4300, amt: 2100 },
  { name: "12.00", uv: 3490, pv: 4300, amt: 2100 },
];

const EarningsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={EarningData}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" stackId="a" fill="#010101" />
        <Bar dataKey="uv" stackId="a" fill="#0062FF1A" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const TransactionData = [
  { name: "Page A", uv: 3500, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 2800, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
];

const TransactionsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={400}
        data={TransactionData}
        margin={{
          top: 10,
          right: 15,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#0062FF" fill="#72A6FA" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export { EarningsChart, TransactionsChart };
