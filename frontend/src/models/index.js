export class Information {
	constructor(data) {
		this.id = data?.id;
		this.keyData = data?.keyData;
		this.score = data?.score;
		this.todayScore = data?.todayScore;
		this.userInfos = data?.userInfos;
	}
	transformData() {
		const newData = {
			id: this?.id,
			keyData: this?.keyData,
			score: this?.todayScore ?? this?.score,
			userInfos: this?.userInfos,
		};
		return newData;
	}
}
export class UserData {
	constructor(data) {
		this.data = data?.userId;
		this.sessions = data?.sessions;
	}
	userCount() {
		const newData = this.sessions?.map((v, index) => {
			return { ...v, index: index + 1 };
		});

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
			"First",
			"Lundi",
			"Mardi",
			"Mercredi",
			"Jeudi",
			"Vendredi",
			"Samedi",
			"Dimanche",
			"Last",
		];
		const addedSession = [
			{
				day: 0,
				sessionLength:
					(this.sessions?.[0].sessionLength +
						this.sessions?.[1].sessionLength) /
					2,
			},
			...this.sessions,
			{
				day: 8,
				sessionLength:
					(this.sessions[6].sessionLength ??
						0 + this.sessions[5].sessionLength ??
						0) / 2,
			},
		];

		const newSession = addedSession.map((session) => {
			const dayNum = session?.day;
			return {
				day: days[`${dayNum}`].slice(0, 1),
				sessionLength: session.sessionLength,
			};
		});
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
