// EmployeeList.tsx
import { Link } from 'react-router-dom';
import './employeelist.css'; // Import the custom CSS

interface Employee {
  id: number;
  name: string;
  position: string;
  photoUrl: string;
}

interface EmployeeListProps {
  employees: Employee[];
}

function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="employee-box">
            <Link to={`/employee/${employee.id}`} className="employee-link">
              <img src={employee.photoUrl} alt={employee.name} />
              <div className="employee-info">
                <h3>{employee.name}</h3>
                <p>{employee.position}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
