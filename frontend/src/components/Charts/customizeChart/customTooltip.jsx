export const CustomTooltip = ({ active, payload, label, x, y }) => {
	if (active && payload && payload.length) {
		return (
			<div>
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
			</div>
			// <div>Text infos</div>
		);
	}
	return null;
};

export const CustomLineTooltip = ({ active, payload, coordinate, width }) => {
	if (active && payload && payload.length) {
		return (
			<div>
				<div
					className="custom-tooltip"
					style={{
						backgroundColor: "white",
						width: "60px",
						position: "absolute",
						top: coordinate?.y - 50,
						left:
							coordinate?.x > 60
								? coordinate?.x - 80
								: coordinate?.x + 20,
					}}
				>
					{payload.map((pld, ind) => (
						<div style={{ padding: 10 }} key={ind}>
							<div style={{ color: "black", fontSize: "0.8rem" }}>
								{pld.value}min
							</div>
						</div>
					))}
				</div>

				{/* dark background hover - calculer */}
				<div
					style={{
						backgroundColor: "black",
						height: "294px",
						width: width - coordinate?.x,
						top: "-20px",
						left: coordinate?.x,
						position: "absolute",
						opacity: "0.2",
						overflow: "hidden",
					}}
				></div>
			</div>
		);
	}

	return null;
};
