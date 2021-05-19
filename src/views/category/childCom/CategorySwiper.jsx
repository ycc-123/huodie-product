import React, { Component, Fragment } from 'react'

import Swiper from 'swiper'
import "swiper/css/swiper.css"

import store from 'store/index'

class CategorySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: store.getState().categoryIndex
    }
    this.cancelSub = store.subscribe(() => {
      this.setState({
        categoryIndex: store.getState().categoryIndex
      })
    })
  }
  render() {
    const { categoryGoods } = store.getState()
    const { categoryIndex } = this.state
    return (
      <Fragment>
        <div className='category-swiper'>
          <div className="swiper-container" ref='swiper'>
            <div className="swiper-wrapper">
              {categoryGoods[categoryIndex].data.map((item, index) => {
                return (
                  <div key={item.id + index} className='swiper-slide'>
                    <img className='swiper-goods-img' src={item.gimg} alt="图片加载中" />
                    <div className='swiper-goods-info'>
                      <p>{item.gname}</p>
                      <p>市场价: <span>￥</span> {item.mprice}</p>
                      <p>
                        <span>￥</span>
                        {item.oprice}
                        <button className='category-button-left'>会员价</button>
                        <button className='category-button-right'><span>￥</span>4.99</button>
                      </p>
                      <p>
                        已售<span>{item.salenum}</span>
                        库存{item.gnum}
                        <img className='category-goods-img' src={require('assets/img/cart2.png')} alt="正在加载中" />
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>
      </Fragment>
    );
  }
  componentWillUnmount() {
    // 取消订阅者模式
    this.cancelSub()
  }
  componentDidMount() {
    this.swiper = new Swiper(this.refs.swiper, {
      freeMode: true,
      freeModeSticky: true,
      preloadImages: false,
      freeModeMomentumVelocityRatio: 0.5,
      init: false,
      scrollbar: {
        el: '.swiper-scrollbar',
        scrollbarHide: false
      },
      on: {
        slideChangeTransitionStart() {
          for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.opacity = .5
            this.slides[i].style.transform = `scale(.9)`
          }
        },
        slideChangeTransitionEnd() {
          for (let i = 0; i < this.slides.length; i++) {
            if (i === this.activeIndex) {
              this.slides[i].style.opacity = 1
              this.slides[i].style.transform = `scale(.95)`
            }
          }
        }
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      observer: true,
      observeParents: true,
    })
    this.swiper.init()
  }
  componentDidUpdate() {
    if (this.swiper) {
      this.swiper.destroy(false)
      this.swiper = new Swiper(this.refs.swiper, {
        freeMode: true,
        freeModeSticky: true,
        freeModeMomentumVelocityRatio: 0.5,
        preloadImages: false,
        init: false,
        scrollbar: {
          el: '.swiper-scrollbar',
          scrollbarHide: false
        },
        on: {
          slideChangeTransitionStart() {
            for (let i = 0; i < this.slides.length; i++) {
              this.slides[i].style.opacity = .5
              this.slides[i].style.transform = `scale(.9)`
            }
          },
          slideChangeTransitionEnd() {
            for (let i = 0; i < this.slides.length; i++) {
              if (i === this.activeIndex) {
                this.slides[i].style.opacity = 1
                this.slides[i].style.transform = `scale(.95)`
              }
            }
          }
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        observer: true,
        observeParents: true
      })
      this.swiper.init()
    }
  }
}

export default CategorySwiper;