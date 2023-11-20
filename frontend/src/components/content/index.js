import "./content.css";
import Charts from "../Charts";
import Result from "../result";

const results = [
	{
		img: "./assets/energy.svg",
		info: "1,930kCal",
		unit: "Calories",
		color: "#FF0000",
	},
	{
		img: "./assets/chicken.svg",
		info: "155g",
		unit: "Protéines",
		color: "#4AB8FF",
	},
	{
		img: "./assets/apple.svg",
		info: "50g",
		unit: "Lipides",
		color: "#F9CE23",
	},
	{
		img: "./assets/cheeseburger.svg",
		info: "290g",
		unit: "Glucides",
		color: "#FD5181",
	},
];
const Content = () => {
	return (
		<div className="main-cover">
			<div className="text">
				<h2>
					Bonjour <span>Thomas</span>
				</h2>
				<p>Félicitations ! Vous avez explosé vos objectifs hier </p>
			</div>
			<div className="main-content">
				<div className="charts">
					<Charts />
				</div>
				<div className="results">
					{results.map((result, index) => (
						<Result
							img={result.img}
							info={result.info}
							unit={result.unit}
							color={result.color}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Content;
