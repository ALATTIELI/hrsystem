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

const getSubstituteEmployees = (currentEmployeeId: number, branch: string) => {
  return employeesData.filter(
    (employee) =>
      employee.id !== currentEmployeeId && employee.branch === branch
  );
};

const LeaveRequest: React.FC<LeaveRequestProps> = ({ selectedEmployee }) => {
  const [substituteEmployees, setSubstituteEmployees] = useState<Employee[]>(
    []
  );
  const [absenceType, setAbsenceType] = useState<string>("");
  const [submissionDate, setSubmissionDate] = useState<string>("");

  useEffect(() => {
    if (selectedEmployee) {
      const substitutes = getSubstituteEmployees(
        selectedEmployee.id,
        selectedEmployee.branch
      );
      setSubstituteEmployees(substitutes);
    }
  }, [selectedEmployee]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setSubmissionDate(today);
  }, []);

  const [reason, setReason] = useState<string>("");
  const [supervisor, setSupervisor] = useState<string>("Supervisor 1"); // default value
  const [substitute, setSubstitute] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form from submitting the traditional way
    console.log("Form submitted with the following details:");
    console.log("Employee:", selectedEmployee?.name);
    console.log("Supervisor:", supervisor);
    console.log("Substitute:", substitute);
    console.log("Absence Type:", absenceType);
    console.log("Date Range:", dateFrom, dateTo);
    console.log("Reason:", reason);
    console.log("Submission Date:", new Date().toLocaleString()); // Assuming you want current date & time
    alert(`Thank you for your request!`);

    // ... log other fields as needed
  };

  return (
    <div className="sick-leave-form">
      <h2>Request Sick Leave</h2>

      <form onSubmit={handleSubmit}>
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
          <select
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
          >
            <option value="supervisor1">Supervisor 1</option>
            <option value="supervisor2">Supervisor 2</option>
            {/* Add more supervisor options as needed */}
          </select>
        </label>

        {/* Substitute Employee Dropdown */}
        {selectedEmployee?.branch && (
          <label>
            Substitute Employee:
            <select
              value={substitute}
              onChange={(e) => setSubstitute(e.target.value)}
            >
              {substituteEmployees.map((employee) => (
                <option key={employee.id} value={employee.name}>
                  {employee.name}
                </option>
              ))}
            </select>
          </label>
        )}

        {/* Type of Absence Request */}
        <label>
          Type of Absence Request:
          <select
            value={absenceType}
            onChange={(e) => setAbsenceType(e.target.value)}
          >
            <option value="sick">Sick</option>
            <option value="timeOff">Time Off Without Pay</option>
            <option value="personal">Personal</option>
            <option value="maternity">Maternity/Paternity</option>
            <option value="others">Others - Please Specify</option>
          </select>
        </label>

        {absenceType === "others" && (
          <label>
            Specify:
            <input type="text" />
          </label>
        )}

        {/* Date From and To */}
        <div className="date-range">
          <label>
            Date From:
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </label>
          <label>
            Date To:
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </label>
        </div>

        {/* Reason */}
        <label>
          Reason:
          <textarea
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </label>

        {/* Display Submission Date */}
        <div className="submission-date">
          <label>
            Date of Submission:
            <input type="text" value={submissionDate} readOnly />
          </label>
        </div>
        {/* The added informational text */}
        <p>
          You must seek approvals for leaves, other than sick leave, 2 days
          prior to your first day of absence.
        </p>
        <button>Submit Request</button>
      </form>
    </div>
  );
};

export default LeaveRequest;
