import axios from "axios";
import { IUserAuth } from "../../types/IUserAuth";

export const signUpApi = (newUser: IUserAuth) =>
  axios.post(`http://localhost:8080/users/create`, newUser);
