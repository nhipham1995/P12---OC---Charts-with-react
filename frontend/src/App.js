import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import { DataContextProvider } from "./services/datas";
import PageNotFound from "./pages/404";

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
					<Route path="/404" element={<PageNotFound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
