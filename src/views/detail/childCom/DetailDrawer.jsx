import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { addGoodsCart } from 'network/detail'
import { ccid } from 'commons/utils'


class DetailDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { style, goods } = this.props
    const show = style ? 'block' : 'none'
    const bottom = style ? '0' : '-5.5rem'
    console.log(this.props)
    return (
      <DrawerStyle>
        <div className='mask' style={{ display: show }}
          onClick={() => { this.props.hideDrawer() }}>
        </div>
        <div className='drawer' style={{ bottom }} onClick={(e) => { e.stopPropagation() }}>
          <div className='head'>
            <div className='head-img'>
              <img src={goods.gimg} alt="图片太刷手机无法显示" />
            </div>
            <span>￥{goods.totalPrice}</span>
            <button onClick={() => { this.props.hideDrawer() }}>取消</button>
          </div>
          <div className='container'>
            <button onClick={() => { this.props.decrementNum() }}>
              -
            </button>
            <span>{goods.num}</span>

            <button onClick={() => { this.props.incrementNum() }}>
              +
            </button>
          </div>
          <div className='footer'>
            <button onClick={() => { this.addCart(goods.uniacid, ccid, goods.gid, goods.num) }}>确定</button>
          </div>
        </div>
      </DrawerStyle>
    )
  }
  addCart = (uniacid, ccid, gid, num) => {
    this.props.hideDrawer()
    this.timer = setTimeout(() => {
      addGoodsCart('cart_add', uniacid, ccid, gid, num).then(res => {
        new Promise(res => {
          res()
        }).then(() => {
          clearTimeout(this.timer)
          this.props.history.push('/submit')
        })
      })
    }, 1000)
  }
}

const DrawerStyle = styled.div`
.mask {
  position: absolute;
  top: 0;
  z-index: 9999 ;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
}

.drawer  {
  position: absolute;
  bottom: -5rem;
  z-index: 9999 !important;
  transition: all 1s;
  width: 100vw;
  height: 5rem;
  background: #fff;
}

.head {
  position: relative;
  height: 1.5rem;
}

.head-img {
  position: absolute;
  bottom: 0;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  background: gold;
}

.head-img img {
  width: 100%;
  height: 100%;
}

.head span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: .45rem;
}

.head button {
  position: absolute;
  right: 0;
  width: 2rem;
  height: 1.5rem;
  border: none;
  font-size: .5rem;
  background: transparent;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  font-size: .6rem;
}

.container span {
  width: 2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
}

.container button{
  width: 1rem;
  height: 1.2rem;
  background: #ccc;
  border: none;
}

.footer {
  height: 1rem;
  padding: .1rem 2rem;
}

.footer button {
  width: 6rem;
  height: 100%;
  background: red;
  border: none;
}

`

export default withRouter(DetailDrawer);