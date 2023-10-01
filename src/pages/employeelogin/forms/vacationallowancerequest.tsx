import React from "react";
import "./vacationAllowanceRequest.css";
import { UserDataType } from "../../../utils/api/auth";

interface VacationAllowanceProps {
  selectedEmployee?: UserDataType;
}

export const getRequestStatus = () => {
  // This is mock data. You'd replace this with actual data retrieval logic.
  return {
      type: "Vacation Allowance Request",
      status: "Pending", // Replace with actual status
      time: new Date(), // Replace with actual submission date
  };
}

const VacationAllowanceRequest: React.FC<VacationAllowanceProps> = ({
  selectedEmployee,
}) => {
  const employee = selectedEmployee;

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <form className="employee-profile-form">
      <div className="vacation-allowance-form">
        <p className="date">Date: August 02, 2023</p>
        <h2>Vacation Allowance Dues</h2>

        <div className="info-pair">
          <div className="label">Employee Name:</div>
          <p>{employee.name}</p>
        </div>

        <div className="info-pair">
          <div className="label">Identification Number:</div>
          <p>{employee.idnumber}</p>
        </div>

        <div className="info-pair">
          <div className="label">Branch:</div>
          <p>{employee.branch}</p>
        </div>

        <div className="info-pair">
          <div className="label">Job Title:</div>
          <p>{employee.position}</p>
        </div>

        <div className="info-pair">
          <div className="label">Nationality:</div>
          <p>{employee.nationality}</p>
        </div>

        <p className="double-gap">
          I acknowledge, the undersigned/undersigned, acknowledge receipt of my
          vacation salary from the sponsor.
        </p>

        <div className="signature">Employee Signature:</div>
      </div>
    </form>
  );
};

export default VacationAllowanceRequest;
