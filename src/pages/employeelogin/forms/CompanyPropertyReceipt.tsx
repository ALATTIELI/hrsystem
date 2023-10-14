import React from 'react';

interface CompanyPropertyReturnFormProps {
  employeeName?: string;
  jobTitle?: string;
  manager?: string;
  employeeNumber?: string;
  department?: string;
  items?: { sNo: number }[];
}

const CompanyPropertyReturnForm: React.FC<CompanyPropertyReturnFormProps> = ({
  employeeName = "N/A",
  jobTitle = "N/A",
  manager = "N/A",
  employeeNumber = "N/A",
  department = "N/A",
  items = []
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h2>Company Property Return Form</h2>

      <table>
        <tbody>
          <tr>
            <th>اﳌﻨﺼﺐ اﻟﻮﻇﻴﻔﻲ</th>
            <th>Job Title</th>
            <td>{jobTitle}</td>
          </tr>
          <tr>
            <th>اﺳﻢ اﳌﻮﻇﻒ</th>
            <th>Employee Name</th>
            <td>{employeeName}</td>
          </tr>
          <tr>
            <th>اﳌﺪﻳﺮ اﳌﺒﺎﺷﺮ</th>
            <th>Manager</th>
            <td>{manager}</td>
          </tr>
          <tr>
            <th>رﻗﻢ اﳌﻮﻇﻒ</th>
            <th>Employee Number</th>
            <td>{employeeNumber}</td>
          </tr>
          <tr>
            <th>اﻟﻘﺴﻢ/اﳌﺸﺮوع</th>
            <th>Department/Project</th>
            <td>{department}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>S. No</th>
            <th>و  ف ا د</th>
            <th>Item Details</th>
            <th>ر  ا ~ ر ع</th>
            <th>Quantity</th>
            <th>Date Returned</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={item.sNo}>
              <td>{item.sNo}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        ﳛﺐ إﻋﺘﻤﺎد اﳌﺪﻳﺮ اﳌﺒﺎﺷﺮ ﻋﻠﻰ ﲨﻴﻊ اﻟﺒﻨﻮد ﻋﻨﺪ إﻋﺎدة ﻫﺬﻩ اﳌﻤﺘﻠﻜﺎت اﱃ اﻟﺸﺮﻛﺔ.
        On the final day of employment (if not received back before) each item should be signed off as returned by the
        supervisor and this form signed by him and the employee.
      </p>

      <h3>UNDERTAKING تــــﻌــﻬــﺪ</h3>
      <p>
        ﻟﻘﺪ اﺳﺘﻠﻤﺖ ﳑﺘﻠﻜﺎت اﻟﺸﺮﻛﺔ اﳌﺬﻛﻮرة أﻋﻼﻩ. أواﻓﻖ ﻋﻠﻰ اﳊﻔﺎظ ﻋﻠﻰ ﳑﺘﻠﻜﺎت اﻟﺸﺮﻛﺔ ﰲ ﺣﺎﻟﺔ ﺟﻴﺪة وإﻋﺎدﺎ ﻟﻠﺸﺮﻛﺔ ﻋﻨﺪ إﻧﺘﻬﺎء اﻟﻌﻤﻞ أوﰲ ﺣﺎﻟﺔ ﻃﻠﺐ اﳌﺪﻳﺮ اﳌﺒﺎﺷﺮ ﺑﺬﻟﻚ.
        I acknowledge receipt of the above listed company property. I agree to maintain the property in good condition and to return it when I terminate employment with the company or when requested by my supervisor. In addition, if I no longer need any of the items, I will report this information to my supervisor. I agree to notify the company if any of the items are damaged, destroyed, or lost.
      </p>

      <div>
        <label>Date & Signature اﻟﺘﺎرﻳﺦ واﻟﺘﻮﻗﻴﻊ:</label>
        <input type="text" />
      </div>
      <div>
        <label>Received by اﳌﺴﺘﻠﻢ:</label>
        <input type="text" />
      </div>
      <div>
        <label>Approval by أﻋﺘﻤﺎد ﻣﺪﻳﺮ اﻟﻌﻬﺪ:</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default CompanyPropertyReturnForm;
