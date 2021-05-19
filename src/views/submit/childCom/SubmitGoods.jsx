import React, { Component } from 'react'
class SubmitGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='submit-goods'>
        <div className='img'>
          这是一张图片
        </div>
        <div className='submit-goods-info'>
          <p>商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述</p>
          <p>商品数量</p>
          <p><span>￥</span>价格</p>
        </div>
      </div>
    );
  }
}

export default SubmitGoods;