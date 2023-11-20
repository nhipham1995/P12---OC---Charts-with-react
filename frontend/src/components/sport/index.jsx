import "./sport.css";
const Sport = ({ src, des }) => {
	return (
		<div className="sport-cover">
			<img src={src} alt={des}></img>
		</div>
	);
};

export default Sport;
