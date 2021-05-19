import React, { Component } from 'react';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // memberAvatar:'http://m.imeitou.com/uploads/allimg/2020062608/l15x4yyqup5.jpeg',
      memberAvatar:'http://m.imeitou.com/uploads/allimg/2020062608/oikp4bxrym5.jpg',
      memberName:'Bohemian', 
      membershipLevel:'黄金会员',
      memberDiscount:'5.0',
      memberinfo:{
        balance:'45678.99',
        integral:'45678.99',
        coupon:'4578'
      }
     }
  }
  render() { 
    return (  
      <div className="profile-header">
          <div className="p-h-top">
            <div className="p-h-top-left">
              <p className="p-h-top-left-membername">{this.state.memberName}</p>
              <p className="p-h-top-left-memberlevel">会员等级：{this.state.membershipLevel} 享受{this.state.memberDiscount}折优惠</p>  
            </div>
            <img className="p-h-top-img" src={this.state.memberAvatar} alt=""/>
          </div>

          <div className="p-h-bottom">
                <ul>
                  <li>
                  <p>{this.state.memberinfo.balance}</p>  
                  <span>余额</span> 
                  </li>
                    <div> 
                    </div>
                  <li>
                  <p>{this.state.memberinfo.integral}</p>  
                    <span>积分</span>
                    </li>
                    <div>
                    </div>
                  <li>
                  <p>{this.state.memberinfo.coupon}</p>  
                    <span>优惠券</span>
                    </li>
                </ul>
          </div>

      </div>
    );
  }
}
 
export default ProfileHeader;