import React from 'react';
import './LeaveRequest.css';

interface LeaveRequestProps {
  selectedEmployee?: {
    name?: string;
    position?: string;
  };
}

const LeaveRequest: React.FC<LeaveRequestProps> = ({ selectedEmployee }) => {
  return (
    <div className="sick-leave-form">
      <h2>Request Sick Leave</h2>
      <form>
        {/* Employee Name and Position */}
        <div className="employee-info-form">
          <label>
            Employee Name:
            <input
              type="text"
              value={selectedEmployee?.name}
              readOnly
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              value={selectedEmployee?.position}
              readOnly
            />
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
}

export default LeaveRequest;
