import client from "./config.js";
import { Databases, ID } from "appwrite";

const databases = new Databases(client);

const APPWRITE_DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const APPWRITE_LEAVE_REQUESTS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_LEAVE_REQUESTS_COLLECTION_ID;

const createLeaveRequest = async (data: any) => {
  const {
    employee_id,
    employee,
    supervisor,
    substitute,
    startDate,
    endDate,
    reason,
    absenceType,
  } = data;
  const response = await databases.createDocument(
    APPWRITE_DB_ID,
    APPWRITE_LEAVE_REQUESTS_COLLECTION_ID,
    ID.unique(),
    {
      employee_id: employee_id,
      employee: employee,
      supervisor: supervisor,
      substitute: substitute,
      startDate: startDate,
      endDate: endDate,
      reason: reason,
      absenceType: absenceType,
    }
  );

  console.log(response);
};

export { createLeaveRequest };
