import React, { Component } from 'react'

import Swiper from 'swiper'
import "swiper/css/swiper.css"

class HomeNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      noticeList: [
        {id: 1110, title: '第一条公告'},
        {id: 1111, title: '第二条公告'},
        {id: 1112, title: '第三条公告'},
      ]
    }
  }
  render() { 
    const { noticeList } = this.state
    return ( 
      <div className='notice'>
        <div className='notice-img'>
          <img src={require('assets/img/notice.svg')} alt='正在加载中' />
        </div>
        <div className="swiper-container notice-swiper swiper-no-swiping">
          <div className="swiper-wrapper">
            { noticeList.map((item, index) => {
              return (
                <div key={item.id + index} className='swiper-slide'>
                  { item.title }
                </div>
              )
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
     )
  }
  componentDidUpdate() {
    if(this.swiper){
      this.swiper.destroy()
      this.swiper = null
     }
    this.swiper = new Swiper('.notice-swiper', {
      direction: 'vertical',
      autoplay: {
        delay: 5000
      },/* 几秒开始滑动 */
      loop: true,
      speed: 1000/* 动画时间 */
    })
  }
}

 
export default HomeNotice;

