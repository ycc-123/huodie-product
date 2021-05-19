import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


import { ccid } from 'commons/utils'
import { addGoodsCart } from 'network/detail'

class DetailBottomBar extends Component {
  render() {
    const { goods } = this.props
    // 控制单买和团购时的icon
    /* const show = goods.selltype === '0' ? 'none' : 'inline-block' */
    return (
      <footer className='detail-bottom-bar'>
        <div className='detail-bottom-icon' onClick={() => { this.goHome() }}>
          <img src={require('assets/img/首页.png')} alt='图片正在加载中' />
          <span>首页</span>
        </div>
        {goods.selltype === '1' && <div className='detail-bottom-icon'>
          <img src={require('assets/img/客服.png')} alt='图片正在加载中' />
          <span>客服</span>
        </div>}
        {goods.selltype === '1' && <button className='detail-bottom-button'>
          <p>
            <span>￥</span>
            {goods.gprice}
          </p>
          <p>
            发起拼团
          </p>
        </button>}
        {goods.selltype === '1' && <button className='detail-bottom-button'>
          <p>
            <span>￥</span>
            {goods.oprice}
          </p>
          <p>
            直接购买
          </p>
        </button>}
        {goods.selltype === '0' && <button className='detail-bottom-button' onClick={() => { this.addCart(goods.uniacid, ccid, goods.gid, goods.num) }}>
          <p>
            去结算
          </p>
        </button>}
        {goods.selltype === '0' && <button className='detail-total-price'>
          总价: <span>￥</span>{goods.totalPrice}
        </button>}
      </footer>
    );
  }
  goHome = () => {
    this.props.history.push('/home')
  }
  /* goCart = () => {
    this.props.history.push('/cart')
  } */
  addCart = (uniacid, ccid, gid, num) => {
    addGoodsCart('cart_add', uniacid, ccid, gid, num).then(res => {
      new Promise(resole => {
        resole()
      }).then(() => {
        this.props.history.push('/cart')
      })
    })
  }
}

export default withRouter(DetailBottomBar);