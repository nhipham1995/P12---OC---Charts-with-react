import Navigation from "../components/navigation";
import Sport from "../components/sport";
import Result from "../components/result";
import Charts from "../components/Charts";

import { useDataContext } from "../services/datas";

import "../styles/pages/home.css";
import { DataKey } from "../models";

const sports = [
	{ src: "/assets/meditation.png", des: "Mediation" },
	{ src: "/assets/swim.png", des: "Swimming" },
	{ src: "/assets/bicycle.png", des: "Bicycle" },
	{ src: "/assets/gym.png", des: "Gym" },
];

const Home = () => {
	const { userData, activityData, avgSession, performance } =
		useDataContext();
	const test = new DataKey(userData?.keyData);
	const energies = test.result();

	return (
		<div>
			<Navigation />
			<div className="main">
				<div className="left-navigation">
					<div className="sports-wrapper">
						{sports.map((sport, idx) => (
							<Sport key={idx} src={sport.src} des={sport.des} />
						))}
					</div>
					<p>Copyright, SportSee 2020</p>
				</div>
				<div className="main-cover">
					<div className="text">
						<h2>
							Bonjour{" "}
							<span>{userData?.userInfos?.firstName}</span>
						</h2>
						<p>
							Félicitations ! Vous avez explosé vos objectifs hier
						</p>
					</div>
					<div className="main-content">
						<div className="charts">
							<Charts
								activityData={activityData}
								avgSession={avgSession}
								performance={performance}
								user={userData}
							/>
						</div>
						<div className="results">
							{energies?.map((resource, index) => (
								<Result
									img={resource?.img}
									info={resource?.info}
									unit={resource?.unit}
									color={resource?.color}
									count={resource?.count}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
