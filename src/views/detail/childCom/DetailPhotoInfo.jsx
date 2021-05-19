import React, { Component } from 'react'
class DetailPhotoInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true
    }
  }
  render() { 
    const { active } = this.state
    const showInfo = active ? 'block' : 'none'
    const showImg = active ? 'none' : 'block'
    return ( 
      <div className='detail-photo'>
        <div className='detail-photo-button'>
          <button className='detail-photo-left detail-photo-active' onClick={(e) => {this.changeActive(e)}}>图文详情</button>
          <button className='detail-photo-right' onClick={(e) => {this.changeActive(e)}}>商品属性</button>
        </div>
        <div className='detail-photo-img' style={{display: showInfo}}>
          这是一张大图
        </div>
        <div className='detail-photo-info'style={{display: showImg}}>
          这是商品的信息
        </div>
      </div>
     );
  }
  changeActive = (e) => {
    let button = document.querySelectorAll('.detail-photo-button button')
    if(!e.target.classList[1]) {
      this.setState({
        active: !this.state.active
      })
      button.forEach(item => {
        item.classList.remove('detail-photo-active')
      })
      e.target.classList.add('detail-photo-active')
    }
  }
}
 
export default DetailPhotoInfo;