export class Performance {
	constructor(datas) {
		this.data = datas?.data;
		this.kind = datas?.kind;
		this.userId = datas?.userId;
	}

	combination() {
		if (this.kind === undefined) return;

		const newData = this.data.map((item) => {
			return { value: item.value, kind: this.kind[`${item.kind}`] };
		});
		console.log("new data", newData);
		return newData;
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
