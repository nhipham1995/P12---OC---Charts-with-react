import { LegendLineChart } from "../customizeChart/LegendChartBar";
import { CustomLineTooltip } from "../customizeChart/customTooltip";
import {
	XAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	LineChart as RCLineChart,
	Line,
} from "recharts";
const LineChart = ({ data }) => {
	console.log(data);
	return (
		<ResponsiveContainer width="100%" height={260}>
			<RCLineChart data={data?.sessions}>
				<Line
					dataKey="sessionLength"
					fill="#FFFFFF"
					width={10}
					name="Calories brûlées (kCal)"
					type="monotone"
					color={"white"}
					stroke={"white"}
				/>
				<XAxis dataKey="day" stroke={"none"} color={"white"} />
				<Tooltip content={CustomLineTooltip} cursor={false} />
				<Legend
					content={LegendLineChart}
					iconSize={15}
					verticalAlign="top"
					wrapperStyle={{
						top: -20,
					}}
				/>
			</RCLineChart>
		</ResponsiveContainer>
	);
};

export default LineChart;
