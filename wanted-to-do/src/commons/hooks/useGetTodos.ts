import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todos/getTodos";
const useGetTodos = () => {
  const { data, isLoading } = useQuery(["todos"], () => getTodos());
  const todoData = data?.data.data;
  return { todoData, isLoading };
};

export default useGetTodos;
