import React from 'react';

interface MonthlyPerformanceProps {
  branchName?: string;
  date?: string;
  shopSupervisor?: string;
}

const MonthlyPerformance: React.FC<MonthlyPerformanceProps> = ({ branchName, date, shopSupervisor }) => {
  
  const attributes = [
    "Dependable/Reliable",
    "Shows Problem Solving",
    "Works Well in A Team",
    "Takes Initiative",
    "Produces High Quality Work",
    "Shows Leadership",
    "Communication Ability",
    "Customer Service",
    "Sales Performance",
    "Cash Handling",
    "Product Knowledge"
  ];
  
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h3>MONTHLY PERFORMANCE</h3>
      <p>Branch Name: {branchName || 'N/A'}</p>
      <p>Date: {date || 'N/A'}</p>
      <p>Shop Supervisor: {shopSupervisor || 'N/A'}</p>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Above Average</th>
            <th>Average</th>
            <th>Below Expectations</th>
          </tr>
        </thead>
        <tbody>
          {attributes.map(attr => (
            <tr key={attr}>
              <td>{attr}</td>
              <td><input type="radio" name={attr} value="Above Average" /></td>
              <td><input type="radio" name={attr} value="Average" /></td>
              <td><input type="radio" name={attr} value="Below Expectations" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Note: FYI This chart is only bases to their monthly performance.</p>
      
      <div>
        <label>Prepared by:</label>
        <input type="text" placeholder="Enter Name" />
      </div>
      <div>
        <label>Submitted to:</label>
        <input type="text" placeholder="Enter Name" />
      </div>
    </div>
  );
}

export default MonthlyPerformance;
