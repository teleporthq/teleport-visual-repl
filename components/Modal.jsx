import React, { useState } from "react";
import { handleAuthentication } from "../api/usersApi";
import { Modal, Button, Input } from "antd";

const ModalForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [register, setRegister] = useState(false);

  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const [error, setError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const handleApiRequest = async (userData, path) => {
    const response = await handleAuthentication(userData, path);

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    localStorage.setItem("access-token", data.accessToken);
    setServerMessage(data.message);
    setIsVisible(false);
  };

  const handleOk = async e => {
    try {
      let myUser = null;
      let path = null;
      if (register) {
        if (eMail === "" || username === "" || password === "") {
          throw new Error("Fields can't be empty");
        }
        myUser = { eMail, username, password };
        path = "register";
      } else {
        if (!eMail || !password) {
          throw new Error("Fields can't be empty");
        }
        myUser = { loginToken: eMail, password };
        path = "signin";
      }
      await handleApiRequest(myUser, path);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(isVisible);
      setError(err.message);
    }
  };

  const handleCancel = e => {
    setIsVisible(false);
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  const logMeOut = () => {
    localStorage.removeItem("access-token");
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <a onClick={logMeOut}>Log out</a>
      ) : (
        <a onClick={() => setIsVisible(true)}>Sign in</a>
      )}
      {serverMessage ? <div>{serverMessage}</div> : null}
      <Modal
        title="Sign In"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="input-container">
          <div className="input">
            {" "}
            <Input
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />{" "}
          </div>

          <div className="input">
            {" "}
            <Input
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />{" "}
          </div>

          <div className="inputR">
            {register && (
              <Input
                placeholder="User Name"
                onChange={e => setUserName(e.target.value)}
              />
            )}
            <a onClick={handleRegister}> Register </a>
            {error ? <p>{error}</p> : null}
          </div>
        </div>
      </Modal>

      <style jsx>
        {`
          .input-container {
            display: flex;
            flex-direction: column;
          }
          .input,
          .inputR {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default ModalForm;
