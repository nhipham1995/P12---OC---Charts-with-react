import "./result.css";
const Result = ({ img, info, unit, color }) => {
	return (
		<div className="result-item">
			<div
				className="result-img"
				style={{ backgroundColor: `${color}20` }}
			>
				<img src={img} alt={info}></img>
			</div>
			<div>
				<h4>{info}</h4>
				<p>{unit}</p>
			</div>
		</div>
	);
};

export default Result;
