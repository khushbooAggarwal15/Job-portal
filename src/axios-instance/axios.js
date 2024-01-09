// api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://81a5-115-240-127-98.ngrok-free.app/api/users/login", // Replace with your API base URL
});

export default instance;
