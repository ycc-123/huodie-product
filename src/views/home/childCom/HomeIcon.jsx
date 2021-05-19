import React, { Component } from 'react'

import Swiper from 'swiper'
import "swiper/css/swiper.css"

class HomeIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconList: [
        { id: 101, title: '摄影素材', src: require("assets/img/1.png") },
        { id: 102, title: '摄影素材', src: require("assets/img/2.png") },
        { id: 103, title: '摄影素材', src: require("assets/img/3.png") },
        { id: 104, title: '摄影素材', src: require("assets/img/4.png") },
        { id: 105, title: '摄影素材', src: require("assets/img/1.png") },
        { id: 106, title: '摄影素材', src: require("assets/img/2.png") },
        { id: 107, title: '摄影素材', src: require("assets/img/3.png") },
        { id: 108, title: '摄影素材', src: require("assets/img/4.png") },
        { id: 109, title: '摄影素材', src: require("assets/img/4.png") },
      ],
      pages: []
    }
  }
  render() {
    const { pages } = this.state
    return (
      <div className='icons'>
        <div className="swiper-container icon-swiper">
          <div className="swiper-wrapper">
            {pages.map((item, index) => {
              return (
                <div key={index} className='swiper-slide'>
                  {item.map((item, index) => {
                    return (
                      <div key={item.id + index} className='icon'>
                        <div className='icon-img'>
                          <img src={item.src} alt="" />
                        </div>
                        <p className='icon-desc'>
                          {item.title}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    );
  }
  UNSAFE_componentWillMount() {
    /* 计算页数 */
    const { iconList, pages } = this.state
    iconList.forEach((item, index) => {
      const page = Math.floor(index / 8)
      /* 如果不存在将pages[page]赋值为空数组 */
      if (!pages[page]) {
        pages[page] = []
      }
      pages[page].push(item)
    })
    this.setState({
      pages
    })
  }
  componentDidUpdate() {
    if (this.swiper) {
      this.swiper.destroy()
      this.swiper = null
    }
    this.swiper = new Swiper('.icon-swiper', {
      scrollbar: {
        el: '.swiper-scrollbar',
        scrollbarHide: false
      }
    })
  }
}

export default HomeIcon