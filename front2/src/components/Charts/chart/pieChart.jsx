import {
	ResponsiveContainer,
	PieChart as RCPieChart,
	Pie,
	Label,
	Text,
} from "recharts";

const PieChart = ({ data }) => {
	const dataWrapper = [data];

	return (
		<ResponsiveContainer width="100%" height={250}>
			<RCPieChart width={250} height={250}>
				<Pie
					data={dataWrapper}
					startAngle={90}
					endAngle={90 + (data?.todayScore * 100 * 360) / 100}
					innerRadius={100}
					outerRadius={115}
					fill="#F60000"
					dataKey="id"
					cornerRadius={10}
					cx="50%"
					cy="50%"
					backgroundColor="white"
				>
					<Label
						value={data?.todayScore * 100 + "%"}
						position="center"
						fontSize={30}
						color={"black"}
						fontWeight={800}
					/>

					<Label
						// this part allows to customize the position of label
						content={(props) => {
							const {
								viewBox: { cx, cy },
							} = props;
							const positioningProps = {
								x: cx,
								y: cy + 30,
								textAnchor: "middle",
								verticalAnchor: "middle",
							};

							return (
								<Text
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
