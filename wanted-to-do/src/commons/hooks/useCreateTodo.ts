import { useMutation } from "@tanstack/react-query";
import { createTodoApi } from "../api/todos/createTodo";

const useCreateTodo = () => {
  const { mutate, data, isSuccess } = useMutation(
    ["createTodo"],
    (todoData: { title: string; content: string }) => createTodoApi(todoData),
    {
      onSuccess: (data) => {
        alert("할일이 등록되었습니다.");
      },
      onError: () => {
        alert("할일 등록에 실패했습니다.");
      },
    }
  );
  return { mutate, data, isSuccess };
};

export default useCreateTodo;
