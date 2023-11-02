import React from "react";
import "./ salarycertificate.css";
import { UserDataType } from "../../../utils/api/auth";

interface SalaryCertificateProps {
  selectedEmployee?: UserDataType;
}
export const getRequestStatus = () => {
  // This is mock data. You'd replace this with actual data retrieval logic.
  return {
      type: "Salary Certificate",
      status: "Pending", // Replace with actual status
      time: new Date(), // Replace with actual submission date
  };
}
const SalaryCertificate: React.FC<SalaryCertificateProps> = ({ selectedEmployee }) => {
  const employee = selectedEmployee;

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <form className="employee-profile-form">
      <div className="salary-certificate-form">
        <p className="date">Date: October 07, 2023</p>
        <h2 className="text-center-arabic">شهادة راتب</h2>
        <h2 className="text-center">Salary Certificate</h2>

        <p className="text-center">
          PRESTIGE YAS PHONE - SOLE PROPRIETORSHIP L.L.C
          <br />
          نشهد نحن برستيج ياس فون - شركة الشخص الواحد ذ م م
        </p>

        <p className="double-gap">
          hereby certifies that the following employee is currently employed in the Company as per the following details:
          <br />
          بأن الموظف صاحب البيانات المذكورة ادناه يعمل لدينا ولا يزال على رأس عمله:
        </p>

        <div className="info-pair">
          <div className="label">Employee Name:</div>
          <p>{employee.name}	اسم الموظف:</p>
        </div>

        <div className="info-pair">
          <div className="label">Nationality:</div>
          <p>{employee.nationality} الجنسية:</p>
        </div>

        <div className="info-pair">
          <div className="label">ID Number:</div>
          <p>{employee.idnumber} رقم الهوية:</p>
        </div>

        <div className="info-pair">
          <div className="label">Passport Number:</div>
          <p>{employee.passportnumber} رقم جواز السفر:</p>
        </div>

        <div className="info-pair">
          <div className="label">Joining Date:</div>
          <p>{employee.joiningdate} تاريخ التعيين:</p>
        </div>

        <div className="info-pair">
          <div className="label">Monthly Net Salary in AED:</div>
          <p>{employee.salary} الراتب الإجمالي بالدرهم الاماراتي:</p>
        </div>

        <div className="info-pair">
          <div className="label">Job Title:</div>
          <p>{employee.position} المسمى الوظيفي:</p>
        </div>

        <p className="double-gap">
          This certificate is hereby issued as per the employee request, without any liability for third party rights.
          <br />
          وقد أعطيت له هذه الشهادة بناء على طلبه دون تحمل أي مسئولية تجاه الغير.
        </p>

        <p className="text-center">
          برستيج ياس فون - شركة الشخص الواحد ذ م م
          <br />
          PRESTIGE YAS PHONE - SOLE PROPRIETORSHIP L.L.C
        </p>

        <p className="gap">
          هذه الشهادة صالحة لمدة شهر من تاريخ إصدارها و أي تغيير يطرأ عليها يلغيها.
          <br />
          This certificate is valid for one month from issue date, and any alteration will void it.
        </p>

        <div className="footer-signatures">
          <div>
            Laraine Kris S. Alcantara
            <br />
            Hr&Administrative
          </div>
          <div>
            Mr. Abdulmunim Swedan
            <br />
            Chief Financial Officer
          </div>
        </div>

        <p className="text-center-arabic">وثيقة الكترونية معتمدة</p>
        <p className="text-center">Approved Electronic Document</p>
      </div>
    </form>
  );
};

export default SalaryCertificate;
