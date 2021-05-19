import React, { Component } from 'react';
class ProfileOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      orderItem:{
         
      }

     }
  }
  render() { 
    return ( 
      <div className="profile-order">
        <div className="profile-order-top">
          <span className="profile-order-top-text">我的订单</span>
            <span className="profile-order-top-watch-order">
              查看全部订单  ▷
            </span>
        </div>
        <div className="profile-order-bottom">
              <ul>
                <li>
                  <img src={require('assets/img/home1.png')} alt=""/>
                  <p>待发货</p>
                </li>
                <li>
                  <img src={require('assets/img/home1.png')} alt=""/>
                  <p>待收货</p>
                </li>
                <li>
                  <img src={require('assets/img/home1.png')} alt=""/>
                  <p>已收货</p>
                </li>
                <li>
                  <img src={require('assets/img/home1.png')} alt=""/>
                 <p>售后</p>   
                </li>
              </ul>
        </div>
      </div>
     );
  }
}
 
export default ProfileOrder;