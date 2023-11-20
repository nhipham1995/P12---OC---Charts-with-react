import Navigation from "./components/Navigation";
import Content from "./components/content";
import SportType from "./components/sportType";
import "./App.css";
function App() {
	return (
		<div>
			<Navigation />
			<div className="main">
				<SportType />
				<Content />
			</div>
		</div>
	);
}

export default App;
