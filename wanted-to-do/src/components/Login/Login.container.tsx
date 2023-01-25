import { useState } from "react";
import useLogin from "../../commons/hooks/useLogin";
import LoginUI from "./Login.presenter";

export default function LoginContainer() {
  const { mutate } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onClickLogin() {
    mutate({ email, password });
  }

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
