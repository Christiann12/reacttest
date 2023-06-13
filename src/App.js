import "./Index.css";
import Customer from "./Pages/Customers";
import Employees from "./Pages/Employees";
import Dic from "./Pages/Dictionary";
import Header from "./components/Header";
import Definition from "./Pages/Definition";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header>
				<Routes>
					<Route path="/Employees" element={<Employees />} />
					<Route path="/Customers" element={<Customer />} />
					<Route path="/Dictionary" element={<Dic />} />
					<Route path="/Dictionary/:search" element={<Definition />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Header>
		</BrowserRouter>
	);
}

export default App;
