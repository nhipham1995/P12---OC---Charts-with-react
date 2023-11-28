import {
	BarChart as RCBarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	Legend,
	CartesianGrid,
} from "recharts";
import { LegendChart } from "../customizeChart/LegendChartBar";
import { CustomTooltip } from "../customizeChart/customTooltip";
import { UserData } from "../../../models";

const BarChart = ({ data }) => {
	const userdata = new UserData(data);
	const newData = userdata.userCount();
	console.log("newwww", newData);
	return (
		<ResponsiveContainer width="100%" height={300}>
			<RCBarChart
				data={newData}
				margin={{
					top: 5,
					bottom: 5,
				}}
				barSize={10}
				barGap={5}
				name={"Activité quotidienne"}
			>
				<CartesianGrid
					strokeDasharray="5 5"
					vertical={false}
					opacity={0.5}
				/>
				<XAxis
					dataKey="index"
					padding={"no-gap"}
					tickLine={false}
					dx={0}
					strokeWidth={1.3}
					tick={{ fill: "#9B9EAC", fontWeight: 600 }}
				/>
				<YAxis
					dataKey={"calories"}
					orientation="left"
					yAxisId="left"
					hide={true}
				/>
				<YAxis
					dataKey={"kilogram"}
					orientation="right"
					domain={["dataMin-1", "dataMax+2"]}
					axisLine={false}
					tick={{ fill: "#9B9EAC", fontWeight: 600 }}

					// max={500}
				/>

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
					yAxisId="left"
					name="Calories brûlées (kCal)"
				/>
			</RCBarChart>
		</ResponsiveContainer>
	);
};

export default BarChart;
