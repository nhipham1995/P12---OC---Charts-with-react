let isAPITaken = false;
const data = require("../_mocks/data.js");

export async function fetchData(url, userId, type) {
	console.log(userId, type);
	if (isAPITaken) {
		try {
			const res = await fetch(url);
			const data = await res.json();
			return data.data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	} else {
		let returnData;
		switch (type) {
			case "avgSession":
				returnData = data.USER_AVERAGE_SESSIONS?.filter(
					(user) => user.userId === Number(userId)
				);
				break;
			case "activity":
				returnData = data.USER_ACTIVITY?.filter(
					(user) => user.userId === Number(userId)
				);
				break;
			case "performance":
				returnData = data.USER_PERFORMANCE?.filter(
					(user) => user.userId === Number(userId)
				);
				break;
			default:
				returnData = data.USER_MAIN_DATA?.filter(
					(user) => user.id === Number(userId)
				);
				break;
		}
		return returnData[0];
	}
}
