import React from 'react';

interface PassportHandoverProps {
  date?: string;
  employeeName?: string;
  employeeIdOrPassportNo?: string;
  reason?: string;
}

const PassportHandover: React.FC<PassportHandoverProps> = ({
  date = "N/A",
  employeeName = "N/A",
  employeeIdOrPassportNo = "N/A",
  reason = "N/A"
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <p>Date: {date}</p>
      <h2>PASSPORT HANDOVER</h2>
      <h2>استلام جواز سفر</h2>

      <h3>Employee Information معلومات الموظف</h3>
      <p>Employee Name: {employeeName}</p>
      <p>اسم الموظف: {employeeName}</p>
      <p>Employee ID \ Passport No: {employeeIdOrPassportNo}</p>
      <p>رقم الهوية / رقم الجواز: {employeeIdOrPassportNo}</p>

      <p>This is certifying that you have received your passport from Prestige One Mobile Phones on {date} for the reason of {reason}.</p>
      <p>اقر بأنني استلمت جواز السفر الخاص بي من برستيج ون للهواتف المتحركة بتاريخ {date} و ذلك من اجل {reason}.</p>

      <p>بتوقيعي أدناه اقر عما ذكر في هذه الرسالة.</p>

      <h3>Signatures التواقيع</h3>
      <p>Mr. Abdulmunim Swedan</p>
      <p>Chief Financial Officer Signature / Date</p>

      <p>Laraine Kris Alcantara</p>
      <p>Hr&Administrative Signature / Date</p>

      <p>Awad Jamal Al Awad</p>
      <p>Operation Manager Signature / Date</p>

      <p>{employeeName}</p>
      <p>Employee Name Signature / Date</p>
    </div>
  );
}

export default PassportHandover;
