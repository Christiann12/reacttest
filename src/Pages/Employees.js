import "../Index.css";
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "../components/EditEmployee";

function Employees() {
	const [role, setRole] = useState("dev");
	const [employees, setEmployees] = useState([
		{
			id: 1,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
		{
			id: 2,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
		{
			id: 3,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
		{
			id: 4,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
		{
			id: 5,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
		{
			id: 6,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
		{
			id: 7,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
		{
			id: 8,
			name: "Christian",
			role: "Intern",
			src:
				"https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg",
		},
	]);

	function updateEmployee(id, newName, newRole) {
		const updatedEmployees = employees.map((employee) => {
			if (id == employee.id) {
				return { ...employee, name: newName, role: newRole };
			}

			return employee;
		});
		setEmployees(updatedEmployees);
	}
	function newEmployee(newName, newRole, newImage) {
		const newEmployeeData = {
			id: uuidv4(),
			name: newName,
			role: newRole,
			src: newImage,
		};
		setEmployees([...employees, newEmployeeData]);
		console.log(newEmployeeData);
	}
	const showEmployees = true;
	return (
		<div className="">
			{showEmployees ? (
				<>
					<div className="flex flex-wrap justify-center pt-6 ">
						{employees.map((employee) => {
							const editEmployee = (
								<EditEmployee
									id={employee.id}
									name={employee.name}
									role={employee.role}
									updateEmployee={updateEmployee}
								/>
							);
							return (
								<Employee
									key={uuidv4()}
									name={employee.name}
									role={employee.role}
									src={employee.src}
									id={employee.id}
									editEmployee={editEmployee}
								/>
							);
						})}
					</div>
					<AddEmployee newEmployee={newEmployee} />
				</>
			) : (
				<p>you cannot see the employees</p>
			)}
		</div>
	);
}

export default Employees;
