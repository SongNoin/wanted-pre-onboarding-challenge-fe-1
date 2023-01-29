export const isLogin = () => {
  const token = localStorage.getItem("accessToken");

  return token === "" ? false : true;
};
