export const CustomizedDot = (props) => {
	const { cx, cy, width } = props;
	console.log("in chart", width);
	return (
		<svg
			viewBox={`0 0 ${width} 280`}
			x={width > 400 ? cx - 15 : cx - 10}
			y={cy - 10}
		>
			<circle
				x={cx}
				cy="10"
				r="10"
				style={{
					opacity: "0.4",
					fill: "#fff",
					strokeWidth: "0px",
				}}
			/>
			<circle
				x={cx}
				cy="10"
				r="6"
				style={{
					opacity: "1",
					fill: "#fff",
					strokeWidth: "0px",
				}}
			/>
		</svg>
	);
};
