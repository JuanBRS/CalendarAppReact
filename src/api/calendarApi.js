import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();
console.log("VITE_API_URL:::", VITE_API_URL);

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

// todo: configurar interceptores

export default calendarApi;
