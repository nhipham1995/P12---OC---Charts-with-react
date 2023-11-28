export class UserData {
	constructor(data) {
		this.data = data?.userId;
		this.sessions = data?.sessions;
	}
	userCount() {
		console.log("raw data, ", this.sessions);
		const newData = this.sessions?.map((v, index) => {
			return { ...v, index: index + 1 };
		});
		// const newData = this.sessions?.map((v, index) => {
		// 	return {
		// 		day: v.day,
		// 		kilogram: v.kilogram,
		// 		kcal: v.calories / 1000,
		// 		index: index,
		// 	};
		// });
		return newData;
	}
}
export class Performance {
	constructor(datas) {
		this.data = datas?.data;
		this.kind = datas?.kind;
		this.userId = datas?.userId;
	}

	combination() {
		if (this.kind === undefined) return;

		const newData = this.data.map((item) => {
			const newKind = this.kind[`${item.kind}`];
			return {
				value: item.value,
				kind: newKind.charAt(0).toUpperCase() + newKind.slice(1),
			};
		});
		return newData;
	}
}

export class Sessions {
	constructor(data) {
		this.sessions = data?.sessions;
		this.userId = data?.userId;
	}
	addDay() {
		const days = [
			"Lundi",
			"Mardi",
			"Mercredi",
			"Jeudi",
			"Vendredi",
			"Samedi",
			"Dimanche",
		];
		console.log(days[4]);
		const newSession = this.sessions.map((session) => {
			const dayNum = session?.day;
			return {
				day: days[`${dayNum}` - 1].slice(0, 1),
				sessionLength: session.sessionLength,
			};
		});
		console.log("new data", newSession);
		return { userId: this.userId, sessions: newSession };
	}
}

export class DataKey {
	constructor(data) {
		this.data = data;
	}

	result() {
		const base = [
			{
				img: "/assets/energy.svg",
				type: "calorieCount",
				count: "kCal",
				unit: "Calories",
				color: "#FF0000",
			},
			{
				img: "/assets/chicken.svg",
				type: "carbohydrateCount",
				count: "g",
				unit: "Protéines",
				color: "#4AB8FF",
			},
			{
				img: "/assets/apple.svg",
				type: "lipidCount",
				count: "g",
				unit: "Lipides",
				color: "#F9CE23",
			},
			{
				img: "/assets/cheeseburger.svg",
				type: "proteinCount",
				count: "g",
				unit: "Glucides",
				color: "#FD5181",
			},
		];

		if (this.data === undefined) return;
		base.forEach((item) => (item.info = this.data[`${item.type}`]));

		return base;
	}
}
