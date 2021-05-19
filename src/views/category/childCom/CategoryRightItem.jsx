import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
class CategoryRightItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let goods
    const { item } = this.props
    if (item.selltype === '0') {
      goods = (
        <li className='category-goods clearfix' >
          <img className='category-img' src={item.gimg} alt="加载中" onClick={() => { this.goDetail(item.id) }} />
          <div className='category-goods-info'>
            <p>{item.gname}</p>
            <p>市场价: <span>￥</span> {item.mprice}</p>
            <p>
              <span>￥</span>
              {item.oprice}
              <button className='goods-button-left'>会员价</button>
              <button className='goods-button-right'><span>￥</span>4.99</button>
            </p>
            <p>
              已售<span>{item.salenum}</span>
              库存{item.gnum}
              <img className='category-goods-img' src={require('assets/img/购物车.svg')} alt="正在加载中" />
            </p>
          </div>
        </li>
      )
    } else {
      goods = (
        <li className='category-goods clearfix' >
          <img className='category-img' src={item.gimg} alt="加载中" onClick={() => { this.goDetail(item.id) }} />
          <div className='category-goods-info'>
            <p>{item.gname}</p>
            <p>市场价: <span>￥</span> {item.mprice}</p>
            <p>
              <span>￥</span>
              {item.oprice}
              <button className='goods-button-left'>会员价</button>
              <button className='goods-button-right'><span>￥</span>4.99</button>
            </p>
            <p>
              已售<span>{item.salenum}</span>
              库存{item.gnum}
              <img className='category-goods-img' src={require('assets/img/购物车.svg')} alt="正在加载中" />
            </p>
          </div>
        </li>
      )
    }
    return (
      <Fragment>
        {goods}
      </Fragment>
    );
  }
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(this.props.item) !== JSON.stringify(nextProps.item)
  }
  goDetail = (id) => {
    // 路由携带参数 query
    this.props.history.push('/detail/' + id)
  }
}

export default withRouter(CategoryRightItem)