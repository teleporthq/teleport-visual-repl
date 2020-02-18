import React from "react";
import { Modal } from "antd";

const ModalConfirmation = ({ visible, handleSave, modalText }) => {
  return (
    <Modal visible={visible} onOk={handleSave}>
      <p>{modalText}</p>
    </Modal>
  );
};

export default ModalConfirmation;
