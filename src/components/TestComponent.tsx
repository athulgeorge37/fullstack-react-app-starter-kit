import { useEffect, useState } from "react";

const TestComponent = () => {
	const [text, setText] = useState("");

	useEffect(() => {
		console.log({ text });
	}, [text]);

	const sayHello = () => {
		if (text === "hi") return null;

		return text;
	};

	if (text === "") return null;

	return (
		<div>
			<p>Hello World</p>
			Hi
			<input
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
		</div>
	);
};

// comment

export { TestComponent };
