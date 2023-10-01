import React from "react";
import "./experiencecertificate.css";
import { UserDataType } from "../../../utils/api/auth";


interface ExperienceCertificateProps {
  selectedEmployee?: UserDataType;
}

const today = new Date();
const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
  today.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}/${today.getFullYear()}`;

const ExperienceCertificate: React.FC<ExperienceCertificateProps> = ({
  selectedEmployee,
}) => {
  const employee = selectedEmployee;

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <form className="employee-profile-form">
      <div className="experience-certificate-form">
        <h2 className="text-center">Certificate of Experience</h2>

        <p className="text-center">Company Name: {employee.branch}</p>
        <p className="text-center">Abu Dhabi – {formattedDate}</p>

        <p className="intro">
          {employee.branch} hereby certifies that: {employee.name}{" "}
        </p>

        <div className="employment-details">
          <p>
            He Was Working for us as a{" "}
            <span className="position">Software Engineer</span> During the
            Period of
          </p>
          <div className="date-container">
            <p>
              <span className="label">Hiring Date:</span> 01/07/2023
            </p>
            <p>
              <span className="label">Till Date:</span> 14/08/2023
            </p>
          </div>
          <p>
            Last job he was held{" "}
            <span className="position">Software Engineer</span>
          </p>
        </div>

        <p className="performance-statement">
          He has performed his duties with the company with efficiency and
          sincerity. We witness his good behavior and work performance.
        </p>

        <p className="disclaimer">
          This certificate was granted upon its request without bearing company
          the slightest responsibility towards the rights of third parties.
        </p>

        <p className="text-center company-management">Company Management</p>
      </div>
    </form>
  );
};

export default ExperienceCertificate;
