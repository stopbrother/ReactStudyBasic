import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:5000/todos",
});

export const getTodos = async () => {
  const { data } = axios.todoClient.get("/");
  return data;
};

export const getTodoDetail = async (id) => {
  const { data } = axios.todoClient.get(`/${id}`);
  return data;
};

export const postTodo = async (newTodoObj) => {
  const { data } = axios.todoClient.post("/", newTodoObj);
  return data;
};

export const toggleTodo = async (id, completed) => {
  const { data } = axios.todoClient.patch(`/${id}`, { completed });
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = axios.todoClient.delete(`/${id}`);
  return data;
};
