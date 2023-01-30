import axios from "axios";

export const createTodoApi = async (todoData: {
  title: string;
  content: string;
}) => {
  const res = await axios.post(`http://localhost:8080/todos`, todoData, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
  return res;
};
