import { ComponentRef, ReactNode, useState } from "react";

interface ButtonProps {
	children: ReactNode;
	ref?: ComponentRef<"button">;
}

const Button = ({ children, ref }: ButtonProps) => {
	const [something, setSomething] = useState(false);

	console.log(window.location.href);
	console.log(document.body);

	return (
		<div>
			<span>{something ? "true" : "false"}</span>
			<button
				ref={ref}
				onClick={() => {
					setSomething((prev) => !prev);
				}}
			>
				{children}
			</button>
		</div>
	);
};

export { Button };
