import React from 'react';

const SupervisorPerformance: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <p>Date: July 11, 2023</p>
      <h2>Supervisor & Branch Manager Performance</h2>
      
      <ol>
        <li>Does your manager encourage teamwork and good working relationships?</li>
        <li>Are the metrics used to measure your performance thoroughly explained?</li>
        <li>Does your team manager handle conflicts effectively?</li>
        <li>Does your manager maintain a positive work attitude?</li>
        <li>Does your manager demonstrate a good work ethic?</li>
      </ol>

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
          {["Dependable", "Shows problem solving", "Works well in a team", "Takes initiative", "Produces high quality work", "Shows leadership", "Communication ability"].map(attribute => (
            <tr key={attribute}>
              <td>{attribute}</td>
              <td><input type="radio" name={attribute} value="Above Average" /></td>
              <td><input type="radio" name={attribute} value="Average" /></td>
              <td><input type="radio" name={attribute} value="Below Expectations" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <label>Employee Name / Date:</label>
        <input type="text" />
        <label>Signature:</label>
        <input type="text" />

        <label>Operation Manager / Date:</label>
        <input type="text" />
        <label>Signature:</label>
        <input type="text" />
        <p>AWAD JAMAL AL AWAD</p>

        <label>Hr&Administrative / Date:</label>
        <input type="text" />
        <label>Signature:</label>
        <input type="text" />
        <p>LARAINE ALCANTARA</p>
      </div>
    </div>
  );
}

export default SupervisorPerformance;
