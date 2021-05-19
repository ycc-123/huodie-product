//公共库
import React, { Component } from 'react';
import './style/profile.css'




// 子组件
import TabBar from 'common/tabBar/TabBar'
import ProfileHeader from './childCom/ProfileHeader'
import ProfileOrder from './childCom/ProfileOrder'
import ProfileMember from './childCom/ProfileMember'
import ProfileCommander from './childCom/ProfileCommander';

// 公共组件
import BetterScroll from 'common/betterScroll/BetterScroll'

// 网络请求

// redux

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 

        const scrollConfig = {
            probeType:1
        }

        const scrollStyle = {
            width:'calc(100vw - .64rem )',
            height: 'calc(100vh - 1.48rem -7.67rem)',
            top: '8.9rem'
            ,left:'0.32rem'
          }

        return ( 
            <div className="profile">

<ProfileHeader >

</ProfileHeader>
 <ProfileOrder>
 </ProfileOrder>

            <BetterScroll config={scrollConfig} style={scrollStyle}>

            <ProfileMember/>
            
            <ProfileCommander />

            </BetterScroll>

           

             

               
               
            

                <TabBar>
                </TabBar>
            </div>
         );
    }
}
 
export default Profile;