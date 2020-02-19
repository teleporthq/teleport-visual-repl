import React, { useState } from "react";
import { Modal } from "antd";

const ModalDelete = ({
  visible,
  setIsVisible,
  handleDelete,
  modalText,
  uidl,
  setOptions,
  componentName
}) => {
  return (
    <Modal
      visible={visible}
      okText="Delete"
      onOk={() => {
        handleDelete(uidl, setOptions, componentName);
        setIsVisible(false);
      }}
      onCancel={() => setIsVisible(false)}
    >
      <p>
        Are you sure you want to delete the "
        <span style={{ color: "#822cec" }}>{componentName}</span>" component?
      </p>
    </Modal>
  );
};

export default ModalDelete;
