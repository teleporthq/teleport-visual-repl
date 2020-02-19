import React, { useState } from "react";
import { Modal, Input } from "antd";

const ModalConfirmation = ({
  visible,
  setIsVisible,
  handleSave,
  uidl,
  setOptions,
  componentName
}) => {
  const [newComponentName, setnewComponentName] = useState("");
  return (
    <Modal
      visible={visible}
      okText="Save"
      onOk={() => {
        handleSave(uidl, setOptions, newComponentName);
        setIsVisible(false);
      }}
      onCancel={() => setIsVisible(false)}
    >
      <div>
        <div style={{ textAlign: "center" }}>
          <p>Please choose a name for your component</p>
          <Input
            onChange={e => setnewComponentName(e.target.value)}
            defaultValue={componentName}
          ></Input>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirmation;
