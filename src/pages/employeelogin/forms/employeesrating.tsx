import React, { useState } from "react";
import { employeesData } from "../employeedata";
import "./employeesrating.css";

interface EmployeesRatingProps {
  selectedEmployee: {
    id: number;
    name: string;
    position: string;
    photoUrl: string;
    username: string;
    password: string;
    branch: string;
    nationality: string;
    idnumber: string;
    passportnumber: string;
    joiningdate: string;
    salary: string;
  };
}

interface Rate {
  employeeId: number;
  rating: number;
}

const EmployeesRating: React.FC<EmployeesRatingProps> = ({
  selectedEmployee,
}) => {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [ratings, setRatings] = useState<Rate[]>([]);

  // Extract unique branches from employeesData
  const uniqueBranches = [
    ...new Set(employeesData.map((employee) => employee.branch)),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(ratings);
  };

  const handleRatingChange = (employeeId: number, newRating: number) => {
    setRatings((prevRatings) => {
      const existingRating = prevRatings.find(
        (rate) => rate.employeeId === employeeId
      );

      if (existingRating) {
        existingRating.rating = newRating;
        return [...prevRatings];
      } else {
        return [...prevRatings, { employeeId, rating: newRating }];
      }
    });
  };

  return (
    <form className="employee-profile-form" onSubmit={handleSubmit}>
      <h2>Rate Employee: {selectedEmployee.name}</h2>

      <div className="branch-selection">
        <label>Select Branch: </label>
        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          <option value="" disabled>
            Select a branch
          </option>
          {uniqueBranches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      {selectedBranch && (
        <div>
          <h4>Employees in {selectedBranch}:</h4>
          <ul>
            {employeesData
              .filter((emp) => emp.branch === selectedBranch)
              .map((emp) => (
                <li key={emp.id}>
                  {emp.name}
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Rate 1-5"
                    onChange={(e) =>
                      handleRatingChange(emp.id, Number(e.target.value))
                    }
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
      <button type="submit">Submit Ratings</button>
    </form>
  );
};

export default EmployeesRating;
