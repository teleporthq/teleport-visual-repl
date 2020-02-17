import React, { useState } from 'react';
import ReactDOM from "react-dom";

import { Menu, Dropdown, Icon, message, Button } from "antd";

const onClick = function ({ key }) {

};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">Nume Componenta</Menu.Item>
  </Menu>
);

const EditorNav = () => {
   
     return (
         <div className="header">
           <div className="dropDW"> 
            <Dropdown overlay={menu}>
                <a href="#">
                    Dropdown 
                </a>
            </Dropdown>
          </div>

            <div className="btns">
              <div><Button>Save</Button> </div>
              <div className="btn"><Button>Delete</Button> </div>
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
            .btn{
              margin-left: 3px;
            }
            .dropDW {
              background-color: white;
              border-radius: 4px;
              height: 32px;
              width: 80px;
              margin-left: 3px;
              margin-top: 2px;
              padding: 3px;
            }

          `}
          </style>

        </div>
     )
}

export default EditorNav;