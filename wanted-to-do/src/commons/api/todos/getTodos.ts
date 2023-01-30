import axios from "axios";

export const getTodos = async () =>
  await axios.get("http://localhost:8080/todos", {
    headers: { Authorization: localStorage.getItem("accessToken") },
  });
