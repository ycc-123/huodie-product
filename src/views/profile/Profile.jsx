//公共库
import React, { Component } from 'react';
import './style/profile.css' 



// 子组件
import TabBar from 'common/tabBar/TabBar'
import ProfileHeader from './childCom/ProfileHeader'
import ProfileOrder from './childCom/ProfileOrder'
import ProfileMember from './childCom/ProfileMember'

// 公共组件
import BetterScroll from 'common/betterScroll/BetterScroll'


// 网络请求
import axios from 'axios'


// redux

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            memberInfo:{},
            memberMenu:[],
            memberCommander:[],
            memberCommision:[],
            memberGuide:[]
         }
    }

    UNSAFE_componentWillMount(){
     
    }

    componentDidMount(){
        console.log('componentDieMount')
        
        let action = 'getMemberDetails'
        let openid = 'oCKOnuNRQINmyQtyZ3n2BgzdtxHI'
        let uniacid = 53

        axios.post('https://dev.huodiesoft.com/wechat_users_apis.php',{action,openid,uniacid}).then( res =>{
            console.log('getMemberDetails',res.data)
            let data = res.data
           if (data.status === 200){
               this.setState({
                   memberInfo:{
                       'avatar':data.data.avatar,
                       'couponNum':data.data.couponNum,
                       'discount':data.data.discount,
                       'name':data.data.nickname,
                       'level':data.data.level,
                       'levelName':data.data.levelName,
                       'member_balance':data.data.member_balance,
                       'score_balance':data.data.score_balance
                   },
                   memberMenu:data.data.module.first,
                    memberCommander:data.data.module.fourth,
                    memberCommision:data.data.module.second,
                    memberGuide:data.data.module.third

               }, () => {
                this.refs.scroll.BScroll.refresh()
               })
               
           }
       
        }).catch(err => {
            console.log(err)
        }) 
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')    
    }
    render() { 
        
        const scrollConfig= {
            probeType:1
        }
        const scrollStyle={
            height: 'calc(100vh - 1.5rem)',
            top: '.2rem',
            left: '.32rem',
            right: '.32rem',
            bottom: '0'
        }

        return ( 
            <div className="profile">

               {/* <div className="profile-scroll"> */}
                   <BetterScroll config={scrollConfig} style={scrollStyle} ref='scroll'>
                            <ProfileHeader  memberInfo={this.state.memberInfo} />
                            <ProfileOrder />
                            <ProfileMember memberMenu={this.state.memberMenu} itemNum={this.state.memberMenu.length}/>
                            <ProfileMember memberMenu={this.state.memberCommander} itemNum={this.state.memberCommander.length}/>
                            <ProfileMember memberMenu={this.state.memberCommision} itemNum={this.state.memberCommision.length}/>
                            <ProfileMember memberMenu={this.state.memberGuide} itemNum={this.state.memberGuide.length}/>
                            
                   </BetterScroll>
              
                {/* </div>  */}
            <TabBar className="profile-tabar"/>

            </div>
            
         );
    }
}
 
export default Profile;