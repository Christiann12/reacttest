import './Index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              setRole(e.target.value)
            }}
          />
          <Employee name="Christian" role="Intern"/>
          <Employee name="Paul" role={role} />
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
