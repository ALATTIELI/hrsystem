import React from 'react';

interface EmployeeData {
  name: string;
  workPermitNo: string;
  mobileNo: string;
  bankName: string;
  ibanNo: string;
}

interface IBANRegistrationProps {
  selectedEmployee?: EmployeeData;
}

const IBANRegistration: React.FC<IBANRegistrationProps> = ({ selectedEmployee }) => {
  if (!selectedEmployee) {
    return <p>Employee data not provided!</p>;
  }

  const { name, workPermitNo, mobileNo, bankName, ibanNo } = selectedEmployee;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <p>Date: {new Date().toISOString().split('T')[0]}</p>
      <br />

      <p>To,</p>
      <p>WPS Operations,</p>
      <p>Al Ansari Exchange LLC</p>
      <br />

      <p>Subject: IBAN Registration / Bank Transfer through WPS</p>
      <br />

      <p>Dear Sir / Madam,</p>
      <p>
        We request you kindly transfer salaries of our employees as per below details, in accordance with the supporting documents. *
      </p>
      <br />

      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>EMP Name</th>
            <th>Work permit No.</th>
            <th>Mobile No.</th>
            <th>Bank Name</th>
            <th>EMP IBAN NO.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{workPermitNo}</td>
            <td>{mobileNo}</td>
            <td>{bankName}</td>
            <td>{ibanNo}</td>
          </tr>
        </tbody>
      </table>
      <br />

      <p>Best regards,</p>
      <p>PRESTIGE ONE MOBILE PHONES</p>
    </div>
  );
}

export default IBANRegistration;
