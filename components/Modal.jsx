import React, { useState } from "react";
import { handleAuthentication } from "../api/usersApi";
import { Modal, Button, Input } from "antd";

const ModalForm = ({
  showModal,
  setshowModal,
  setIsLoggedIn,
  setwelcomeMessage
}) => {
  const [register, setRegister] = useState(false);

  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const [error, setError] = useState("");

  const handleApiRequest = async (userData, path) => {
    const response = await handleAuthentication(userData, path);

    const data = await response.json();
    console.log("data :", data);
    if (data.error) {
      throw new Error(data.error);
    }
    localStorage.setItem("access-token", data.accessToken);
    setwelcomeMessage(data.greet);
    setshowModal(false);
    setTimeout(() => {
      setwelcomeMessage("");
    }, 2000);
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
      setEmail("");
      setPassword("");
      setUserName("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancel = e => {
    setshowModal(false);
    setEmail("");
    setPassword("");
    setUserName("");
    setwelcomeMessage("");
    setError("");
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  return (
    <div className="container">
      <Modal
        title={register ? "Register" : "Sign in"}
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        maskStyle={true}
      >
        <div className="input-container">
          <div className="input">
            {" "}
            <Input
              value={eMail}
              placeholder="Email or Username"
              onChange={e => setEmail(e.target.value)}
            />{" "}
          </div>

          <div className="input">
            {" "}
            <Input
              value={password}
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />{" "}
          </div>

          <div className="input">
            {register && (
              <Input
                value={username}
                placeholder="User Name"
                onChange={e => setUserName(e.target.value)}
              />
            )}
            {register ? (
              <div className="input">
                <a onClick={handleRegister} className="input">
                  {" "}
                  Already have an account? Sign In!{" "}
                </a>
              </div>
            ) : (
              <div className="input">
                <a onClick={handleRegister}> New User? Register! </a>
              </div>
            )}
          </div>
          {error ? <p>Error: {error}</p> : null}
        </div>
      </Modal>

      <style jsx>
        {`
          .input-container {
            display: flex;
            flex-direction: column;
          }
          .input:hover {
            transition: 0.2s;
            color: rgb(64, 169, 255);
          }
          .input {
            margin-top: 10px;
            color: #1890ff;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ModalForm;
