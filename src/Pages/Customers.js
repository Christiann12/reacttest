import { useState, useEffect } from "react";

export default function Customer() {
	const [word, setWord] = useState();
	const [notFound, setNotFound] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch("http://localhost:3002/test")
			.then((response) => {
				if (response.status === 404) {
					setNotFound(true);
				}
				if (!response.ok) {
					setError(true);

					throw new Error('Something went wrong!');
				}
				return response.json();
			})
			.then((data) => {
				setWord(data.name);
				console.log(data.name);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);
    return <h1>Hello There! { word }</h1>;
}
