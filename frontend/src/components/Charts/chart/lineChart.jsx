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
		<ResponsiveContainer width="100%" height={260} ref={chartRef}>
			<RCLineChart data={data?.sessions}>
				<Line
					dataKey="sessionLength"
					fill="#FFFFFF"
					name="Calories brûlées (kCal)"
					type="monotone"
					color={"white"}
					stroke={"white"}
					dot={{ r: 0 }}
					activeDot={<CustomizedDot width={width} />}
				/>
				<XAxis
					dataKey="day"
					strokeWidth={0}
					tick={{
						fill: "#FFFFFF",
						opacity: 0.6,
						fontWeight: 600,
					}}
				/>
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
