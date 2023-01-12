import styled from "styled-components";

export default function SignUpUI() {
  return (
    <>
      <Wrap>
        <InputWrap>
          <span>이메일</span>
          <input />
        </InputWrap>
        <InputWrap>
          <span>비밀번호</span>
          <input />
        </InputWrap>
        <button>가입하기</button>
      </Wrap>
    </>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
