import styled from "styled-components";
import { ITodo } from "../../commons/types/ITodo";
import { isLogin } from "../../commons/utils/isLogin";

interface Props {
  onClickMoveToLogin: () => void;
  onClickMoveToSignUp: () => void;
  onClickMoveToLogout: () => void;
  onClickCreateTestTodo: () => void;
  data: ITodo[];
}

export default function HomeUI({
  onClickMoveToLogin,
  onClickMoveToSignUp,
  onClickMoveToLogout,
  onClickCreateTestTodo,
  data,
}: Props) {
  const isAuth = isLogin();
  return (
    <>
      <Wrap>
        <button onClick={isAuth ? onClickMoveToLogout : onClickMoveToLogin}>
          {isAuth ? "로그아웃" : "로그인"}
        </button>
        <button onClick={onClickMoveToSignUp}>회원가입</button>
        <button onClick={onClickCreateTestTodo}>투두 테스트</button>
        {data &&
          data.map((el: any) => {
            return <div>{el.title}</div>;
          })}
      </Wrap>
    </>
  );
}

const Wrap = styled.div``;
