import React, { useState, useEffect } from "react";
import { saveUidl, getUidlByName } from "../api/uidlApi";
import { Menu, Icon, message, Button, Select } from "antd";
import ModalConfirmation from "../components/ModalConfirmation";

const handleSave = async (uidl, setOptions) => {
  const token = localStorage.getItem("access-token");
  const uidlDTO = {
    uidlEntry: uidl,
    entryName: "Vlad"
  };
  await saveUidl(uidlDTO, token);
  populateDropdown(setOptions);
};

const handleDelete = uidl => {
  const token = localStorage.getItem("access-token");
};

const populateDropdown = setOptions => {
  const token = localStorage.getItem("access-token");
  if (token) {
    getUidlByName("", token)
      .then(options => {
        return options.success.map(option => {
          return <Option value={option}>{option}</Option>;
        });
      })
      .then(options => {
        setOptions(options);
      });
    return;
  }

  setOptions("");
};

const handleChange = async (uidlEntryName, setUidl) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    const uidl = await getUidlByName(uidlEntryName, token);
    console.log(uidl);
    setUidl(uidl.success.UIDLEntry);
  }
};

const EditorNav = ({ uidl, setUidl, isLoggedIn }) => {
  const [options, setOptions] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    populateDropdown(setOptions);
  }, [isLoggedIn]);

  return (
    <div className="editorUtilities">
      <Select
        showSearch
        placeholder="Select a component name"
        style={{ width: 200 }}
        onChange={value => handleChange(value, setUidl)}
      >
        {options}
      </Select>
      <ModalConfirmation visible={showModal} />
      <div className="btns">
        <Button onClick={() => handleSave(uidl, setOptions)}>
          Save Component
        </Button>
        <div className="space"></div>
        <Button onClick={() => handleDelete()}>Delete Component</Button>
      </div>

      <style jsx>
        {`
          .editorUtilities {
            position: relative;
            padding: 20px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-bottom: solid 1px #cccccc20;
            background: black;
          }
          .btns {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin-top: 2px;
            margin-left: 60px;
          }
          .space {
            width: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default EditorNav;
