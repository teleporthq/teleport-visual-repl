import React, { useState } from "react";
import { registerUser } from "../api/usersApi";
import { Modal, Button, Input } from "antd";

const ModalForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [register, setRegister] = useState(false);
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const showModal = () => {
    setIsVisible({
      visible: true
    });
  };

  const handleOk = async () => {
    console.log("I'm in handleOK!!!!!!!!");
    const myUser = { eMail, username, password };
    try {
      const response = await registerUser(myUser);

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
    setIsVisible(true);
  };

  const handleCancel = e => {
    setIsVisible(true);
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  return (
    <div className="container">
      <a onClick={showModal}>Sign in</a>
      <Modal
        title="Sing in"
        visible={isVisible.visible}
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
            <button onClick={handleOk}>test</button>
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
