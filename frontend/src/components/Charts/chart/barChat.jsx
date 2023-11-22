import {
	BarChart as RCBarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";
import { LegendChart } from "../customizeChart/LegendChartBar";
import { CustomTooltip } from "../customizeChart/customTooltip";

const BarChart = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<RCBarChart
				data={data?.sessions}
				margin={{
					top: 5,
					bottom: 5,
				}}
				barSize={10}
				barGap={5}
				name={"Activité quotidienne"}
			>
				<XAxis dataKey="day" />
				<YAxis orientation="right" />
				<Tooltip content={CustomTooltip} />
				<Legend
					iconSize={15}
					verticalAlign="top"
					wrapperStyle={{
						top: -20,
					}}
					content={LegendChart}
				/>
				<Bar
					radius={[10, 10, 0, 0]}
					dataKey="kilogram"
					fill="#282D30"
					width={0.2}
					name="Poids (kg)"
				/>
				<Bar
					radius={[10, 10, 0, 0]}
					dataKey="calories"
					fill="#E60000"
					width={0.01}
					name="Calories brûlées (kCal)"
				/>
			</RCBarChart>
		</ResponsiveContainer>
	);
};

export default BarChart;
