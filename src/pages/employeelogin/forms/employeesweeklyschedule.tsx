import "./employeesweeklyschedule.css";
import React, { useState } from "react";
import { employeesData } from "../employeedata"; 
import { UserDataType } from "../../../utils/api/auth";


interface Props {
  selectedEmployee: UserDataType; 
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

export const getRequestStatus = () => {
  // This is mock data. You'd replace this with actual data retrieval logic.
  return {
      type: "Employees Weekly Schedule",
      status: "Pending", // Replace with actual status
      time: new Date(), // Replace with actual submission date
  };
}

const EmployeesWeeklySchedule: React.FC<Props> = ({ selectedEmployee }) => {
  const selectedBranch = selectedEmployee.branch;
  const branchEmployees = employeesData.filter(
    (employee) => employee.branch === selectedBranch
  );

  // State for break timings
  const [breakTimings, setBreakTimings] = useState([""]);

  const addBreakTiming = () => {
    setBreakTimings(prev => [...prev, ""]);
  };

  const removeLastBreakTiming = () => {
    setBreakTimings(prev => prev.slice(0, -1));
  };

  return (
    <form className="employee-profile-form">
      <table className="schedule-table">
        <thead>
          <tr>
            <th className="employee-name-header">Employee Name</th>
            {daysOfWeek.map((day) => (
              <th key={day} className="day-header">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {branchEmployees.map((employee) => (
            <tr key={employee.id} className="employee-row">
              <td className="employee-name">{employee.name}</td>
              {daysOfWeek.map((day) => (
                <td key={day} className="time-entry">
                  <input type="text" placeholder="Duty Timing" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <table className="break-table">
        <thead>
          <tr>
            <th className="break-label" colSpan={daysOfWeek.length + 1}>Break Timings</th>
          </tr>
        </thead>
        <tbody>
          {breakTimings.map((_, index) => (
            <tr key={index} className="break-row">
              <td className="break-label">Timings</td>
                <td className="break-entry">
                  <input type="text" placeholder="Break Timing" />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="break-buttons">
        <button type="button" onClick={addBreakTiming}>Add Break Timing</button>
        {breakTimings.length > 1 && <button type="button" onClick={removeLastBreakTiming}>Remove</button>}
      </div>
      <button type="submit" className="schedule-submit-button">
        Save Schedule
      </button>
    </form>
  );
};

export default EmployeesWeeklySchedule;
