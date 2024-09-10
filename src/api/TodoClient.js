import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:5000/todos",
});
