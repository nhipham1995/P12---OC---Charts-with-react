// import { createContext, useContext, useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// import { fetchData } from "./fetch";
// const baseUrl = "http://localhost:4000";

// export const DataContext = createContext();

// export function DataContextProvider(props) {
// 	// const { userId } = useParams();
// 	// const userURL = `${baseUrl}/user/${userId}`;
// 	const userURL = `${baseUrl}/user/12`;

// 	const [userData, setUserData] = useState();
// 	useEffect(() => {
// 		fetchData(userURL).then((res) => setUserData(res));
// 	}, [userData, userURL]);
// 	return (
// 		<DataContext.Provider value={{ userData }}>
// 			{props.children}
// 		</DataContext.Provider>
// 	);
// }

// export function useDataContext() {
// 	return useContext(DataContext);
// }
