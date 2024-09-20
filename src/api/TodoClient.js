import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:5000/todos",
});

export const getTodos = async (filter) => {
  const searchParams = new URLSearchParams();

  if (filter === "completed") {
    searchParams.append("completed", true);
  }
  if (filter === "pending") {
    searchParams.append("completed", false);
  }

  const { data } = await todoClient.get(`?${searchParams.toString()}`);
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
