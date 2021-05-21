import React, { Component } from 'react';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);

    console.log('props',props)

    this.state = {
     }
  }
  render() { 
    const { memberInfo } = this.props
    return (  
      <div className="profile-header">
          <div className="p-h-top">
            <div className="p-h-top-left">
              <p className="p-h-top-left-membername">{memberInfo.name}</p>
              <p className="p-h-top-left-memberlevel">会员等级：<strong>{memberInfo.levelName}    </strong> 
              <span className="p-h-top-left-memberdiscount"> 享受   <strong>{memberInfo.discount}</strong> 折优惠</span>
              </p>  
            </div>
            <img className="p-h-top-img" src={memberInfo.avatar} alt=""/>
          </div>

          <div className="p-h-bottom">
                <ul>
                  <li>
                  <p>{memberInfo.member_balance}</p>  
                  <span>余额</span> 
                  </li>
                    <div> 
                    </div>
                  <li>
                  <p>{memberInfo.score_balance}</p>  
                    <span>积分</span>
                    </li>
                    <div>
                    </div>
                  <li>
                  <p>{memberInfo.couponNum}</p>  
                    <span>优惠券</span>
                    </li>
                </ul>
          </div>

      </div>
    );
  }
}
 
export default ProfileHeader;