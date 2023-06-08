import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee name="Christian" role="Intern"/>
          <Employee name="Paul"/>
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
