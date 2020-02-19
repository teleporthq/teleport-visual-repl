import React, { useState, useEffect } from "react";
import { saveUidl, getUidlByName, deleteUidl } from "../api/uidlApi";
import { Button, Select } from "antd";
import ModalConfirmation from "../components/ModalConfirmation";
import ModalDelete from "../components/ModalDelete";

//Save
const handleSave = async (uidl, setOptions, componentName) => {
  const token = localStorage.getItem("access-token");
  const uidlDTO = {
    uidlEntry: uidl,
    entryName: componentName
  };
  await saveUidl(uidlDTO, token);
  populateDropdown(setOptions);
};

//Detele
const handleDelete = async (uidl, setOptions, componentName) => {
  const token = localStorage.getItem("access-token");
  const uidlDTO = {
    uidlEntry: uidl,
    entryName: componentName
  };
  await deleteUidl(uidlDTO, token);

  populateDropdown(setOptions);
};

const populateDropdown = setOptions => {
  const token = localStorage.getItem("access-token");
  if (token) {
    getUidlByName("", token)
      .then(options => {
        return options.success.map((option, i) => {
          return (
            <Select.Option key={i} value={option}>
              {option}
            </Select.Option>
          );
        });
      })
      .then(options => {
        setOptions(options);
      })
      .catch(err => {
        setOptions("");
      });
    return;
  }

  setOptions("");
};

const handleChange = async (uidlEntryName, setUidl, setComponentName) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    await setComponentName(uidlEntryName);
    const uidl = await getUidlByName(uidlEntryName, token);
    setUidl(uidl.success.UIDLEntry);
  }
};

const EditorNav = ({ uidl, setUidl, isLoggedIn }) => {
  const [options, setOptions] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [componentName, setComponentName] = useState("");

  useEffect(() => {
    populateDropdown(setOptions);
  }, [isLoggedIn]);

  return (
    <div className="editorUtilities">
      <Select
        showSearch
        placeholder={
          isLoggedIn ? "Select a component name" : "Sign In to view your UIDLs"
        }
        style={{ width: 200, color: "#822cec" }}
        onChange={value => {
          handleChange(value, setUidl, setComponentName);
        }}
      >
        {options}
      </Select>

      <ModalConfirmation
        visible={showModal}
        setIsVisible={setShowModal}
        handleSave={handleSave}
        componentName={componentName}
        uidl={uidl}
        setOptions={setOptions}
      />

      <ModalDelete
        visible={showModalDelete}
        setIsVisible={setShowModalDelete}
        handleDelete={handleDelete}
        componentName={componentName}
        uidl={uidl}
        setOptions={setOptions}
      />

      <div className="btns">
        <Button
          onClick={() => setShowModal(true)}
          disabled={isLoggedIn ? false : true}
          style={{ color: "#822cec" }}
        >
          Save Component
        </Button>
        <div className="space"></div>
        <Button
          onClick={() => setShowModalDelete(true)}
          disabled={isLoggedIn ? false : true}
          style={{ color: "#822cec" }}
        >
          Delete Component
        </Button>
      </div>

      <style jsx>
        {`
          .editorUtilities {
            position: relative;
            padding: 10px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
