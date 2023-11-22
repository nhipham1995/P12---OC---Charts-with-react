import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./fetch";
import { Performance } from "./data";

const baseUrl = "http://localhost:4000";

export const DataContext = createContext();

export function DataContextProvider(props) {
	const { userId } = useParams();

	const userURL = `${baseUrl}/user/${userId}`;
	const activityURL = `${baseUrl}/user/${userId}/activity`;
	const avgSessionURL = `${baseUrl}/user/${userId}/average-sessions`;
	const performanceURL = `${baseUrl}/user/${userId}/performance`;

	const [userData, setUserData] = useState();
	const [activityData, setActivityData] = useState();
	const [avgSession, setAvgSession] = useState();
	const [performance, setPerformance] = useState();

	useEffect(() => {
		fetchData(userURL).then((res) => {
			setUserData(res);
		});

		fetchData(activityURL).then((res) => setActivityData(res));

		fetchData(avgSessionURL).then((res) => setAvgSession(res));

		fetchData(performanceURL).then((res) => {
			const per = new Performance(res);
			const result = per.combination();
			setPerformance(result);
		});
	}, [userURL, activityURL, avgSessionURL, performanceURL]);

	return (
		<DataContext.Provider
			value={{ userData, activityData, avgSession, performance }}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
