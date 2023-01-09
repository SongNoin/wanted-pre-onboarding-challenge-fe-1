export const signUp = () =>
  fetch(`http://localhost:8080/users/create`, { method: "POST" }).then((res) =>
    res.json()
  );
