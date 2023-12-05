import {
	ResponsiveContainer,
	PieChart as RCPieChart,
	Pie,
	Label,
	Text,
} from "recharts";

const PieChart = ({ data }) => {
	const score = data?.score;
	const newData = [
		{
			value: parseFloat(score) * 100,
			fill: "#E60000",
		},
		{
			value: 100 - parseFloat(score) * 100,
			fill: "#FFFFFF",
		},
	];

	return (
		<ResponsiveContainer width="100%" height={250}>
			<RCPieChart width={250} height={250}>
				<Pie
					data={newData}
					startAngle={90}
					endAngle={360 + 92}
					innerRadius={100}
					outerRadius={115}
					dataKey="value"
					cornerRadius={10}
					cx="50%"
					cy="50%"
				>
					<Label
						// customize the position of label
						content={(props) => {
							const {
								viewBox: { cx, cy },
							} = props;
							const positioningProps = {
								x: cx,
								y: cy - 20,
								textAnchor: "middle",
								verticalAnchor: "middle",
							};

							return (
								<Text
									fill="#282D30"
									fontSize={45}
									fontWeight={700}
									{...positioningProps}
								>
									{newData?.[0].value + "%"}
								</Text>
							);
						}}
					/>

					<Label
						// customize the position of darker background
						content={(props) => {
							const {
								viewBox: { cx, cy },
							} = props;
							const positioningProps = {
								x: cx,
								y: cy + 25,
								textAnchor: "middle",
								verticalAnchor: "middle",
							};

							return (
								<Text
									fill="#74798C"
									fontSize={20}
									fontWeight={600}
									{...positioningProps}
								>
									{"de votre objectif"}
								</Text>
							);
						}}
					/>
				</Pie>
			</RCPieChart>
		</ResponsiveContainer>
	);
};

export default PieChart;
