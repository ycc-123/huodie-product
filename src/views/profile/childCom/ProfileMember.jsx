import React, { Component } from 'react';
import styled from 'styled-components'
import MenuItem from '../childCom/MenuItem'



// 样式
// import MemberMenuStyle from './../style/profileStyle'


const MemberMenuStyle = styled.div
`.profile-member-menu{
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  /* grid-template-rows: repeat(auto-fill,3.14rem);  */
  grid-template-rows: repeat(${props => props.itemNum},3.14rem); 
  grid-auto-flow: row;  

  background-color: white;
  height: auto;
  margin-top: .32rem;
  border-radius: .133rem;

}

.profile-member-menu-container{
  border-right: rgba(0, 0, 0, 0.1) solid .027rem;
  border-bottom: rgba(0, 0, 0, 0.1) solid .027rem;
  margin-bottom: 0;

}

.profile-member-menu-item{

  // border-right: rgba(0, 0, 0, 0.1) solid .027rem;
  // border-bottom: rgba(0, 0, 0, 0.1) solid .027rem;
  // margin-bottom: 0;

  text-align: center;
  position: relative;
  left: .35rem;
  top: .6rem;
  width: 75%;
  height: 60%;
  padding-top: .098rem;

}

.profile-member-menu-item>img{
  width: 1rem;
  height: 1rem;
}
.profile-member-menu-item>p{
  text-align: center;
  padding-top: .2rem;
}
`



class ProfileMember extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }

  componentDidMount(){
    
  }

  render() { 


    const{ memberMenu,itemNum } = this.props
    return (  
      <MemberMenuStyle itemNum={ Math.round(itemNum / 3)}>
           <div className="profile-member-menu">
    {
        memberMenu.map( (item,index) =>{
        return(
        <MenuItem item={item} key={index + item.sequence} />
        )
      })

    }
</div>  

      </MemberMenuStyle>
 
    )
  }
}
 
export default ProfileMember;