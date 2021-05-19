import React, { Component, Fragment } from 'react'
import { delCartGoods } from 'network/cart'
import store from 'store/index'
import { isDeleteGoods, isSelectStore, isDecrementGoods, isIncrementGoods } from 'store/actionCreators'

import { isSelectAllGoods } from 'commons/utils'
class CartGoodsItem extends Component {
  render() {
    const { selected } = this.props.goods
    return (
      <Fragment>
        <li className='cart-goods-item'>
          <div className='cart-goods-box'>
            {selected && <div className='choose'>
              <img src={require('assets/img/select1.png')} alt="图片太帅手机不配显示"
                onClick={() => { this.changenChecked(this.props.index) }} />
            </div>}

            {!selected && <div className='choose'>
              <img src={require('assets/img/select.png')} alt="图片太帅手机不配显示"
                onClick={() => { this.changenChecked(this.props.index) }} />
            </div>}
            <div className='cart-goods-info'>
              <div className='cart-goods-info-img'>
                <img src={this.props.goods.img} alt="图片太帅手机不配显示" />
              </div>
              <div className='cart-info'>
                <p className='cart-describe'>
                  {this.props.goods.title}
                </p>
                <p className='cart-heavy'>
                  规格: 500
                </p>
                <p className='cart-price'>
                  <span className='cart-price-span'>￥</span>
                  {this.props.goods.oprice.toFixed(2)}
                </p>
                <div className='cart-button'>
                  <button className='cart-decrement' onClick={() => { this.decrementGoods(this.props.index) }}>-</button>
                  <span className='cart-num'>{this.props.goods.num}</span>
                  <button className='cart-increment' onClick={() => { this.incrementGoods(this.props.index) }}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className='del' onClick={() => { this.deleteGoods(this.props.index, this.props.goods.id) }}>
            <img src={require('assets/img/delete.png')} alt="正在加载中" />
          </div>
        </li>
      </Fragment>
    );
  }
  shouldComponentUpdate(nextProps) {
    // 返回true会渲染   性能优化 当选择一个商品时会默认重新渲染全部的商品
    // 通过上个商品的checked和下一个商品的checked值进行比较  不相同返回ture 渲染这个组件 否则不渲染
    return JSON.stringify(this.props) !== JSON.stringify(nextProps)
    /* return this.props.goods.checked !== nextProps.goods.checked || this.props.goods.num !== nextProps.goods.num  */
  }
  // 是否选中
  changenChecked = (index) => {
    const action = isSelectStore(index)
    store.dispatch(action)
    isSelectAllGoods()
  }
  // 删除商品
  deleteGoods = (index, id) => {
    console.log(id)
    delCartGoods('cart_del', 53, id).then(res => {
      console.log('删除商品成功')
    })
    const action = isDeleteGoods(index)
    store.dispatch(action)
  }
  // 减少商品数量
  decrementGoods = (index) => {
    if (store.getState().cartGoods[index].num > 1) {
      const action = isDecrementGoods(index)
      store.dispatch(action)
    }
  }
  // 增加商品数量
  incrementGoods = (index) => {
    const action = isIncrementGoods(index)
    store.dispatch(action)
  }
}

export default CartGoodsItem;