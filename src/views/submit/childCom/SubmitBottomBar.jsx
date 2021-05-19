import React, { Component } from 'react'
class SubmitBottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <footer className='submit-footer'>
        <button className='submit-freight'>
          总价： <span>￥12.00</span>
        </button>
        <button className='submit-button'>
          提交订单
        </button>
        <button className='submit-total-price'>
          总价：<span>￥150.00</span>
        </button>
      </footer>
    );
  }
}

export default SubmitBottomBar;