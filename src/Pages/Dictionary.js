import { useState, useEffect } from "react";

export default function Dic() {
	const [word, setWord] = useState();

    useEffect(() => {
        console.log('state updated', word);
    });

	return (
		<>
			<div className="block mx-auto pt-5">
				<input
					className="rounded-md "
					type="text"
					onChange={(e) => {
						setWord(e.target.value);
					}}
				/>
				<h1>Let's get the definition for {word} </h1>
			</div>
		</>
	);
}
