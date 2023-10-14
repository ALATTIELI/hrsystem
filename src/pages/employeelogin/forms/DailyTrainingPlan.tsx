import React, { useState } from 'react';

interface TrainingPlan {
  time: string;
  task: string;
  duration: string;
  signature: string;
}

const DailyTrainingPlan: React.FC = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [department, setDepartment] = useState('');
  const [trainingContact, setTrainingContact] = useState('');
  const [date, setDate] = useState('');
  const [goals, setGoals] = useState('');
  
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan[]>([
    { time: '', task: '', duration: '', signature: '' }
  ]);

  const handleInputChange = (index: number, field: keyof TrainingPlan, value: string) => {
    const newTrainingPlan = [...trainingPlan];
    newTrainingPlan[index][field] = value;
    setTrainingPlan(newTrainingPlan);
  };

  const addTrainingRow = () => {
    setTrainingPlan([...trainingPlan, { time: '', task: '', duration: '', signature: '' }]);
  };

  return (
    <div>
      <h2>DAILY TRAINING PLAN</h2>

      <div>
        <label>EMPLOYEE NAME:</label>
        <input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />

        <label>DEPARTMENT:</label>
        <input value={department} onChange={(e) => setDepartment(e.target.value)} />

        <label>DATE:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label>TRAINING CONTACT:</label>
        <input value={trainingContact} onChange={(e) => setTrainingContact(e.target.value)} />
      </div>

      <div>
        <label>GOALS / DESIRED OUTCOME:</label>
        <textarea value={goals} onChange={(e) => setGoals(e.target.value)} />
      </div>

      <table>
        <thead>
          <tr>
            <th>TIME</th>
            <th>TASK</th>
            <th>DURATION</th>
            <th>SIGNATURE</th>
          </tr>
        </thead>
        <tbody>
          {trainingPlan.map((plan, idx) => (
            <tr key={idx}>
              <td>
                <input
                  type="time"
                  value={plan.time}
                  onChange={(e) => handleInputChange(idx, 'time', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={plan.task}
                  onChange={(e) => handleInputChange(idx, 'task', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={plan.duration}
                  onChange={(e) => handleInputChange(idx, 'duration', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={plan.signature}
                  onChange={(e) => handleInputChange(idx, 'signature', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addTrainingRow}>Add Row</button>

      <div>
        <p>Prepared by: Syam Kumar</p>
        <p>Operation Manager: Awad Jamal Al Awad</p>
        <p>Hr&Administrative: Laraine Kris Alcantara</p>
      </div>
    </div>
  );
};

export default DailyTrainingPlan;
