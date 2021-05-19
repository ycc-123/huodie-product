import React, { Component } from 'react'
class DetailCourier extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='detail-courier'>
        <div className='detail-courier-box'>
          <img src={require('assets/img/selectgreen.png')} alt="图片加载中"/>
          <span>包邮</span>
        </div>
        <div className='detail-courier-box'>
          <img src={require('assets/img/selectgreen.png')} alt="图片加载中"/>
          <span>七天无理由退款</span>
        </div>
      </div>
    );
  }
}
 
export default DetailCourier;