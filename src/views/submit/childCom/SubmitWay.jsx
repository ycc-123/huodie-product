import React, { Component, Fragment } from 'react'
import { Drawer } from 'antd';

class SubmitWay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.active,
      placement: 'bottom'
    }
  }

  onClose = () => {
    this.props.showDrawer()
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <Fragment>
        <Drawer
          title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Fragment>
    );
  }
  componentWillReceiveProps = (props) => {
    this.setState({
      visible: props.active,
    })
  }
}

export default SubmitWay