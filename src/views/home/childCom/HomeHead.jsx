import React, { Component } from 'react'

class HomeHead extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: '飞云瑞安店',
      locationList: [
        {id: 101, location: '钱库'},
        {id: 102, location: '苍南'},
        {id: 103, location: '温州'},
      ]
     }
    this.show = false
  }
  render() { 
    return ( 
      <header className='home-header'>
        <img src={require("assets/img/定位.svg")}  onClick={this.showLocation} alt="图片正在加载中"/>
        <ul ref='ul' className='location'>
          { this.state.locationList.map((item, index) => {
            return (
              <li key={ item.id + index }> { item.location } </li>
            )
          })}
        </ul>
        <label> {this.state.location} </label>
        <input className='search' type="text" placeholder='请输入搜索关键词'/>
      </header>
     );
  }
  showLocation = () => {
    if(this.show) {
      this.refs.ul.classList.remove('show')
      this.show = !this.show
    } else {
      this.refs.ul.classList.add('show')
      this.show = !this.show
    } 
  }
}
 
export default HomeHead;