import styled from "styled-components";
import { isLogin } from "../../commons/utils/isLogin";

interface Props {
  onClickMoveToLogin: () => void;
  onClickMoveToSignUp: () => void;
  onClickMoveToLogout: () => void;
}

export default function HomeUI({
  onClickMoveToLogin,
  onClickMoveToSignUp,
  onClickMoveToLogout,
}: Props) {
  const isAuth = isLogin();
  return (
    <>
      <Wrap>
        <button onClick={isAuth ? onClickMoveToLogout : onClickMoveToLogin}>
          {isAuth ? "로그아웃" : "로그인"}
        </button>
        <button onClick={onClickMoveToSignUp}>회원가입</button>
      </Wrap>
    </>
  );
}

const Wrap = styled.div``;
