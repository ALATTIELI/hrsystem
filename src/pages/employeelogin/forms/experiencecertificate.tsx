import React from "react";
import "./experiencecertificate.css";
import { UserDataType } from "../../../utils/api/auth";

interface ExperienceCertificateProps {
  selectedEmployee?: UserDataType;
}

const today = new Date();
const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
  today.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}/${today.getFullYear()}`;

const ExperienceCertificate: React.FC<ExperienceCertificateProps> = ({
  selectedEmployee,
}) => {
  const employee = selectedEmployee;

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div className="experience-certificate-form">
      <h2 className="text-center">Certificate of Experience</h2>
      <h3 className="text-center">شهادة خبرة</h3>

      <p className="text-center">
        Company Name: {employee.branch} <br />
        اسم الشركة: برستيج ون للهواتف المتحركة
      </p>

      <p className="text-center">
        Abu Dhabi – {formattedDate} <br />
        ابوظبي – {formattedDate}
      </p>

      <p>
        Prestige One Mobile Phones: <br />
        تشهد (برستيج ون للهواتف المتحركة) بأن: {employee.name}
      </p>

      <div className="employment-details">
        <p>
          He Was Working for us as a (Stall and Market Salesperson) During the Period <br />
          السيد. {employee.name} <br />
          كان يعمل بمهنة بائع الأكشاك و الأسواق
        </p>

        <p>
          Hiring Date: 05-06-2017 Till Date of: 31-07-2023 <br />
          تاريخ التعيين: 05-06-2017 <br />
          حتى تاريخ: 31-07-2023
        </p>

        <p>
          Last job he was held (Branch Supervisor) <br />
          و كان اخر منصب يشغله هو (مسؤول فرع)
        </p>
      </div>

      <p>
        He has performed her duties with the company with efficiency and sincerity. We witness her good behavior and work performance. <br />
        و لقد ادى مهام عمله لدى الشركة بكل كفاءة و اخلاص و نشهد له بحسن السلوك و اداء العمل
      </p>

      <p>
        This certificate was granted upon its request without bearing company the slightest responsibility towards the rights of third parties. <br />
        إدارة الشركة
      </p>

      <p className="text-center">Company Management</p>
    </div>
  );
};

export default ExperienceCertificate;
