import Sport from "../sport";
import "./sportType.css";
const sports = [
	{ src: "/assets/meditation.png", des: "Mediation" },
	{ src: "/assets/swim.png", des: "Swimming" },
	{ src: "/assets/bicycle.png", des: "Bicycle" },
	{ src: "/assets/gym.png", des: "Gym" },
];

const SportType = () => {
	return (
		<div className="left-navigation">
			<div className="sports-wrapper">
				{sports.map((sport, idx) => (
					<Sport key={idx} src={sport.src} des={sport.des} />
				))}
			</div>
			<p>Copyright, SportSee 2020</p>-{" "}
		</div>
	);
};
export default SportType;
