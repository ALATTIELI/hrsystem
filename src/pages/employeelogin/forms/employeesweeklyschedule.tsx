import "./employeesweeklyschedule.css";
import React from "react";
import { employeesData } from "../employeedata"; // Assuming you have this data

interface Employee {
  id: number;
  name: string;
  branch: string; // Assuming there's a branch property for each employee
}

interface Props {
  selectedEmployee: Employee; // The branch supervisor
}

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const EmployeesWeeklySchedule: React.FC<Props> = ({ selectedEmployee }) => {
  const selectedBranch = selectedEmployee.branch;
  const branchEmployees = employeesData.filter(
    (employee) => employee.branch === selectedBranch
  );

  return (
    <form className="employee-profile-form">
      <table className="schedule-table">
        <thead>
          <tr>
            <th className="employee-name-header">Employee Name</th>
            {daysOfWeek.map((day) => (
              <React.Fragment key={day}>
                <th className="day-header">{day} (Start)</th>
                <th className="day-header">{day} (End)</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {branchEmployees.map((employee) => (
            <tr key={employee.id} className="employee-row">
              <td className="employee-name">{employee.name}</td>
              {daysOfWeek.map((day) => (
                <React.Fragment key={day}>
                  <td className="time-entry">
                    <input type="time" />
                  </td>
                  <td className="time-entry">
                    <input type="time" />
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="schedule-submit-button">
        Save Schedule
      </button>
    </form>
  );
};

export default EmployeesWeeklySchedule;
