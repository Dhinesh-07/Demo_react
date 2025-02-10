import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getChartData } from "../services/chartServices";
import "../styles/WardOrderChart.css";

const COLORS = ["#FFEB3B", "#2196F3", "#FF0000"]; // Yellow, Blue, Red

const WardOrderChart = ({ count }) => {
  const data = getChartData(count);

  return (
    <div className="ward-order-chart">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={68}
            outerRadius={90}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            cornerRadius={5}
          >
            {data.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[data.indexOf(entry)]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-label">{count}</div>
    </div>
  );
};

export default WardOrderChart;
