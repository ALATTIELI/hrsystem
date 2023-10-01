import client from "./config.js";
import { Account, Databases, Query, Functions } from "appwrite";

const account = new Account(client);
const databases = new Databases(client);
const functions = new Functions(client);

const APPWRITE_DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const APPWRITE_BRANCH_CREDS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_BRANCH_CREDS_COLLECTION_ID;
const APPWRITE_EMPLOYEES_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_EMPLOYEES_COLLECTION_ID;
const APPWRITE_FUNCTION_ID = import.meta.env.VITE_APPWRITE_FUNCTION_ID;

const loginUsingEmail = async (email: string, password: string) => {
  try {
    const response = await account.createEmailSession(email, password);
    // console.log(response); // Success
    console.log(response.userId);

    const userData = await getUserData(response.userId);
    return { res: response, data: userData };
  } catch (error) {
    // console.log(error); // Failure
    return { res: false, data: null };
  }
};

const loginUsingUsername = async (username: string, password: string) => {
  try {
    const query = [
      Query.equal("username", username), // Query documents where 'username' equals the provided username
    ];
    const response = await databases.listDocuments(
      APPWRITE_DB_ID,
      APPWRITE_BRANCH_CREDS_COLLECTION_ID,
      query
    );
    const { documents: users } = response;

    if (users.length === 0) {
      // User not found
      console.error("User not found");
      return false;
    }
    // Compare the hashed password with the user's input
    const user = users[0];

    const promise = await functions.createExecution(
      APPWRITE_FUNCTION_ID,
      JSON.stringify({
        password: password,
        hashedPassword: user.password,
      }),
      false,
      "/",
      "POST",
      {
        "content-type": "application/json",
      }
    );

    if (promise.status === "completed") {
      const responseBody = JSON.parse(promise.responseBody);
      const isMatch = responseBody.result;

      return isMatch;
    }
  } catch (error) {
    console.log(error); // Failure
    return false;
  }
};

interface UserData {
  $id: string;
  name: string;
  position: string;
  username: string;
  branch: string;
  nationality: string;
  photoUrl: string;
  idnumber: number;
  passportnumber: string;
  joiningdate: string;
  salary: number;
}
const user: UserData = {
  $id: "6518c9950da49565bd79",
  name: "Jane Smith",
  position: "OPERATION MANAGER",
  photoUrl: "/assets/ven.jpg",
  username: "jane", // Add username field
  branch: "MBZ",
  nationality: "USA",
  idnumber: 784200012345678,
  passportnumber: "N123456789",
  joiningdate: "01/01/2021",
  salary: 1000,
};
const getUserData = async (id: string) => {
  const response = await databases.getDocument(
    APPWRITE_DB_ID,
    APPWRITE_EMPLOYEES_COLLECTION_ID,
    id
  );
  const {
    $id,
    name,
    position,
    photoUrl,
    username,
    branch,
    nationality,
    idnumber,
    passportnumber,
    joiningdate,
    salary,
  } = response;

  const currentUser: UserData = {
    $id,
    name,
    position,
    photoUrl,
    username,
    branch,
    nationality,
    idnumber,
    passportnumber,
    joiningdate,
    salary,
  };
  return currentUser;
};

export type UserDataType = typeof user;

export { loginUsingEmail, loginUsingUsername, getUserData };
