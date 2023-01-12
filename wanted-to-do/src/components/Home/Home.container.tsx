import { useNavigate } from "react-router-dom";
import HomeUI from "./Home.presenter";

export default function HomeContainer() {
  const navigate = useNavigate();

  function onClickMoveToLogin() {
    navigate("/login");
  }

  function onClickMoveToSignUp() {
    navigate("/signup");
  }

  return (
    <HomeUI
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
