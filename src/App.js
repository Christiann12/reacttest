import "./Index.css";
import Customer from "./Pages/Customers";
import Employees from "./Pages/Employees";
import Dic from "./Pages/Dictionary";
import Header from "./components/Header";
import Definition from "./Pages/Definition";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header>
				<Routes>
					<Route path="/Employees" element={<Employees />} />
					<Route path="/Customers" element={<Customer />} />
					<Route path="/Dictionary" element={<Dic />} />
					<Route path="/Definition" element={<Definition />} />
					<Route path="/Definition/:search" element={<Definition />} />
				</Routes>
			</Header>
		</BrowserRouter>
	);
}

export default App;
