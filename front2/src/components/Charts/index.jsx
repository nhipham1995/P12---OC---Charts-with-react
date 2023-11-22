import BarChart from "./chart/barChat";
import LineChart from "./chart/lineChart";
import RadarChart from "./chart/radarChart";
import PieChart from "./chart/pieChart";

import "../../styles/components/charts.css";

const Charts = ({ activityData, avgSession, performance, user }) => {
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
				}}
			>
				<BarChart data={activityData} />
			</div>
			<div
				className="multi-charts"
				// style={{
				// 	marginTop: "50px",
				// 	display: "grid",
				// 	gap: "50px",
				// 	gridTemplateColumns: "repeat(3, 1fr)",
				// }}
			>
				<div
					style={{
						backgroundColor: "#FF0000",
						borderRadius: "5px",
						width: "100%",
						paddingTop: "20px",
						maxWidth: "600px",
					}}
				>
					<LineChart data={avgSession} />
				</div>
				<div
					style={{
						backgroundColor: "#282D30",
						borderRadius: "5px",
						width: "100%",
						maxWidth: "600px",
					}}
				>
					<RadarChart data={performance} />
				</div>
				<div
					style={{
						backgroundColor: "#FBFBFB",
						borderRadius: "5px",

						width: "100%",
						paddingTop: "20px",
						maxWidth: "600px",
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
					<PieChart data={user} />
				</div>
			</div>
		</div>
	);
};

export default Charts;
