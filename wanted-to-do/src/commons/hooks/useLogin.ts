import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth/login";

const useLogin = () => {
  const { mutate, data, isSuccess } = useMutation(
    ["login"],
    (newUser: { email: string; password: string }) => loginApi(newUser),
    {
      onSuccess: (data) => {
        const token = data.data.token;
        localStorage.setItem("accessToken", token);
        window.location.reload();
        alert("환영합니다");
      },
      onError: () => {
        alert("로그인을 실패했습니다");
      },
    }
  );
  return { mutate, data, isSuccess };
};

export default useLogin;
