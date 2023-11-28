import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { DataContextProvider } from "./services/datas";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path="/user/:userId"
						element={
							<DataContextProvider>
								<Home />
							</DataContextProvider>
						}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
