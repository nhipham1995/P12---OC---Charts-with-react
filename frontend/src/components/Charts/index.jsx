import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	LineChart,
	Line,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PieChart,
	Pie,
	Radar,
	Label,
	Text,
} from "recharts";
import data from "../../data/data";
import {
	CustomTooltip,
	CustomLineTooltip,
} from "./customizeChart/customTooltip";
import { LegendChart, LegendLineChart } from "./customizeChart/LegendChartBar";
import "./charts.css";

const Charts = () => {
	return (
		<div
			className="chart-container"
			style={{ position: "relative", width: "92%" }}
		>
			<div
				style={{
					backgroundColor: "#FBFBFB",
					borderRadius: "5px",
					padding: "40px",
					// width: "80%",
				}}
			>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						data={data.USER_ACTIVITY[0].sessions}
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
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div
				style={{
					marginTop: "50px",
					display: "grid",
					gap: "50px",
					gridTemplateColumns: "repeat(3, 1fr)",
				}}
			>
				<div
					style={{
						backgroundColor: "#FF0000",
						borderRadius: "5px",
						width: "100%",
						paddingTop: "20px",
					}}
				>
					<ResponsiveContainer width="100%" height={260}>
						<LineChart
							data={data.USER_AVERAGE_SESSIONS[0].sessions}
						>
							<Line
								dataKey="sessionLength"
								fill="#FFFFFF"
								width={10}
								name="Calories brûlées (kCal)"
								type="monotone"
								color={"white"}
								stroke={"white"}
							/>
							<XAxis
								dataKey="day"
								stroke={"none"}
								color={"white"}
							/>
							<Tooltip
								content={CustomLineTooltip}
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
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div
					style={{
						backgroundColor: "#282D30",
						borderRadius: "5px",
						width: "100%",
					}}
				>
					<ResponsiveContainer width="100%" height={280}>
						<RadarChart data={data.USER_PERFORMANCE[0].data}>
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
							<PolarAngleAxis dataKey="kind" />
						</RadarChart>
					</ResponsiveContainer>
				</div>
				<div
					style={{
						backgroundColor: "#FBFBFB",
						borderRadius: "5px",

						width: "100%",
						paddingTop: "20px",
					}}
				>
					<h4
						style={{
							fontSize: "1.2rem",
							paddingLeft: "20px",
							margin: 0,
						}}
					>
						Score
					</h4>
					<ResponsiveContainer width="100%" height={250}>
						<PieChart width={250} height={250}>
							<Pie
								data={data.USER_MAIN_DATA}
								startAngle={90}
								endAngle={
									90 + (data.USER_MAIN_DATA[0].id * 360) / 100
								}
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
									value={data.USER_MAIN_DATA[0].id + "%"}
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
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default Charts;
