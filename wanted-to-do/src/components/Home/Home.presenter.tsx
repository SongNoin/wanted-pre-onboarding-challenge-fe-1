import styled from "styled-components";

interface Props {
  onClickMoveToLogin: () => void;
  onClickMoveToSignUp: () => void;
}

export default function HomeUI({
  onClickMoveToLogin,
  onClickMoveToSignUp,
}: Props) {
  return (
    <>
      <Wrap>
        <button onClick={onClickMoveToLogin}>로그인</button>
        <button onClick={onClickMoveToSignUp}>회원가입</button>
      </Wrap>
    </>
  );
}

const Wrap = styled.div``;
