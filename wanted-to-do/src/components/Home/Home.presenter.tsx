import styled from "styled-components";
import { isLogin } from "../../commons/utils/isLogin";

interface Props {
  onClickMoveToLogin: () => void;
  onClickMoveToSignUp: () => void;
  onClickMoveToLogout: () => void;
  onClickCreateTestTodo: () => void;
  data: any;
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
        {data.map((el: any) => {
          return <div>{el.content}</div>;
        })}
      </Wrap>
    </>
  );
}

const Wrap = styled.div``;
