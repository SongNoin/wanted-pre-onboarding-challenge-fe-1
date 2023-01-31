import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../api/auth/signUp";
import { IUserAuth } from "../types/IUserAuth";

const useSignUp = () => {
  const { mutate } = useMutation(["signUp"], (newUser: IUserAuth) =>
    signUpApi(newUser)
  );
  return { mutate };
};

export default useSignUp;
