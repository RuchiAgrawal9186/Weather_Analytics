import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeatherChart = ({ data, type }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey={type === "day" ? "date" : "time"} />
          <YAxis />
          <Tooltip />
          <Line dataKey="temp" name="Temp" />
          <Line dataKey="rain" name="Rain" />
          <Line dataKey="wind" name="Wind" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
