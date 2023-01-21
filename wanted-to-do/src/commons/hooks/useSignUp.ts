import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../api/auth/signUp";

const useSignUp = () => {
  const { mutate } = useMutation(
    ["signUp"],
    (newUser: { email: string; password: string }) => signUpApi(newUser)
  );
  return { mutate };
};

export default useSignUp;
