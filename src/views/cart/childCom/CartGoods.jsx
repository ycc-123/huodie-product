import React, { Component, Fragment } from 'react'
import CartGoodsItem from './CartGoodsItem'
import store from 'store/index'
class CartGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: store.getState().cartGoods
    }
    // 订阅者模式
    this.cancelSub = store.subscribe(() => {
      this.setState({
        data: store.getState().cartGoods
      })
    })
  }
  render() {
    const { data } = this.state
    console.log(data)
    let dom
    if (data.length === 0) {
      dom = (
        <div>
        </div>
      )
    } else {
      dom = (
        <ul className='cart-main'>
          {data.map((item, index) => {
            return (
              <CartGoodsItem key={item.id + index} goods={item}
                index={index}
              />
            )
          })}
        </ul>
      )
    }
    return (
      <Fragment>
        {dom}
      </Fragment>
    )
  }
  componentWillUnmount() {
    // 取消订阅模式
    this.cancelSub()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.state) !== JSON.stringify(nextState)
  }
  componentDidUpdate() {
    let startX, newX, changeX, deleteW
    if (document.querySelector('.del')) {
      deleteW = document.querySelector('.del').offsetWidth
    }
    let goods = document.querySelectorAll('.cart-goods-box')
    /* let del = document.querySelectorAll('.del') */
    // 将goods伪数组转换为数组以便使用forEach
    goods.forEach((item, index, array) => {
      item.addEventListener('touchstart', (e) => {
        // e.preventDefault()
        console.log(item)
        // 每次手指放到屏幕上时判断是否此时所有滑动事件的left是否为0,不为0先重置为0
        array.forEach(item => {
          if (item.style.left !== 0) {
            item.style.left = 0
          }
        }, false)
        // 阻止默认事件
        /* e.preventDefault() */
        // 获取手指移入屏幕时的x轴位置
        startX = e.touches[0].pageX
        this.fnMove = (e) => {
          // 实时手指位置X轴的位置 - 手指刚移入屏幕时X轴的位置
          newX = e.touches[0].pageX - startX
          if (newX > -deleteW && newX < 0) {
            item.style.left = newX + 'px'
            if (newX === -deleteW) {
              item.removeEventListener('touchmove', this.fnMove, false)
              item.removeEventListener('touchend', this.fnEnd, false)
            }
          }
        }
        this.fnEnd = (e) => {
          // 手指离开屏幕先移出事件
          item.removeEventListener('touchmove', this.fnMove, false)
          item.removeEventListener('touchend', this.fnEnd, false)
          changeX = e.changedTouches[0].pageX
          if (startX - changeX > deleteW / 2) {
            item.style.left = -deleteW + 'px'
            item.style.transition = '.5s all ease'
          } else {
            item.style.left = 0 + 'px'
            item.style.transition = '.5s all ease'
          }
        }
        // touchmove 当手指在屏幕上滑动的时候连续地触发
        item.addEventListener('touchmove', this.fnMove, false)
        // touchend 当手指离开屏幕时触发
        item.addEventListener('touchend', this.fnEnd, false)
      }, false)
    })
  }
}

export default CartGoods;