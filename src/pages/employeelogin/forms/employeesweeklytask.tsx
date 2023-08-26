import React, { useState } from "react";
import { employeesData } from "../employeedata";
import "./employeesWeeklyTask.css";

interface Employee {
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
  // add any other fields here
}

interface Props {
  currentBranch: string;
}

interface Task {
  employeeId: number;
  taskName: string;
  description: string;
  dueDate: string;
}

const EmployeeWeeklyTask: React.FC<Props> = ({ currentBranch }) => {
  const [, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState({
    taskName: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setCurrentTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddTask = (employee: Employee) => {
    const newTask: Task = {
      employeeId: employee.id,
      taskName: currentTask.taskName,
      description: currentTask.description,
      dueDate: currentTask.dueDate,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setCurrentTask({ taskName: "", description: "", dueDate: "" }); // clear the inputs after adding
  };

  return (
    <form className="employee-profile-form">
      <div className="task-form">
        <h1>Employees Weekly Task</h1>

        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Task Name</th>
              <th>Task Description</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeesData
              .filter((emp) => emp.branch === currentBranch)
              .map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Task Name"
                      name="taskName"
                      value={currentTask.taskName}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <textarea
                      placeholder="Task Description"
                      name="description"
                      value={currentTask.description}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="dueDate"
                      value={currentTask.dueDate}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleAddTask(employee)}>
                      Add Task
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default EmployeeWeeklyTask;
