import React, { Component, Fragment } from 'react'

import CartBottomBar from './childCom/CartBottomBar'
import CartGoods from './childCom/CartGoods'
import TabBar from 'common/tabBar/TabBar'
import BetterScroll from 'common/betterScroll/BetterScroll'

import store from 'store/index'
import { getDataAction } from 'store/actionCreators'
import { showCartGoods } from 'network/cart'

import { ccid } from 'commons/utils'

import './style/cart.css'

class Cart extends Component {
  constructor(props) {
    super(props)
    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidRecover)
    this.cartGoods = []
  }
  render() {
    const srollConfig = {
      probeType: 0,
    }
    const scrollStyle = {
      top: '.2rem',
      bottom: '2.45rem'
    }
    return (
      <Fragment>
        <BetterScroll ref='cartScroll' config={srollConfig} style={scrollStyle}>
          <CartGoods />
        </BetterScroll>
        <CartBottomBar />
        <TabBar />
      </Fragment>
    )
  }
  UNSAFE_componentWillMount() {
    showCartGoods('cart_view', 53, ccid).then(res => {
      const action = getDataAction(res.data)
      store.dispatch(action)
      console.log(res)
    })
  }
  componentDidUpdate() {
    /* showCartGoods('cart_view', 53 , ccid).then(res => {
      const action = getDataAction(res.data)
      store.dispatch(action)
      console.log(res)
    }) */
  }
  componentDidCache = () => {
    // 获取组件进入缓存时scroll的y值
    this.cartGoods = store.getState().cartGoods
    console.log(this.cartGoods)

  }
  componentDidRecover = () => {
    showCartGoods('cart_view', 53 , ccid).then(res => {
      const action = getDataAction(res.data)
      store.dispatch(action)
      console.log('请求成功')
    })
  }
}

export default Cart