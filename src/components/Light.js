const Light = ({ variant = 'green' }) => {
	return (
		<div
			style={{
				background: variant,
				borderRadius: '50%',
				width: 50,
				height: 50,
			}}
		></div>
	);
};

export default Light;
