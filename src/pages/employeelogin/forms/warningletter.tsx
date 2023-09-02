import React from "react";
import "./warningletter.css";
import { employeesData } from "../employeedata";

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

const getSupervisorName = (branch: string) => {
  const supervisor = employeesData.find(
    (employee) =>
      employee.position === "BRANCH SUPERVISOR" && employee.branch === branch
  );
  return supervisor ? supervisor.name : "Unknown";
};
const getBranchManagerName = (branch: string) => {
  const branchManager = employeesData.find(
    (employee) =>
      employee.position === "BRANCH MANAGER" && employee.branch === branch
  );
  return branchManager ? branchManager.name : "Unknown";
};

export const getRequestStatus = () => {
  // This is mock data. You'd replace this with actual data retrieval logic.
  return {
      type: "Warning Letter",
      status: "Pending", // Replace with actual status
      time: new Date(), // Replace with actual submission date
  };
}

const currentDate = new Date();
const formattedDate = `${
  currentDate.getMonth() + 1
}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

const WarningLetter: React.FC<Props> = ({ selectedEmployee }) => {
  const supervisorName = getSupervisorName(selectedEmployee.branch);
  const branchManagerName = getBranchManagerName(selectedEmployee.branch);

  return (
    <form className="employee-profile-form">
      <div className="warning-letter">
        <h1>Warning Letter</h1>

        <section className="employee-info">
          <h2>Employee Information</h2>
          <div className="employee-details">
            <div>
              <strong>Employee Name:</strong> {selectedEmployee.name}
              <br />
              <strong>Employee ID:</strong> {selectedEmployee.idnumber}
            </div>
            <div>
              <strong>Supervisor Name:</strong> {supervisorName}
              <br />
              <strong>Date:</strong> {formattedDate}
            </div>
          </div>
        </section>

        <section className="violation-info">
          <h2>Type of Violation/Unsatisfactory Action</h2>
          <p>
            You are receiving this Warning Letter as a result of the issue(s)
            identified below. Please note that this warning is considered the
            first step in {selectedEmployee.branch} discipline process. You are
            requested to improve your job performance and/or alter your behavior
            that has led to this warning. Failure to make requested corrections
            will lead to further disciplinary action up to and including
            termination.
          </p>
          <textarea placeholder="Type of violation/unsatisfactory action..."></textarea>
        </section>

        <section className="corrective-action">
          <h2>Corrective Action Plan</h2>
          <textarea placeholder="Enter corrective action plan..."></textarea>
        </section>

        <section className="signatures">
          <p>
            By signing this Warning Letter, you confirm that you will comply
            with the corrective action plan, and failure to do so will lead to
            further disciplinary action up to and including termination.
          </p>
          <div className="signature-block">
            <label>
              Hr&Administrative:
              <br />
              <input type="text" value="Laraine Kris Alcantara" readOnly />
            </label>
            <label>
              Signature:
              <br />
              <input type="text" placeholder="Signature" />
            </label>
          </div>
          <div className="signature-block">
            <label>
              Operation Manager:
              <br />
              <input type="text" value="Awad Jamal Al Awadv" readOnly />
            </label>
            <label>
              Signature:
              <br />
              <input type="text" placeholder="Signature" />
            </label>
          </div>
          <div className="signature-block">
            <label>
              Branch Manager Name:
              <br />
              <input type="text" value={branchManagerName} readOnly />
            </label>
            <label>
              Signature:
              <br />
              <input type="text" placeholder="Signature" />
            </label>
          </div>
          <div className="signature-block">
            <label>
              Employee Name:
              <br />
              <input type="text" value={selectedEmployee.name} readOnly />
            </label>
            <label>
              Signature:
              <br />
              <input type="text" placeholder="Signature" />
            </label>
          </div>
        </section>

        <button type="submit">Submit Warning Letter</button>
      </div>
    </form>
  );
};

export default WarningLetter;
