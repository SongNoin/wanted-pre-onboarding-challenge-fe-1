import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth/login";

const useLogin = (userData: { email: string; password: string }) => {
  const { data } = useMutation(["login"], () => loginApi(userData));
  return { data };
};

export default useLogin;
