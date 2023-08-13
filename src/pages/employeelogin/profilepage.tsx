import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { employeesData } from "./employeedata";
import { useState } from "react";
import { commonButtons, positionButtons } from "./buttonconfig";
import LeaveRequest from "./forms/leaverequest";
import SalaryCertificate from "./forms/ salarycertificate";

function ProfilePage() {
  const { id } = useParams();
  const selectedEmployee = id
    ? employeesData.find((employee) => employee.id === parseInt(id))
    : undefined;

  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  // Commenting out the unused state values:
  // const [breakStartTime, setBreakStartTime] = useState<Date | null>(null);
  // const [breakEndTime, setBreakEndTime] = useState<Date | null>(null);
  const [isBreakStarted, setIsBreakStarted] = useState(false);

  const handleButtonClick = (formName: string) => {
    console.log("Button clicked with name:", formName);
    setSelectedForm(formName);
  };

  const toggleBreak = () => {
    if (!isBreakStarted) {
      handleStartBreak();
    } else {
      handleEndBreak();
    }
    setIsBreakStarted(!isBreakStarted);
  };

  const handleStartBreak = () => {
    const startTime = new Date();
    // setBreakStartTime(startTime);
    console.log(`Break started at ${startTime.toLocaleTimeString()}`);
  };

  const handleEndBreak = () => {
    const endTime = new Date();
    // setBreakEndTime(endTime);
    console.log(`Break ended at ${endTime.toLocaleTimeString()}`);
  };

  const handleLogout = () => {
    console.log(`Employee logged out at ${new Date().toLocaleTimeString()}`);
    // Here you can also redirect the user to the login page or any other logic for logout
    // Example: useHistory().push('/login');
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
        {/* Add Start and End break buttons */}
        <div className="profile-container">
          {/* ... other divs */}
          <div className="fixed-buttons">
            <button onClick={toggleBreak}>
              {isBreakStarted ? "End Break" : "Start Break"}
            </button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>

        {/* Logout Button */}
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
          {selectedEmployee &&
            positionButtons[selectedEmployee.position]?.map((buttonName) => (
              <button
                key={buttonName}
                onClick={() => handleButtonClick(buttonName)}
              >
                {buttonName}
              </button>
            ))}

          {/* Display common buttons for all positions */}
          {commonButtons.map((buttonName) => (
            <button
              key={buttonName}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>

        {/* Right side: Form */}
        <div className="right-side">
          {/* Display form based on selected button */}
          {selectedForm === "Leave Request" && (
            <LeaveRequest selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Salary Certificate" && (
            <SalaryCertificate selectedEmployee={selectedEmployee} />
          )}
          {/* Add more form components as needed */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
