import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth/login";

const useLogin = () => {
  const { mutate } = useMutation(
    ["login"],
    (newUser: { email: string; password: string }) => loginApi(newUser)
  );
  return { mutate };
};

export default useLogin;
