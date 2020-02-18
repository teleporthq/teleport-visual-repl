import React, { useState, useEffect } from "react";
import { saveUidl, getUidlByName } from "../api/uidlApi";
import { Menu, Icon, message, Button, Select } from "antd";

//TODO
const handleSave = async (uidl, setOptions) => {
  const token = localStorage.getItem("access-token");
  const uidlDTO = {
    uidlEntry: uidl,
    entryName: "Vlad"
  };
  await saveUidl(uidlDTO, token);
  populateDropdown(setOptions);
};

//TODO
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
      })
      .catch(err => {
        setOptions("");
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

  useEffect(() => {
    populateDropdown(setOptions);
  }, [isLoggedIn]);

  return (
    <div className="header">
      <div className="dropDW">
        <Select
          showSearch
          placeholder="Select a component name"
          style={{ width: 200 }}
          onChange={value => handleChange(value, setUidl)}
        >
          {options}
        </Select>
      </div>

      <div className="btns">
        <div>
          <Button onClick={() => handleSave(uidl, setOptions)}>Save</Button>{" "}
        </div>
        <div className="btn">
          <Button onClick={() => handleDelete()}>Delete</Button>{" "}
        </div>
      </div>

      <style jsx>
        {`
          .header {
            position: relative;
            padding: 1px;
            height: 40px;
            display: flex;
            flex-direction: row;
            border-bottom: solid 1px #cccccc20;
            background: black;
          }
          .btns {
            display: flex;
            align-items: center;
            margin-top: 2px;
            margin-left: 60px;
          }
        `}
      </style>
    </div>
  );
};

export default EditorNav;
