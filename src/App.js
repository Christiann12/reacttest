import './Index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {id:1 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {id:2 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {id:3 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {id:4 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {id:5 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {id:6 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {id:7 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {id:8 ,name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
    ]
  );

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      } 

      return employee;
    });
    setEmployees(updatedEmployees);
  }
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              setRole(e.target.value)
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => { 
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  src={employee.src}
                  id={employee.id}
                  updateEmployee = {updateEmployee}
                />
              );
            })}
          </div>
        </>
      )
      :(
        <p>you cannot see the employees</p>
      )

      }
    </div>
  );
}

export default App;
