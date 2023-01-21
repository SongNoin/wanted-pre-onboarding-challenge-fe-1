import axios from "axios";

export const loginApi = async (userData: {
  email: string;
  password: string;
}) => {
  await axios.post(`http://localhost:8080/users/login`, userData);
};
