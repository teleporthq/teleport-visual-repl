export const saveUidl = (uidl, token) => {
  return fetch(`http://localhost:8080/uidl/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "access-token": token },
    body: JSON.stringify(uidl)
  });
};

export const getUidlByName = (uidlName, token) => {
  return fetch(`http://localhost:8080/uidl/${uidlName}`, {
    method: "GET",
    headers: { "access-token": token }
  }).then(res => res.json());
};
