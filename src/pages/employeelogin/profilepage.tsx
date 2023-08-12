import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { employeesData } from "./employeedata";
import { useState } from "react";
import { commonButtons, positionButtons } from './buttonconfig';
import LeaveRequest from "./forms/leaverequest";

function ProfilePage() {
  const { id } = useParams();
  const selectedEmployee = id
    ? employeesData.find((employee) => employee.id === parseInt(id))
    : undefined;

  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const handleButtonClick = (formName: string) => {
    console.log("Button clicked with name:", formName);  // Log here
    setSelectedForm(formName);
  };

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
          {/* Display specific buttons based on employee's position */}
          {selectedEmployee && positionButtons[selectedEmployee.position]?.map((buttonName) => (
            <button key={buttonName} onClick={() => {
                console.log("Button clicked:", buttonName);  // Log directly here
                handleButtonClick(buttonName);
            }}>
              {buttonName}
            </button>
          ))}
          
          {/* Display common buttons for all positions */}
          {commonButtons.map((buttonName) => (
            <button key={buttonName} onClick={() => {
                console.log("Common button clicked:", buttonName);  // Log directly here
                handleButtonClick(buttonName);
            }}>
              {buttonName}
            </button>
          ))}
        </div>

        {/* Right side: Form */}
        <div className="right-side">
          {/* Display form based on selected button */}
          {selectedForm === "Leave Request" && <LeaveRequest selectedEmployee={selectedEmployee} />}
          {/* Add more form components as needed */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
