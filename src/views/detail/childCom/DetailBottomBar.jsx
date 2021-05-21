import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import DetailDrawer from './DetailDrawer'

import { addGoodsCart } from 'network/detail'
import { ccid } from 'commons/utils'


class DetailBottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDrawer: false
    }
  }
  render() {
    const { goods } = this.props
    const { showDrawer } = this.state
    // 控制单买和团购时的icon
    /* const show = goods.selltype === '0' ? 'none' : 'inline-block' */
    return (
      <Fragment>
        <footer className='detail-bottom-bar'>
          <div className='detail-bottom-icon' onClick={() => { this.goHome() }}>
            <img src={require('assets/img/home.png')} alt='图片正在加载中' />
            <span>首页</span>
          </div>
          {goods.selltype === '1' && <div className='detail-bottom-icon'>
            <img src={require('assets/img/service.png')} alt='图片正在加载中' />
            <span>客服</span>
          </div>}
          {goods.selltype === '1' && <button className='detail-bottom-button' >
            <p>
              <span>￥</span>
              {goods.gprice}
            </p>
            <p>
              发起拼团
          </p>
          </button>}
          {goods.selltype === '1' && <button className='detail-bottom-button' onClick={this.showDrawer}>
            <p>
              <span>￥</span>
              {goods.oprice}
            </p>
            <p>
              直接购买
          </p>
          </button>}
          {goods.selltype === '0' && <button className='detail-bottom-button' onClick={() => { this.addCart(goods.uniacid, ccid, goods.gid, goods.num) }}>
            去结算
        </button>}
          {goods.selltype === '0' && <button className='detail-total-price'>
            总价: <span>￥</span>{goods.totalPrice}
          </button>}
        </footer>
        <DetailDrawer style={showDrawer}
          hideDrawer={this.hideDrawer}
          goods={goods} 
          decrementNum={this.props.decrementNum} 
          incrementNum={this.props.incrementNum}/>
      </Fragment>
    );
  }
  goHome = () => {
    this.props.history.push('/home')
  }
  addCart = (uniacid, ccid, gid, num) => {
    addGoodsCart('cart_add', uniacid, ccid, gid, num).then(res => {
      new Promise(res => {
        res()
      }).then(() => {
        this.props.history.push('/submit')
      })
    })
  }
  showDrawer = () => {
    this.setState({
      showDrawer: true
    })
  }
  hideDrawer = () => {
    this.setState({
      showDrawer: false
    })
  }
}

export default withRouter(DetailBottomBar);