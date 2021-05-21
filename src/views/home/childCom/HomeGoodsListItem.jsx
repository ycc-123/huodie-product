import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class HomeGoodsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    const { item } = this.props
    return (
      <HomeGoodsListItemStyle>
        <li className='goods-list-item' onClick={() => { this.goDetail(item.id) }}>
          <div className='goods-img'>
            <img src={item.gimg} alt="加载中" onClick={() => { this.goDetail(item.id) }} />
          </div>
          <div className='goods-info'>
            <p className='laiyiquan'>{item.gname}</p>
            <p>市场价: <span>￥</span> {item.mprice}</p>
            <p>
              <span>￥</span>
              {item.oprice}
              {item.selltype === '0' && <button className='goods-button-left'>会员价</button>}
              {item.selltype === '0' && <button className='goods-button-right'><span>￥</span>4.99</button>}
            </p>
            <p>
              已售<span>{item.salenum}</span>
              库存{item.gnum}
            </p>
            {item.selltype === '0' && <img className='goods-info-img' src={require('assets/img/cart2.png')} style={{ display: this.state.show ? 'none' : 'block' }} onClick={(e) => { this.showNum(e) }} alt="正在加载中" />}
            <div className='calculate' style={{ display: this.state.show ? 'block' : 'none' }}>
              <button className='decrement'>
                -
            </button>
              {item.num}
              <button className='increment'>
                +
            </button>
            </div>
            {item.selltype === '1' && <button className='goods-button' >去开团</button>}
          </div>
        </li>
      </HomeGoodsListItemStyle>
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
   return nextProps.item.id !== this.props.item.id || this.state.show !== nextState.show
  }
  showNum = (e) => {
    e.stopPropagation()
    this.setState({
      show: true
    }, () => {
      console.log(this.state.show)
    })
  }
  goDetail = (id) => {
    // 路由携带参数 query
    this.props.history.push('/detail/' + id)
  }
}

const HomeGoodsListItemStyle = styled.div`
.goods-list-item {
  overflow: hidden;
  border-radius: .2rem;
  width: calc(100vw - .64rem);
  height: 3.67rem;
  margin-top: .16rem;
  padding: .3rem;
  background: white;
}

.goods-img {
  width: 2.93rem;
  height: 100%;
  float: left;
}

.goods-img img {
  height: 100%;
  width: 100%;
}

.goods-info {
  position: relative;
  width: 5.57rem;
  height: 100%;
  padding-left: .32rem;
  float: left;
}

.goods-info p:first-child {
  margin-bottom: .2rem;
  text-align: justify;
  letter-spacing: 1px;
  color: #474747;
  width: 100%;
  font-size: .35rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.goods-info p span {
  font-size: .33rem;
}

.goods-info p:nth-child(2) {
  position: relative;
  text-decoration: line-through;
  display: flex;
  align-items: center;
  color: #c1c1c1;
  font-size: .33rem;
}

.goods-info p:nth-child(2) img {
  position: absolute;
  right: 1rem;
  width: .35rem;
  height: auto;
}

.goods-info p:nth-child(3) {
  position: relative;
  display: flex;
  align-items: center;
  height: .6rem;
  font-size: .4rem;
  color: #ff762e;
}
.goods-info p:nth-child(3) span {
  margin-top: .034rem;
}

.goods-button-left, .goods-button-right {
  position: absolute;
  left: 2rem;
  height: 100%;
  border: none;
  font-size: .26rem !important;
}

.goods-button-left {
  background: #f5702a;
  width: .8rem;
  border-top-left-radius: .08rem;
  border-bottom-left-radius: .08rem;
  color: white;
}

.goods-button-right {
  left: 2.8rem;
  width: .93rem;
  font-weight: bold;
  font-size: .27rem !important;
  border-top-right-radius: .08rem;
  border-bottom-right-radius: .08rem;
  color: #ff762e;
  background: #ffe4d5;
}

.goods-button-right span {
  font-size: .2rem !important;
}

.goods-info p:nth-child(4) {
  position: absolute;
  color: #ccc;
  bottom: 0;
  font-size: .3rem;
}

.goods-info-img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: .8rem;
  height: .8rem;
}

.goods-info p:nth-child(4) span {
  font-size: .3rem;
}

.goods-info p:nth-child(4) span:first-child {
  margin-right: .5rem;
}

.goods-button {
  position: absolute;
  background: #ff762e;
  bottom: 0;
  right: -.6rem;
  border: none;
  width: 1.86rem;
  height: .9rem !important;
  /*  padding-left: .05rem; */
  font-size: .35rem;
  color: white;
  border-top-left-radius: .4rem;
  border-bottom-left-radius: .4rem;
}

.goods-button::after {
  content: '';
  width: .16rem;
  height: .16rem;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
  position: absolute;
  top: .37rem;
  right: .15rem;
}

.team {
  position: absolute;
  font-size: .33rem;
  right: 0;
}

.calculate {
  pos
}

`

export default withRouter(HomeGoodsList);