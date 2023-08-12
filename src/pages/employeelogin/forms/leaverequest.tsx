import React, { useEffect, useState } from "react";
import "./LeaveRequest.css";
import { employeesData } from "../employeedata";

interface Employee {
  id: number;
  name: string;
  position: string;
  branch: string;
}

interface LeaveRequestProps {
  selectedEmployee?: Employee;
}
// Somewhere above in your LeaveRequest.tsx or in a separate utility file

const getSubstituteEmployees = (currentEmployeeId: number, branch: string) => {
  return employeesData.filter(employee => 
    employee.id !== currentEmployeeId && employee.branch === branch
  );
};

const LeaveRequest: React.FC<LeaveRequestProps> = ({ selectedEmployee }) => {
  const [substituteEmployees, setSubstituteEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    if (selectedEmployee) {
      const substitutes = getSubstituteEmployees(selectedEmployee.id, selectedEmployee.branch);
      setSubstituteEmployees(substitutes);
    }
  }, [selectedEmployee]);

  console.log(selectedEmployee); // <-- Add this line here

  return (
    <div className="sick-leave-form">
      <h2>Request Sick Leave</h2>
      <form>
        {/* Employee Name and Position */}
        <div className="employee-info-form">
          <label>
            Employee Name:
            <input type="text" value={selectedEmployee?.name} readOnly />
          </label>
          <label>
            Position:
            <input type="text" value={selectedEmployee?.position} readOnly />
          </label>
        </div>

        {/* Supervisor Name Dropdown */}
        <label>
          Supervisor Name:
          <select>
            <option value="supervisor1">Supervisor 1</option>
            <option value="supervisor2">Supervisor 2</option>
            {/* Add more supervisor options as needed */}
          </select>
        </label>

        {/* Substitute Employee Dropdown */}
        {selectedEmployee?.branch && (
          <label>
            Substitute Employee:
            <select>
              {substituteEmployees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </label>
        )}

        {/* Type of Absence Request */}
        <label>
          Type of Absence Request:
          <select>
            <option value="sick">Sick</option>
            <option value="timeOff">Time Off Without Pay</option>
            <option value="personal">Personal</option>
            <option value="maternity">Maternity/Paternity</option>
            <option value="others">Others - Please Specify</option>
          </select>
        </label>

        {/* Date From and To */}
        <div className="date-range">
          <label>
            Date From:
            <input type="date" />
          </label>
          <label>
            Date To:
            <input type="date" />
          </label>
        </div>

        {/* Reason */}
        <label>
          Reason:
          <textarea rows={4} />
        </label>

        <button>Submit Request</button>
      </form>
    </div>
  );
};

export default LeaveRequest;
