import React from "react";
import "./AppreciationCertificate.css";

interface Employee {
  id: number;
  name: string;
  position: string;
  photoUrl: string;
  username: string;
  password: string;
  branch: string;
  nationality: string;
  idnumber: string;
  passportnumber: string;
  joiningdate: string;
  salary: string;
}

interface Props {
  selectedEmployee: Employee;
}

export const getRequestStatus = () => {
  // This is mock data. You'd replace this with actual data retrieval logic.
  return {
      type: "Appreciation Certificate",
      status: "Pending", // Replace with actual status
      time: new Date(), // Replace with actual submission date
  };
}

const AppreciationCertificate: React.FC<Props> = ({ selectedEmployee }) => {
  return (
    <form className="employee-profile-form">
      <div className="certificate-container">
        <div className="corner-left"></div>
        <div className="corner-right"></div>
        <div>
          <img
            src="/assets/logo1.png"
            alt="Company Logo"
            className="company-logo"
          />
        </div>

        <h1 className="bold-text-n">Certificate of Appreciation</h1>
        <p className="bold-text margin-top">
          We would like to express our sincere thanks and appreciation
        </p>

        <p className="bold-text name">To: {selectedEmployee.name}</p>
        <p className="bold-text">
          For his efforts as A {selectedEmployee.position} in{" "}
          {selectedEmployee.branch} branch and hard work
        </p>

        <div className="footer-texts">
          <p>HR & ADMINISTRATIVE</p>
          <p>LARAINE KRIS ALCANTARA</p>
        </div>
      </div>
    </form>
  );
};

export default AppreciationCertificate;
