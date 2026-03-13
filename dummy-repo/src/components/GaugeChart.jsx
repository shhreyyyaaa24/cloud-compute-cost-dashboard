import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

function getColor(value) {
  if (value < 40) return "#22c55e"; // green
  if (value < 70) return "#facc15"; // yellow
  return "#ef4444"; // red
}

function GaugeChart({ value }) {
  const data = [{ name: "usage", value }];

  return (
    <div className="gauge-container">
      <RadialBarChart
        width={180}
        height={110}
        cx={90}
        cy={90}
        innerRadius={50}
        outerRadius={80}
        barSize={14}
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          clockWise
          dataKey="value"
          fill={getColor(value)}
        />
      </RadialBarChart>
      <div className="gauge-value" style={{ color: getColor(value) }}>
        {value}
      </div>
    </div>
  );
}

export default GaugeChart;
