import React from "react";
import "./ salarycertificate.css";

interface Employee {
  id: number;
  name: string;
  position: string;
  branch: string;
  nationality: string;
  idnumber: string;
  passportnumber: string;
  joiningdate: string;
  salary: string;
}

interface SalaryCertificateProps {
  selectedEmployee?: Employee;
}

const SalaryCertificate: React.FC<SalaryCertificateProps> = ({
  selectedEmployee,
}) => {
  const employee = selectedEmployee;

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <form className="employee-profile-form">
      <div className="salary-certificate-form">
        <p className="date">Date: July 25, 2023</p>
        <h2 className="text-center">Salary Certificate</h2>

        <p className="double-gap">
          {employee.branch} hereby certifies that the following employee is
          currently employed in the Company as per the following details:
        </p>

        <div className="info-pair">
          <div className="label">Employee Name:</div>
          <p>{employee.name}</p>
        </div>

        <div className="info-pair">
          <div className="label">Nationality:</div>
          <p>{employee.nationality}</p>
        </div>

        <div className="info-pair">
          <div className="label">ID Number:</div>
          <p>{employee.idnumber}</p>
        </div>

        <div className="info-pair">
          <div className="label">Passport Number:</div>
          <p>{employee.passportnumber}</p>
        </div>

        <div className="info-pair">
          <div className="label">Joining Date:</div>
          <p>{employee.joiningdate}</p>
        </div>

        <div className="info-pair">
          <div className="label">Monthly Net Salary in AED:</div>
          <p>{employee.salary}</p>
        </div>

        <div className="info-pair">
          <div className="label">Job Title:</div>
          <p>{employee.position}</p>
        </div>

        <p className="double-gap">
          This certificate is hereby issued as per the employee request, without
          any liability for third party rights.
        </p>

        <p className="text-center">{employee.branch}</p>

        <p className="gap">
          This certificate is valid for one month from issue date, and any
          alteration will void it.
        </p>

        <div className="footer-signatures">
          <div>
            Laraine Kris Alcantara
            <br />
            HR & ADMINISTRATIVE
          </div>
          <div>
            Mr. Abdulmunim Swedan
            <br />
            Chief Financial Officer
          </div>
        </div>

        <p className="text-center">Approved Electronic Document</p>
      </div>
    </form>
  );
};

export default SalaryCertificate;
