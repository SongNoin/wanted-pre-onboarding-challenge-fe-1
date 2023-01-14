import { useState } from "react";
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
    } else if (!e.target.value.includes("@") || !e.target.value.includes(".")) {
      setEmailErrorTxt("이메일 형식으로 입력해주세요 ex) wanted@naver.com");
    } else setEmailErrorTxt("");
    setEmail(e.target.value);
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setPasswordErrorTxt("비밀번호를 입력해주세요");
    } else if (e.target.value.length < 8) {
      setPasswordErrorTxt("비밀번호를 8자 이상 입력해주세요");
    } else setPasswordErrorTxt("");

    setPassword(e.target.value);
  }

  function onClickSignUp() {
    fetch(`http://localhost:8080/users/create`, {
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
