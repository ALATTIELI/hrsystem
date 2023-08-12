export const commonButtons = [
    "Declaration Form",
    "Request Certificates",
    "Leave Request",
    "Yearly Vacation Form"
  ];
  
  export const positionButtons: { [key: string]: string[] } = {
    "OPERATION MANAGER": [
      "Operation Manager Checklist Report", 
      "Rate the Employees", 
      "Warning Letter Form"
    ].concat(commonButtons),
    
    "BRANCH MANAGER": [
      "Branches Manager Checklist Report", 
      "Warning Letter Form", 
      "Create Employees Weekly Tasks"
    ].concat(commonButtons),
    
    "BRANCH SUPERVISOR": [
      "Create the Weekly Schedule of Work for the Employees", 
      "Branch Supervisor Checklist", 
      "Warning Letter Form"
    ].concat(commonButtons),
    
    "EXECUTIVE DIRECTOR": ["Feedback Reports"].concat(commonButtons)
  };
  