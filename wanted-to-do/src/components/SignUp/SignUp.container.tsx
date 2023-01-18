import { useState } from "react";
import { emailRegex, passwordRegex } from "../../commons/utils/regrex";
import SignUpUI from "./SignUp.presenter";

export default function SignUpContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorTxt, setEmailErrorTxt] = useState("");
  const [passwordErrorTxt, setPasswordErrorTxt] = useState("");

  const isVerifySignupForm =
    email !== "" &&
    password !== "" &&
    emailErrorTxt === "" &&
    passwordErrorTxt === "";

  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setEmailErrorTxt("이메일을 입력해주세요");
      return;
    }

    if (!emailRegex.test(e.target.value)) {
      setEmailErrorTxt("이메일 형식으로 입력해주세요 ex) wanted@naver.com");
      return;
    }

    setEmailErrorTxt("");

    setEmail(e.target.value);
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setPasswordErrorTxt("비밀번호를 입력해주세요");
      return;
    }

    if (!passwordRegex.test(e.target.value)) {
      setPasswordErrorTxt("비밀번호를 8자 이상, 영문숫자조합으로 입력해주세요");
      return;
    }
    setPasswordErrorTxt("");

    setPassword(e.target.value);
  }

  function onClickSignUp() {
    fetch(`http://localhost:8080/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  return (
    <SignUpUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailErrorTxt={emailErrorTxt}
      passwordErrorTxt={passwordErrorTxt}
      onClickSignUp={onClickSignUp}
      isVerifySignupForm={isVerifySignupForm}
    />
  );
}
