import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { employeesData } from "./employeedata";
import { useState, useEffect } from "react";
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
import Requests from "./forms/requests";
import { useSelector, useDispatch } from "react-redux";
import { toggleBreakForEmployee } from "../../redux/breakslice"; // Update the path accordingly
import { RootState } from "../../redux/store"; // Update the path accordingly
import { UserDataType, getUserData } from "../../utils/api/auth";
import NoObjectionCertificate from "./forms/NoObjectionCertificate";
import IBANRegistration from "./forms/IBANRegistration";
import MonthlyPerformance from "./forms/MonthlyPerformance";
import PassportHandover from "./forms/PassportHandover";
import SupervisorPerformance from "./forms/SupervisorPerformance";
import EmployeeTransfer from "./forms/EmployeeTransfer";
import EmploymentCertificate from "./forms/EmploymentCertificate";
import CompanyPropertyReceipt from "./forms/CompanyPropertyReceipt";
import DailyTrainingPlan from "./forms/DailyTrainingPlan";
import DeclarationForm from "./forms/DeclarationForm";

interface ProfilePageParams {
  id: string;
}

function ProfilePage() {
  const { id } = useParams() as { id: string };
  // const selectedEmployee = id ? await getUserData(id) : undefined;
  const [selectedEmployee, setSelectedEmployee] = useState<UserDataType>();

  useEffect(() => {
    async function getData(id: string) {
      const response = await getUserData(id);
      if (response) {
        setSelectedEmployee(response);
      }
    }
    getData(id);
  }, [id]);

  const dispatch = useDispatch();
  const breakState = useSelector((state: RootState) => state.break);

  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  // const [breakStatus, setBreakStatus] = useState([
  //   {
  //     name: "",
  //     status: {
  //       isOnBreak: false,
  //       startTime: 0,
  //       endTime: 0,
  //     },
  //   },
  // ]);
  // console.log(breakState);

  // if (selectedEmployee) {
  //   const isOnBreakList = breakStatus.some(
  //     (item) => item.name === selectedEmployee.name
  //   );
  //   console.log(
  //     isOnBreakList
  //       ? `${selectedEmployee.name} is on the break list.`
  //       : `${selectedEmployee.name} is not on the break list.`
  //   );
  // }

  //search if breakStatus list has an object with the name of the selectedEmployee
  //if it does, then set the isOnBreak to true

  const [showImageUploadPopup, setShowImageUploadPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [imageSubmissionTimestamp, setImageSubmissionTimestamp] =
    useState<Date | null>(null);
  const [breakDuration, setBreakDuration] = useState<number>(0);
  const [breakInterval, setBreakInterval] = useState<any>(null);
  const [showClock, setShowClock] = useState(false);

  const handleButtonClick = (formName: string) => {
    console.log("Button clicked with name:", formName);
    setSelectedForm(formName);
  };

  // const toggleBreakForEmployee = () => {
  //   const currentTime = new Date().getTime(); // current time in milliseconds
  //   let updatedStatus = [...breakStatus]; // create a copy of the current breakStatus

  //   // Find the employee in the breakStatus list
  //   const employeeStatus = updatedStatus.find(
  //     (item) => item.name === selectedEmployee?.name
  //   );

  //   if (employeeStatus) {
  //     if (employeeStatus.status.isOnBreak) {
  //       employeeStatus.status.isOnBreak = false;
  //       employeeStatus.status.endTime = currentTime;
  //     } else {
  //       employeeStatus.status.isOnBreak = true;
  //       employeeStatus.status.startTime = currentTime;
  //     }
  //   } else {
  //     // If the employee wasn't in the list, add them
  //     updatedStatus.push({
  //       name: selectedEmployee?.name || "",
  //       status: {
  //         isOnBreak: true,
  //         startTime: currentTime,
  //         endTime: 0,
  //       },
  //     });
  //   }

  //   // Update the state
  //   setBreakStatus(updatedStatus);
  // };

  const toggleBreakForEmployeeRedux = () => {
    if (selectedEmployee) {
      dispatch(toggleBreakForEmployee(selectedEmployee.name));
    }
  };
  const currentEmployeeStatus = breakState.find(
    (item) => item.name === selectedEmployee?.name
  );
  const breakButtonText = currentEmployeeStatus?.status.isOnBreak
    ? "End Break"
    : "Start Break";

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
              `Break Duration: ${Math.floor(breakDuration / 60)
                .toString()
                .padStart(2, "0")}:${(breakDuration % 60)
                .toString()
                .padStart(2, "0")}`}
          </div>

          <div className="fixed-buttons-profile">
            {/* <button onClick={toggleBreak}>
              {isBreakStarted ? "End Break" : "Start Break"}
            </button> */}
            <button onClick={toggleBreakForEmployeeRedux}>
              {breakButtonText}
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
          {selectedForm === "Requests" && selectedEmployee && (
            <Requests selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "No Objection Certificat" && selectedEmployee &&(
            <NoObjectionCertificate selectedEmployee={selectedEmployee} />
          )}
        
          {selectedForm === "Monthly Performance" && selectedEmployee && (
            <MonthlyPerformance selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Passport Handover" && selectedEmployee && (
            <PassportHandover selectedEmployee={selectedEmployee} />
          )}
         
          {selectedForm === "Employee Transfer" && selectedEmployee && (
            <EmployeeTransfer selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Employment Certificate" && selectedEmployee && (
            <EmploymentCertificate selectedEmployee={selectedEmployee} />
          )}
        
          {selectedForm === "Daily Training Plan" && selectedEmployee && (
            <DailyTrainingPlan selectedEmployee={selectedEmployee} />
          )}
          {selectedForm === "Declaration Form" && selectedEmployee && (
            <DeclarationForm selectedEmployee={selectedEmployee} />
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
