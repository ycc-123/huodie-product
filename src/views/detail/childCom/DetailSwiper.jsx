import React, { Component, Fragment } from 'react'

import Swiper from 'swiper'
import "swiper/css/swiper.css"

class DetailSwiper extends Component {
  render() {
    console.log('渲染+1')
    let swiperSlide
    const { dataList } = this.props
    if (dataList instanceof Array) {
      swiperSlide = (
        <Fragment>
          {dataList.map((item, index) => {
            return (
              <div key={item.id + index} className='swiper-slide'>
                <img src={item.thumb} alt="图片加载中" />
              </div>
            )
          })}
        </Fragment>
      )
    } else {
      swiperSlide = (
        <div className='swiper-slide'>
          <img src={dataList} alt='图片加载中' />
        </div>
      )
    }
    return (
      <div className='detail-swiper'>
        <div className="swiper-container" ref='swiper'>
          <div className="swiper-wrapper">
            {swiperSlide}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (this.swiper) {
      this.swiper.destroy(false)
      this.swiper = null
    }
    this.swiper = new Swiper(this.refs.swiper, {
      loop: true,
      speed: 2000,
      /* autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }, */
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      observer: true,
      observeParents: true
    })
  }
}

export default DetailSwiper;