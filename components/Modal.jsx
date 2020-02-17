import React, { useState } from 'react';
import ReactDOM from "react-dom";

import { Modal, Button, Input  } from "antd";

const ModalForm = () =>  {
  const [state, setState] = useState({visible: false});
  const [toggled, toggle] = useState(false);
  const [title, setTitle] = useState( "Sign in");

  const showModal = () => {
    setState({
      visible: true
    });
  };

  const handleOk = e => {
    setState({
      visible: false
    });
  };

  const handleCancel = e => {
    setState({
      visible: false
    });
  };

  const toggleR = () => {
    toggle(toggled => !toggled)
  };

  const changeTitle = () => {
    setTitle("Register");
  };

  const Functia = (event) => {
    changeTitle();
    toggleR();
  };

    return (
      <div className="container">
        <a onClick={showModal}> 
          Sign in 
        </a>
        <Modal
          title={title}
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="input-container">

          <div className="input"> <Input  placeholder="Email"/> </div> 
            <div className="input"> <Input  placeholder="Password"/> </div>

            <div className="input1"> 
              {toggled && <> 
                <Input placeholder="User Name"/> 
              </> }
              <a onClick={Functia}> Register </a>
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
        .input1 {
          margin-top: 10px;
        }
        `}
        </style>
      </div>
    );
}

export default ModalForm;