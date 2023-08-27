import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { employeesData } from "./employeedata";
import { useEffect, useState } from "react";
import { commonButtons, positionButtons } from "./buttonconfig";
import LeaveRequest from "./forms/leaverequest";
import SalaryCertificate from "./forms/ salarycertificate";
import VacationAllowanceRequest from "./forms/vacationallowancerequest";
import ExperienceCertificate from "./forms/experiencecertificate";
import EmployeesWeeklySchedule from "./forms/employeesweeklyschedule";
import BranchSupervisorChecklist from "./forms/branchsupervisorchecklist";
import AppreciationCertificate from "./forms/appreciationcertificate";
import WarningLetter from "./forms/warningletter";
import BranchManagerChecklist from "./forms/branchmanagerchecklist";
import EmployeesWeeklyTask from "./forms/employeesweeklytask";
import OperationManagerChecklist from "./forms/operationmanagerchecklist";
import EmployeesRating from "./forms/employeesrating";

function ProfilePage() {
  const { id } = useParams();
  const selectedEmployee = id
    ? employeesData.find((employee) => employee.id === parseInt(id))
    : undefined;

  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [isBreakStarted, setIsBreakStarted] = useState(false);
  const [showImageUploadPopup, setShowImageUploadPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [imageSubmissionTimestamp, setImageSubmissionTimestamp] = useState<Date | null>(null);
  const [breakDuration, setBreakDuration] = useState<number>(0);
  const [breakInterval, setBreakInterval] = useState<any>(null);
  const [showClock, setShowClock] = useState(false);

  

  useEffect(() => {
    const breakStatus = localStorage.getItem("isBreakStarted");
    if (breakStatus === "true") {
      setIsBreakStarted(true);
    }
  }, []);

  const handleButtonClick = (formName: string) => {
    console.log("Button clicked with name:", formName);
    setSelectedForm(formName);
  };

  const toggleBreak = () => {
    if (!isBreakStarted) {
      handleStartBreak();
      localStorage.setItem("isBreakStarted", "true");
    } else {
      handleEndBreak();
      localStorage.removeItem("isBreakStarted");
    }
    setIsBreakStarted(!isBreakStarted);
  };

  const handleStartBreak = () => {
    const startTime = new Date();
    console.log(`Break started at ${startTime.toLocaleTimeString()}`);
    
    // Show the clock
    setShowClock(true);
  
    // Start the break duration counter
    const interval = setInterval(() => {
      setBreakDuration((prevDuration) => prevDuration + 1);
    }, 1000);
    setBreakInterval(interval);
  };
  

  const handleEndBreak = () => {
    const endTime = new Date();
    console.log(`Break ended at ${endTime.toLocaleTimeString()}`);
  
    // Stop the break duration counter
    clearInterval(breakInterval);
    setBreakInterval(null);
    
    // After 5 seconds, hide the clock and reset the time
    setTimeout(() => {
      setShowClock(false);
      setBreakDuration(0);
    }, 5000);
  };
  

  const handleLogout = () => {
    console.log(
      `Employee logged out on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`
    );
  };

  const handleLogin = () => {
    const currentDateTime = new Date();
    console.log(
      `Employee logged in on ${currentDateTime.toLocaleDateString()} at ${currentDateTime.toLocaleTimeString()}`
    );
    setShowImageUploadPopup(true);
    resetImageState(); // Reset the image state when the user logs in.
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(file);
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    if (!selectedImage) {
      alert("Please upload an image before submitting.");
      return;
    }
    // Set the timestamp when the image is submitted
    setImageSubmissionTimestamp(new Date());
    console.log("Image uploaded:", selectedImage, imageSubmissionTimestamp);
    setShowImageUploadPopup(false);
    resetImageState(); // Reset the image state after submission.
  };

  const resetImageState = () => {
    setSelectedImage(null);
    setImagePreviewUrl(null);
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
          <div className="break-duration">
  {showClock && 
    `Break Duration: ${Math.floor(breakDuration / 60).toString().padStart(2, '0')}:${(breakDuration % 60).toString().padStart(2, '0')}`
  }
</div>

          <div className="fixed-buttons-profile">
            <button onClick={toggleBreak}>
              {isBreakStarted ? "End Break" : "Start Break"}
            </button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>

        {/* Logout Button */}
        <Link to="/employeelogin" className="back-button">
          <ArrowBackIcon className="arrow-icon" />
          Back
        </Link>
      </div>

      {showImageUploadPopup && (
        <ImageUploadPopup
          onClose={handleClose}
          onFileChange={handleFileChange}
          imagePreviewUrl={imagePreviewUrl}
        />
      )}

      {/* Content */}
      <div className="content">
        {/* Left side: Buttons */}
        <div className="left-side">
          {/* Display specific buttons based on employee's position */}
          {selectedEmployee &&
            positionButtons[selectedEmployee.position]?.map((buttonName) => (
              <button
                className="button-profile"
                key={buttonName}
                onClick={() => handleButtonClick(buttonName)}
              >
                {buttonName}
              </button>
            ))}

          {/* Display common buttons for all positions */}
          {commonButtons.map((buttonName) => (
            <button
              className="button-profile"
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
          {selectedForm === "Vacation Allowance Request" && (
            <VacationAllowanceRequest selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Experience Certificate" && (
            <ExperienceCertificate selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Employees Weekly Schedule" && selectedEmployee && (
            <EmployeesWeeklySchedule selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Branch Supervisor Checklist" &&
            selectedEmployee && (
              <BranchSupervisorChecklist selectedEmployee={selectedEmployee} />
            )}
          {selectedForm === "Appreciation Certificate" && selectedEmployee && (
            <AppreciationCertificate selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Warning Letter" && selectedEmployee && (
            <WarningLetter selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Branches Manager Checklist" &&
            selectedEmployee && (
              <BranchManagerChecklist selectedEmployee={selectedEmployee} />
            )}
          {selectedForm === "Employees Weekly Task" && selectedEmployee && (
            <EmployeesWeeklyTask currentBranch={selectedEmployee.branch} />
          )}
          {selectedForm === "Operation Manager Checklist" &&
            selectedEmployee && (
              <OperationManagerChecklist selectedEmployee={selectedEmployee} />
            )}
          {selectedForm === "Employees Rating" && selectedEmployee && (
            <EmployeesRating selectedEmployee={selectedEmployee} />
          )}

          {/* Add more form components as needed */}
        </div>
      </div>
    </div>
  );
}
const ImageUploadPopup = ({
  onClose,
  onFileChange,
  imagePreviewUrl,
}: {
  onClose: () => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreviewUrl: string | null;
}) => {
  return (
    <div className="image-upload-popup">
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={onFileChange} />
      {imagePreviewUrl && (
        <img
          src={imagePreviewUrl}
          alt="Selected Preview"
          style={{ width: "100px", height: "100px", margin: "10px 0" }}
        />
      )}
      <button onClick={onClose}>Submit</button>
    </div>
  );
};

export default ProfilePage;
//   );
// }

// export default ProfilePage;

// const ImageUploadPopup = ({ onClose }: { onClose: () => void }) => {
//   return (
//       <div className="image-upload-popup">
//           <h2>Upload Image</h2>
//           <input type="file" accept="image/*" />
//           <button onClick={onClose}>Close</button>
//       </div>
//   );
// };
