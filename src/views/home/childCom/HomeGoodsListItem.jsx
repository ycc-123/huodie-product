import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class HomeGoodsList extends Component {
  render() {
    const { item } = this.props
    let goods
    if (item.selltype === '0') {
      goods = (
        <div className='goods-list-item'>
          <div className='goods-img'>
            <img src={item.gimg} alt="加载中" onClick={() => { this.goDetail(item.id) }} />
          </div>
          <div className='goods-info'>
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
            </p>
            <img className='goods-info-img' src={require('assets/img/购物车.svg')} alt="正在加载中" />
          </div>
        </div>
      )
    } else {
      goods = (
        <div className='goods-list-item'>
          <div className='goods-img'>
            <img src={item.gimg} alt="加载中" onClick={() => { this.goDetail(item.id) }} />
          </div>
          <div className='goods-info'>
            <p>{item.gname}</p> 
            <p>
              市场价: <span>￥</span> {item.mprice}
              <img src={require('assets/img/团购.png')} alt='加载中' />
              <label className='team'>
                3人团
              </label>
            </p>
            <p>
              <span>￥</span>
              {item.oprice}
            </p>
            <p>
              已售<span>{item.salenum}</span>
              库存{item.gnum}
            </p>
            <button className='goods-button'>去开团</button>
          </div>
        </div>
      )
    }
    return (
      <Fragment>
        {goods}
      </Fragment>
    )
  }
  shouldComponentUpdate(nextProps) {
    return this.props.item.id !== nextProps.item.id
  }
  goDetail = (id) => {
    // 路由携带参数 query
    this.props.history.push('/detail/' + id)
  }
}

export default withRouter(HomeGoodsList);