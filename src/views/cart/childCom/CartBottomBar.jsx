import React, { Component, Fragment } from 'react'

import store from 'store/index'
import { isSelectAllAction } from 'store/actionCreators'
import { totalPrice, isSelectAllGoods } from 'commons/utils'
class CartBottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: store.getState().cartGoods
    }
    this.cancelSub = store.subscribe(() => {
      this.setState({
        data: store.getState().cartGoods
      })
    })
  }
  render() {
    const { data } = this.state
    if (data.length !== 0) {
      totalPrice()
      isSelectAllGoods()
    }
    return (
      <Fragment>
        <div className='cart-bottom-bar clearfix'>
          <div className='global-choose'>
            {store.getState().selectAll && <img src={require('assets/img/select1.png')} alt="图片太帅手机无法显示"
              onClick={this.selectAll} />}
            {!store.getState().selectAll && <img src={require('assets/img/select.png')} alt="图片太帅手机无法显示"
              onClick={this.selectAll} />}
            全选
          </div>
          <div className='settlement'>去结算({store.getState().totalNumber})</div>
          <div className='total-price'><span>合计:￥</span>{store.getState().totalPrice}</div>
        </div>
      </Fragment>
    );
  }
  componentWillUnmount() {
    // 取消订阅者模式
    this.cancelSub()
  }
  selectAll = () => {
    // 先将action提交出去 改变自身的选中与未选中状态
    const action = isSelectAllAction()
    store.dispatch(action)
    // 全选  查找每一个元素的checked 如果有一个取反为true 说明有一个未选中,存在未选中的商品这时返回一个true 然后再次取反返回false
    if (!store.getState().cartGoods.find(item => !item.selected)) {
      store.getState().cartGoods.forEach(item => item.selected = false)
    } else {
      store.getState().cartGoods.forEach(item => item.selected = true)
    }
  }
}

export default CartBottomBar;