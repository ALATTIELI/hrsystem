// EmployeesWeeklyScheduleForm.tsx
import "./employeesweeklyschedule.css";
import React from "react";

interface Employee {
  id: number;
  name: string;
}

interface Props {
  selectedEmployee: Employee; // The selected employee
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
    return (
      <form>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              {daysOfWeek.slice(0, 3).map((day) => (
                <th key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedEmployee.name}</td>
              {daysOfWeek.slice(0, 3).map(() => (
                <>
                  <td>
                    <input type="time" />
                  </td>
                  <td>
                    <input type="time" />
                  </td>
                </>
              ))}
            </tr>
            <tr>
              {daysOfWeek.slice(3, 6).map((day) => (
                <th key={day}>
                  {day}
                </th>
              ))}
            </tr>
            <tr>
              <td>{selectedEmployee.name}</td>
              {daysOfWeek.slice(3, 6).map(() => (
                <>
                  <td>
                    <input type="time" />
                  </td>
                  <td>
                    <input type="time" />
                  </td>
                </>
              ))}
            </tr>
            <tr>
              <th>{daysOfWeek[6]}</th>
            </tr>
            <tr>
              <td>{selectedEmployee.name}</td>
              <td>
                <input type="time" />
              </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Save Schedule</button>
      </form>
    );
  };
  
  
  

export default EmployeesWeeklySchedule;
