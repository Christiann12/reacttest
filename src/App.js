import "./Index.css";
import Customer from "./Pages/Customers";
import Employees from "./Pages/Employees";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header>
				<Routes>
					<Route path="/Employees" element={<Employees />} />
					<Route path="/Customers" element={<Customer />} />
				</Routes>
			</Header>
		</BrowserRouter>
	);
}

export default App;
