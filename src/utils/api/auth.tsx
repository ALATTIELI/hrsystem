import client from "./config.js";
import { Account, Databases, Query, Functions } from "appwrite";

const account = new Account(client);
const databases = new Databases(client);
const functions = new Functions(client);

const APPWRITE_DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const APPWRITE_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const APPWRITE_FUNCTION_ID = import.meta.env.VITE_APPWRITE_FUNCTION_ID;

const loginUsingEmail = async (email: string, password: string) => {
  try {
    const response = await account.createEmailSession(email, password);
    // console.log(response); // Success
    return response;
  } catch (error) {
    // console.log(error); // Failure
    return false;
  }
};

const loginUsingUsername = async (username: string, password: string) => {
  try {
    const query = [
      Query.equal("username", username), // Query documents where 'username' equals the provided username
    ];
    const response = await databases.listDocuments(
      APPWRITE_DB_ID,
      APPWRITE_COLLECTION_ID,
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

export { loginUsingEmail, loginUsingUsername };
