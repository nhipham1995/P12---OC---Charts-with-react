import "./App.css";
import { DataContextProvider } from "./utils/datas";
import { Router, Route, Routes } from "express";
import Home from "./pages/Home";
function App() {
	return (
		// <Router>
		// 	<Routes>
		// 		<Route
		// 			path="/user/:userId"
		// 			element={
		// 				<DataContextProvider>
		// 					<Home />
		// 				</DataContextProvider>
		// 			}
		// 		></Route>
		// 	</Routes>
		// </Router>
		<div>Hello</div>
	);
}

export default App;
