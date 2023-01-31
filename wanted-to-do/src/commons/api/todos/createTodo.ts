import axios from "axios";
import { ITodo } from "../../types/ITodo";

export const createTodoApi = async (todoData: ITodo) => {
  const res = await axios.post(`http://localhost:8080/todos`, todoData, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
  return res;
};
