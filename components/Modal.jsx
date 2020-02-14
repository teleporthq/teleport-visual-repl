import React from "react";
import ReactDOM from "react-dom";

import { Modal, Button } from "antd";

class ModalForm extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="container">
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>test</div>
        </Modal>
        <style jsx>
          {`
            .container: {
              padding: 24px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ModalForm;
