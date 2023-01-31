import { useNavigate } from "react-router-dom";
import useCreateTodo from "../../commons/hooks/useCreateTodo";
import useGetTodos from "../../commons/hooks/useGetTodos";
import HomeUI from "./Home.presenter";

export default function HomeContainer() {
  const navigate = useNavigate();
  const { todoData, isLoading } = useGetTodos();
  const { mutate: onMutateCreateTodo } = useCreateTodo();

  function onClickMoveToLogin() {
    navigate("/login");
  }

  function onClickMoveToSignUp() {
    navigate("/signup");
  }

  function onClickMoveToLogout() {
    localStorage.setItem("accessToken", "");
    window.location.reload();
  }

  function onClickCreateTestTodo() {
    onMutateCreateTodo({ title: "test", content: "test" });
  }

  return (
    <HomeUI
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickMoveToLogout={onClickMoveToLogout}
      onClickCreateTestTodo={onClickCreateTestTodo}
      data={todoData}
    />
  );
}
