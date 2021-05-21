import styled from "styled-components"

const MemberMenuStyle = styled.div
`.profile-member-menu{
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  /* grid-template-rows: repeat(auto-fill,3.14rem);  */
  grid-template-rows: repeat(4,3.14rem); 
  grid-auto-flow: row;  

  background-color: white;
  height: auto;
  margin-top: .32rem;
  border-radius: .133rem;

}

.profile-member-menu-item{
  text-align: center;
  position: relative;
  left: .35rem;
  top: .6rem;
  width: 75%;
  height: 60%;
  padding-top: .098rem;

}

.profile-member-menu-container{
  border-right: rgba(0, 0, 0, 0.1) solid .027rem;
  border-bottom: rgba(0, 0, 0, 0.1) solid .027rem;
  margin-top: 0;

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




export {
  MemberMenuStyle
}
