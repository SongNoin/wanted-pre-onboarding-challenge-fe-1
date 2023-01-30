import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todos/getTodos";
const useGetTodos = () => {
  const { data, isLoading } = useQuery(["todos"], () => getTodos(), {
    // enabled: !!productId,
  });
  return { data, isLoading };
};

export default useGetTodos;
