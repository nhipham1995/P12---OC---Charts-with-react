export const LegendChart = ({ payload }) => {
	if (payload && payload.length) {
		return (
			<div
				className="custom-tooltip"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<h5 style={{ color: "#282D30" }}>Activité quotidienne</h5>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "20px",
					}}
				>
					{payload.map((pld, ind) => (
						<div style={{ padding: 10 }} key={ind}>
							<div
								style={{
									color: "#74798C",
									fontSize: "0.8rem",
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<div
									style={{
										width: "10px",
										height: "10px",
										backgroundColor: pld.color,
										borderRadius: "100%",
									}}
								></div>
								<div>{pld.value}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	return null;
};

export const LegendLineChart = ({ payload }) => {
	if (payload && payload.length) {
		return (
			<div
				className="custom-tooltip"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					paddingLeft: "20px",
					opacity: "90%",
				}}
			>
				<h5
					style={{
						color: "#FFFFFF",
						fontSize: "1.2rem",
						maxWidth: "200px",
					}}
				>
					Durée moyenne des sessions
				</h5>
			</div>
		);
	}

	return null;
};
