import { LegendLineChart } from "../customizeChart/LegendChartBar";
import { CustomLineTooltip } from "../customizeChart/customTooltip";
import {
	XAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	LineChart as RCLineChart,
	Line,
	YAxis,
} from "recharts";
import { CustomizedDot } from "../customizeChart/dot";
import { useRef, useState, useEffect } from "react";

const LineChart = ({ data }) => {
	const chartRef = useRef(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (width !== chartRef?.current?.current?.offsetWidth)
			setWidth(chartRef?.current?.current?.offsetWidth);
	}, [width]);

	return (
		<ResponsiveContainer width="110%" height={260} ref={chartRef}>
			<RCLineChart data={data?.sessions}>
				<XAxis
					dataKey="day"
					strokeWidth={0}
					tick={{
						fill: "#FFFFFF",
						opacity: 0.6,
						fontWeight: 600,
					}}
					axisLine={false}
					padding={{ right: 10, left: -30 }}
				/>

				<YAxis
					hide={true}
					padding={{ top: 6, bottom: 12 }}
					domain={["dataMin-10", "dataMax"]}
				/>

				<Line
					dataKey="sessionLength"
					name="Calories brûlées (kCal)"
					strokeLinecap="round"
					type="natural"
					color={"white"}
					stroke={"white"}
					dot={false}
					connectNulls={true}
					activeDot={<CustomizedDot width={width} />}
				/>
				<Tooltip
					content={<CustomLineTooltip width={width} />}
					cursor={false}
				/>

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
