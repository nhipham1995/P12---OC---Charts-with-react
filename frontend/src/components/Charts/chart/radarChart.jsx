import {
	ResponsiveContainer,
	RadarChart as RCRadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
} from "recharts";

const RadarChart = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={280}>
			<RCRadarChart data={data}>
				<Radar
					dataKey="value"
					fill="#FF0101"
					width={10}
					name="Calories brûlées (kCal)"
					type="monotone"
					color={"white"}
					stroke={"none"}
				/>
				<PolarGrid
					gridType="polygon"
					innerRadius={10}
					radialLines="false"
					fill="#FFFFFF"
				/>
				<PolarAngleAxis
					dataKey="kind"
					fontSize={10}
					fontWeight={800}
					tick={{ fill: "#FFFFFF", opacity: 0.9 }}
				/>
			</RCRadarChart>
		</ResponsiveContainer>
	);
};

export default RadarChart;
