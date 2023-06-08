import './Index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
      {name: "Christian", role: "Intern", src: "https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"},
    ]
  );
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
