export const login = () =>
  fetch(`http://localhost:8080/users/login`, { method: "POST" }).then((res) =>
    res.json()
  );
