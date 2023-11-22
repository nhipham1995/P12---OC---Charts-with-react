export const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div
				className="custom-tooltip"
				style={{ backgroundColor: "#E60000", margin: "10px" }}
			>
				{payload.map((pld, ind) => (
					<div style={{ padding: 10 }} key={ind}>
						<div style={{ color: "white", fontSize: "0.8rem" }}>
							{pld.value}
							{ind === 0 ? "kg" : "Kcal"}
						</div>
					</div>
				))}
			</div>
		);
	}

	return null;
};

export const CustomLineTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div
				className="custom-tooltip"
				style={{ backgroundColor: "white" }}
			>
				{payload.map((pld, ind) => (
					<div style={{ padding: 10 }} key={ind}>
						<div style={{ color: "black", fontSize: "0.8rem" }}>
							{pld.value}min
						</div>
					</div>
				))}
			</div>
		);
	}

	return null;
};
