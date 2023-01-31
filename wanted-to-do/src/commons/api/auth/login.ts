import axios from "axios";
import { IUserAuth } from "../../types/IUserAuth";

export const loginApi = async (userData: IUserAuth) => {
  const res = await axios.post(`http://localhost:8080/users/login`, userData);
  return res;
};
