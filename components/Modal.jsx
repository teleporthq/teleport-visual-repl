import React, { useState } from "react";
import { registerUser } from "../api/usersApi";
import { Modal, Button, Input } from "antd";

const ModalForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [register, setRegister] = useState(false);

  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const [error, setError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const handleOk = async e => {
    try {
      if (eMail === "" || username === "" || password === "") {
        throw new Error("Fields can't be empty");
      }
      const myUser = { eMail, username, password };
      const response = await registerUser(myUser);

      const data = await response.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("access-token", data.accessToken);
      setServerMessage(data.message);
      setIsVisible(false);
    } catch (err) {
      console.log(isVisible);
      setError(err.message);
    }
  };

  const handleCancel = e => {
    setIsVisible(true);
  };
  const token = localStorage.getItem("access-token");
  console.log("TOKEN: ", token);
  const handleRegister = () => {
    setRegister(!register);
  };

  return (
    <div className="container">
      <a onClick={() => setIsVisible(true)}>Sign in</a>
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
