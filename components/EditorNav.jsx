import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Menu, Dropdown, Icon, message, Button } from "antd";

const onClick = function({ key }) {};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">Nume Componenta</Menu.Item>
  </Menu>
);

const EditorNav = () => {
  return (
    <div className="header">
      <div className="dropDW"></div>

      <div className="btns">
        <div>
          <Button>Save</Button>{" "}
        </div>
        <div className="btn">
          <Button>Delete</Button>{" "}
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
