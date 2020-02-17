export const registerUser = myUser =>
  fetch("http://localhost:8080/authentication/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(myUser)
  });
