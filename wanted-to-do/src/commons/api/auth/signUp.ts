import axios from "axios";

export const signUpApi = (newUser: { email: string; password: string }) =>
  axios.post(`http://localhost:8080/users/create`, newUser);
