import React, { useState } from "react";
import { Modal, Input } from "antd";

const ModalConfirmation = ({
  visible,
  setIsVisible,
  handleSave,
  modalText,
  uidl,
  setOptions
}) => {
  const [componentName, setComponentName] = useState("");
  return (
    <Modal
      visible={visible}
      onOk={() => {
        handleSave(uidl, setOptions, componentName);
        setIsVisible(false);
      }}
      onCancel={() => setIsVisible(false)}
    >
      <p>{modalText}</p>
      <Input onChange={e => setComponentName(e.target.value)}></Input>
    </Modal>
  );
};

export default ModalConfirmation;
