import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { employeesData } from "./employeedata";
import { useState } from "react";

function ProfilePage() {
  const { id } = useParams();
  const selectedEmployee = id
    ? employeesData.find((employee) => employee.id === parseInt(id))
    : undefined;

  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const handleButtonClick = (formName: string) => {
    setSelectedForm(formName);
  };

  // Determine if the current employee has a specific position
  const isSoftwareEngineer = selectedEmployee?.position === "Software Engineer";
  const isHR = selectedEmployee?.position === "HR";

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="header-profile-page">
        <div className="employee-info">
          <div className="employee-image">
            <img
              src={selectedEmployee?.photoUrl}
              alt={selectedEmployee?.name}
            />
          </div>
          <div className="employee-details">
            <h1>{selectedEmployee?.name}</h1>
            <p>Position: {selectedEmployee?.position}</p>
          </div>
        </div>
        <Link to="/employeelogin" className="back-button">
          <ArrowBackIcon className="arrow-icon" />
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="content">
        {/* Left side: Buttons */}
        <div className="left-side">
          {/* Show Button 1 for Branch Managers */}
          {isSoftwareEngineer && (
            <>
              <button onClick={() => handleButtonClick("form1")}>
                Button 1
              </button>
              <button onClick={() => handleButtonClick("sickLeave")}>
                Request Sick Leave
              </button>
            </>
          )}

          {/* Show Button 2 for HR */}
          {isHR && (
            <>
              <button onClick={() => handleButtonClick("form2")}>
                Button 2
              </button>
            </>
          )}

          {/* ... and so on */}
        </div>

        {/* Right side: Form */}
        <div className="right-side">
          {selectedForm === "form1" && (
            <div>
              <h2>Form 1</h2>
              {/* ... Form 1 content */}
            </div>
          )}
          {selectedForm === "form2" && (
            <div>
              <h2>Form 2</h2>
              {/* ... Form 2 content */}
            </div>
          )}
          {selectedForm === "sickLeave" && (
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
          )}

          {/* Add more form sections as needed */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
