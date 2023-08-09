import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { employeesData } from "./employeedata";
import { useState } from "react";

function ProfilePage() {
  // Get the employee ID from the URL params
  const { id } = useParams();

  // Fetch employee data based on the ID
  const selectedEmployee = id
    ? employeesData.find((employee) => employee.id === parseInt(id))
    : undefined;

  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const handleButtonClick = (formName: string) => {
    setSelectedForm(formName);
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="header">
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
          <button onClick={() => handleButtonClick("form1")}>Button 1</button>
          <button onClick={() => handleButtonClick("form2")}>Button 2</button>
          {/* ... and so on */}
        </div>

        {/* Right side: Form */}
        <div className="right-side">
          {selectedForm === "form1" && (
            <div className="form">
              <h2>Form 1</h2>
              <form>
                <label>
                  Field 1:
                  <input type="text" />
                </label>
                <label>
                  Field 2:
                  <input type="text" />
                </label>
                <button>Submit Form 1</button>
              </form>
            </div>
          )}
          {selectedForm === "form2" && (
            <div className="form">
              <h2>Form 2</h2>
              <form>
                <label>
                  Field 3:
                  <input type="text" />
                </label>
                <label>
                  Field 4:
                  <input type="text" />
                </label>
                <button>Submit Form 2</button>
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
