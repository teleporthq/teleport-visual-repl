import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";

const ModalConfirmation = ({
  visible,
  setIsVisible,
  handleSave,
  uidl,
  setOptions,
  componentName
}) => {
  const [newComponentName, setNewComponentName] = useState("");

  useEffect(() => {
    setNewComponentName(componentName);
  }, [componentName]);

  return (
    <Modal
      destroyOnClose={true}
      visible={visible}
      okText="Save"
      onOk={() => {
        handleSave(uidl, setOptions, newComponentName);
        setIsVisible(false);
      }}
      onCancel={() => setIsVisible(false)}
    >
      <div style={{ textAlign: "center" }}>
        <p>Please choose a name for your component</p>
        <Input
          onChange={e => setNewComponentName(e.target.value)}
          defaultValue={componentName}
        ></Input>
      </div>
    </Modal>
  );
};

export default ModalConfirmation;
