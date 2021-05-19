import React, { Component } from 'react'
class DetailGoodsInfo extends Component {
  render() {
    const { goods } = this.props
    return (
      <div className='detail-goods-info'>
        <p>{goods.gname}</p>
        <p>
          <span>￥</span>5.0
          <span className='detail-left'>会员价</span>
          <span className='detail-right'>￥4.99</span>
        </p>
        <p ref='aaaa'>市场价: <span>￥</span>{goods.mprice}
          {goods.selltype === '0' && <span className='detail-calculate'>
            <button className='detail-decrement' onClick={this.decrement}>
              -
            </button>
            {goods.num}
            <button className='detail-increment' onClick={this.increment}>
              +
            </button>
          </span>}
        </p>
        <p>会员卡</p>
        <p>门店信息<span>进入店铺</span></p>
        <div className='detail-goods-sales'>
          <span>已售{goods.salenum}</span>
          <span>剩余{goods.gnum}</span>
        </div>
      </div>
    )
  }
  decrement = () => {
    this.props.decrementNum()
  }
  increment = () => {
    this.props.incrementNum()
  }
  componentDidMount = () => {
    console.log(this.refs.aaaa.offsetTop)
  }
}

export default DetailGoodsInfo;