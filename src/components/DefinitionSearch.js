import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
    const [word, setWord] = useState();
	const navigate = useNavigate();

	return (
		<form
			className="flex space-between space-x-2 max-w-[300px] pt-2"
			onSubmit={() => {
				navigate("/Dictionary/" + word);
			}}
		>
			<input
				placeholder="Input any word!"
				className="shrink min-w-0 rounded-md px-2 py-2"
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>
			<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded">Search</button>
		</form>
	);
}