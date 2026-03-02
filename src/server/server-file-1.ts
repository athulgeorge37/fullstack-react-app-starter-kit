const serverVariable = 21;
const unusedServerVariable = "Hello World";

const someServerFunction = () => {
	const something = process.env.TZ;

	console.log(process.env.NODE_ENV);
	console.log(__dirname);

	return {
		msg: "Hello World",
	};
};

const awaitFunction = () => {
	const val = true;
	// this is a comment

	if (val) {
		return;
	}

	const result = [1, 2, 3, 4].map((val) => {
		console.log(val);

		return val % 2 === 0;
	});

	return "hello";
};

awaitFunction();

// export { serverVariable, someServerFunction };
