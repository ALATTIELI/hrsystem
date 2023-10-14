import React from 'react';

interface EmploymentCertificateProps {
  employeeName?: string;
  employeeID?: string;
  position?: string;
  startDate?: string;
  endDate?: string;  // Use "Present" if currently employed
  salary?: string;
}

const EmploymentCertificate: React.FC<EmploymentCertificateProps> = ({
  employeeName = "N/A",
  employeeID = "N/A",
  position = "N/A",
  startDate = "N/A",
  endDate = "N/A",
  salary = "N/A"
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h2>CERTIFICATE OF EMPLOYMENT</h2>
      <p>To Whom It May Concern,</p>
      
      <p>
        This is to certify that {employeeName}, with {employeeID}, has been employed with Prestige One Mobile Phones - Branch as an {position} from {startDate} – {endDate}. {employeeName} has consistently demonstrated exceptional skills and dedication in the assembly and testing of electrical equipment.
      </p>
      
      <h3>Key Details of Employment:</h3>
      <ul>
        <li>Employee Name: {employeeName}</li>
        <li>Employee ID/Employee Number: {employeeID}</li>
        <li>Position: {position}</li>
        <li>Date of Commencement: {startDate} - {endDate}</li>
        <li>Current Monthly Salary: {salary}</li>
      </ul>

      <p>
        Throughout her employment, {employeeName} consistently met and often exceeded performance expectations. Her attention to detail, technical skills, and teamwork significantly contributed to the success of our operations.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <div>
          <p>Laraine Kris S. Alcantara</p>
          <p>Hr&Administrative</p>
        </div>
        <div>
          <p>Abdulmunim Swedan</p>
          <p>Chief Financial Officer</p>
        </div>
      </div>
    </div>
  );
}

export default EmploymentCertificate;
