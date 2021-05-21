import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


class ProfileOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      orderItem:{
         
      }

     }
  }

  seeAllOrder(){
    let id = 'one'
    this.props.history.push('/order/' + id)
  }


  render() { 
    return ( 
      <div className="profile-order">
        <div className="profile-order-top">
          <span className="profile-order-top-text">我的订单</span>
            <span className="profile-order-top-watch-order" onClick={this.seeAllOrder.bind(this)}>
              查看全部订单  ▷
            </span>
        </div>
        <div className="profile-order-bottom">
              <ul>
                <li>
                  <img src={require('assets/img/profile/dfh.png')} alt=""/>
                  <p>待发货</p>
                </li>
                <li>
                  <img src={require('assets/img/profile/dsh.png')} alt=""/>
                  <p>待收货</p>
                </li>
                <li>
                  <img src={require('assets/img/profile/ysh.png')} alt=""/>
                  <p>已收货</p>
                </li>
                <li>
                  <img src={require('assets/img/profile/sh.png')} alt=""/>
                 <p>售后</p>   
                </li>
              </ul>
        </div>
      </div>
     );
  }
}
 
export default withRouter(ProfileOrder);