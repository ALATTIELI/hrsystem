import React from "react";
import { UserDataType } from "../../../utils/api/auth";

interface Props {
  selectedEmployee: UserDataType;
}

export const getRequestStatus = () => {
  // This is mock data. You'd replace this with actual data retrieval logic.
  return {
      type: "Vacation Allowance Request",
      status: "Pending", // Replace with actual status
      time: new Date(), // Replace with actual submission date
  };
}
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

const VacationAllowance: React.FC<Props> = ({ selectedEmployee }) => {

  return (
    <div className="vacation-allowance">
      <p>{formattedDate}</p>

      <h2 className="text-center-arabic">مستحقات بدل الاجازة</h2>
      <h2 className="text-center">Vacation allowance dues</h2>

      <h3 className="text-center-arabic">جدول البيانات</h3>
      <h3 className="text-center">Data table</h3>

      <table>
        <tbody>
          <tr>
            <td>Employee Name</td>
            <td>{selectedEmployee.name}</td>
            <td>اسم الموظف</td>
          </tr>
          <tr>
            <td>Identification Number</td>
            <td>{selectedEmployee.idnumber}</td>
            <td>رقم الهوية</td>
          </tr>
          <tr>
            <td>Workplace</td>
            <td>MAIN BRANCH & OFFICE</td>
            <td>مكان العمل</td>
          </tr>
          <tr>
            <td>Job title</td>
            <td>SALES AND MARKET SALESPERSON</td>
            <td>المسمى الوظيفي</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>INDIAN</td>
            <td>الجنسية</td>
          </tr>
          <tr>
            <td>The due date of the vacation allowance salary</td>
            <td>From October 11, 2022 To October 10, 2023</td>
            <td>تاريخ استحقاق راتب بدل الاجازة</td>
          </tr>
        </tbody>
      </table>

      <p>
        اقر أنا ، الموقع أدناه / الموقعة ادناه ، باستلام مستحقات بدل إجازة من الكفيل مبلغ وقدره 1000 درهم 
        <br />
        I acknowledge, the undersigned / undersigned, acknowledge receipt of my vacation salary from the sponsor.
      </p>

      <div className="signature-block">
        <label>Signature Employee:</label>
        <br />
        <input type="text" placeholder="Signature" />
      </div>
    </div>
  );
};

export default VacationAllowance;
