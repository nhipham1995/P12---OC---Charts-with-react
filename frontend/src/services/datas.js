import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { fetchData } from "./fetch";
import { Information, Performance, Sessions } from "../models";

import data from "../_mocks/data";

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

	const index = data.USER_MAIN_DATA.findIndex(
		(v) => Number(v.id) === Number(userId)
	);

	useEffect(() => {
		if (index === -1) {
			<Navigate to="/404" />;
			return;
		}

		fetchData(userURL, userId).then((res) => {
			const data = new Information(res);
			const newData = data.transformData();
			setUserData(newData);
		});

		fetchData(activityURL, userId, "activity").then((res) =>
			setActivityData(res)
		);

		fetchData(avgSessionURL, userId, "avgSession").then((res) => {
			const data = new Sessions(res);
			const newSessions = data.addDay();
			setAvgSession(newSessions);
		});

		fetchData(performanceURL, userId, "performance").then((res) => {
			const per = new Performance(res);
			const result = per.combination();
			setPerformance(result);
		});
	}, [userURL, activityURL, avgSessionURL, performanceURL, userId, index]);

	if (index === -1) {
		return <Navigate to="/404" />;
	}

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
