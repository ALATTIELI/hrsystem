import {Client} from 'appwrite';

// eslint-disable-next-line react-refresh/only-export-components
const ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client();

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

export default client;