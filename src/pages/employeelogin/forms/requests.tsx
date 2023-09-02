import React from 'react';
import { getRequestStatus as getLeaveRequestStatus } from '../forms/leaverequest';
import { getRequestStatus as getWarningLetterStatus } from '../forms/warningletter';
import { getRequestStatus as getVacationAllowanceRequestStatus } from '../forms/vacationallowancerequest';
import { getRequestStatus as getOperationManagerChecklistStatus } from '../forms/operationmanagerchecklist';
import { getRequestStatus as getEmployeesWeeklyTaskStatus } from '../forms/employeesweeklytask';
import { getRequestStatus as getEmployeesWeeklyScheduleStatus } from '../forms/employeesweeklyschedule';
import { getRequestStatus as getBranchSupervisorChecklistStatus } from '../forms/branchsupervisorchecklist';
import { getRequestStatus as getBranchManagerChecklistStatus } from '../forms/branchmanagerchecklist';
import { getRequestStatus as getAppreciationCertificateStatus } from '../forms/appreciationcertificate';
import { getRequestStatus as getSalaryCertificateStatus } from '../forms/ salarycertificate';




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
  }

  interface RequestsProps {
    selectedEmployee?: Employee; 
}

interface Request {
    type: string;
    status: string;
    time: Date;
}

const requestData: Request[] = [
   getLeaveRequestStatus(),
   getWarningLetterStatus(),
   getVacationAllowanceRequestStatus(),
   getOperationManagerChecklistStatus(),
   getEmployeesWeeklyTaskStatus(),
   getEmployeesWeeklyScheduleStatus(),
   getBranchSupervisorChecklistStatus(),
   getBranchManagerChecklistStatus(),
   getAppreciationCertificateStatus(),
   getSalaryCertificateStatus(),
];

const Requests: React.FC<RequestsProps> = ({ }) => {
    return (
        <div>
            <h2>Request Status</h2>
            <table>
                <thead>
                    <tr>
                        <th>Request Type</th>
                        <th>Submission Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {requestData.map((req, index) => (
                        <tr key={index}>
                            <td>{req.type}</td>
                            <td>{req.time.toLocaleString()}</td>
                            <td>{req.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Requests;
