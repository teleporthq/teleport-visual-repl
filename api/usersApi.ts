export const handleAuthentication = (myUser, path) =>
  fetch(`http://localhost:8080/authentication/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(myUser)
  });
