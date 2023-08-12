export const commonButtons = [
  "Leave Request",
  "Salary Certificate",
  "Yearly Vacation Form",
  "Experience Certificate",
  "Vacation Allowance Request",
];

export const positionButtons: { [key: string]: string[] } = {
  "OPERATION MANAGER": [
    "Operation Manager Checklist Report",
    "Rate the Employees",
    "Warning Letter Issue Form",
  ].concat(commonButtons),

  "BRANCH MANAGER": [
    "Branches Manager Checklist Report",
    "Warning Letter Form",
    "Create Employees Weekly Tasks",
  ].concat(commonButtons),

  "BRANCH SUPERVISOR": [
    "Create the Weekly Schedule of Work for the Employees",
    "Branch Supervisor Checklist",
    "Warning Letter Issue Form",
    "Appreciation Certificate",
  ].concat(commonButtons),

  "EXECUTIVE DIRECTOR": ["Feedback Reports"].concat(commonButtons),
};
