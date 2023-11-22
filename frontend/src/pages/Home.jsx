import Navigation from "../components/Navigation";
import Content from "../components/content";
import SportType from "../components/sportType";
const Home = () => {
	return (
		<div>
			<Navigation />
			<div className="main">
				<SportType />
				<Content />
			</div>
		</div>
	);
};
export default Home;
