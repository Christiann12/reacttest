import './Index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState("dev");
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
            <Employee name="Christian" role="Intern" src="https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"/>
            <Employee name="Paul" role="Intern" src="https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"/>
            <Employee name="Christian" role="Intern" src="https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"/>
            <Employee name="Paul" role="Intern" src="https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"/>
            <Employee name="Christian" role="Intern" src="https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"/>
            <Employee name="Paul" role="Intern" src="https://images.pexels.com/photos/17016912/pexels-photo-17016912/free-photo-of-canelo.jpeg"/>
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
