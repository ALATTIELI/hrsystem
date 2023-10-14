import React from 'react';

interface EmployeeTransferProps {
  date?: string;
  employeeName?: string;
  fromBranch?: string;
  toBranch?: string;
  transferDate?: string;
}

const EmployeeTransfer: React.FC<EmployeeTransferProps> = ({
  date = "N/A",
  employeeName = "N/A",
  fromBranch = "N/A",
  toBranch = "N/A",
  transferDate = "N/A"
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <p>{date}</p>
      <h2>MR. {employeeName}</h2>
      <h3>Subject: Transfer of an employee</h3>
      
      <p>It has been decided to transfer you from {fromBranch} to {toBranch} starting from {transferDate}.</p>
      <p>Thank You</p>

      <div style={{ marginTop: '30px' }}>
        <p>AWAD JAMAL AL AWAD</p>
        <p>Operation Manager</p>
        <label>Signature / Date:</label>
        <input type="text" />

        <p>LARAINE ALCANTARA</p>
        <p>Hr&Adminstrative</p>
        <label>Signature / Date:</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default EmployeeTransfer;
