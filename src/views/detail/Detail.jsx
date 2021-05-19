import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import DetailSwiper from './childCom/DetailSwiper'
import DetailGoodsInfo from './childCom/DetailGoodsInfo'
import DetailCourier from './childCom/DetailCourier'
import DetailPhotoInfo from './childCom/DetailPhotoInfo'
import DetailRecommend from './childCom/DetailRecommend'
import DetailBottomBar from './childCom/DetailBottomBar'

import PageLoading from 'common/pageLoading/PageLoading'
import BetterScroll from 'common/betterScroll/BetterScroll'

import axios from 'axios'
import { getGoodsDetail, getDetailRecommend } from 'network/detail'
import { Goods } from 'network/detail'

import store from 'store/index'
import { hideLoadingAction } from 'store/actionCreators'
/* import { changeCcid } from 'commons/utils' */

import './style/detail.css'


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsData: '',
      recommend: null,
      goods: null,
    }
    this.goods = {}
  }
  render() {
    const { goodsData, recommend } = this.state
    const scollConfig = {
      probeType: 1
    }
    const scrollStyle = {
      height: 'calc(100vh - 1.5rem)',
      top: '0',
      bottom: '0'
    }
    let swiper
    // 当商品轮播数据长度为0时
    if (goodsData && goodsData.advs.length !== 0) {
      swiper = (
        <DetailSwiper dataList={goodsData.advs} />
      )
    } else if (goodsData && goodsData.gimg) {
      swiper = (
        <DetailSwiper dataList={goodsData.gimg} />
      )
    }
    return (
      <Fragment>
        <PageLoading />
        <div className='detail'>
          <BetterScroll config={scollConfig} style={scrollStyle} ref='scroll'>
            {swiper}
            {this.state.goods && <DetailGoodsInfo goods={this.state.goods} decrementNum={this.decrementNum} incrementNum={this.incrementNum} />}
            <DetailCourier />
            <DetailPhotoInfo />
            {recommend && <DetailRecommend dataList={recommend} />}
          </BetterScroll>
          {this.state.goods && <DetailBottomBar goods={this.state.goods} />}
        </div>
      </Fragment>

    );
  }
  UNSAFE_componentWillMount() {
    axios.all([getGoodsDetail('goods_detail', 53, this.props.match.params.id),
    getDetailRecommend('goods_rand', 53, 2)]).then(res => {
      const action = hideLoadingAction()
      store.dispatch(action)
      this.goods = new Goods(res[0].data)
      this.setState({
        goodsData: res[0].data,
        recommend: res[1].data,
        goods: this.goods
      })
    }).catch(err => {
      alert('数据请求失败,请稍后再试')
    })
  }
  componentDidUpdate() {
    // 组件重新渲染时，刷新scroll可滚动距离，并且让scroll默认x，y都为0 不然有bug
    this.refs.scroll.BScroll.refresh()
    this.refs.scroll.BScroll.scrollTo(0, 0)
  }
  decrementNum = () => {
    if (this.goods.num > 1) {
      this.goods.num -= 1
      this.goods.totalPrice = (this.goods.oprice * this.goods.num).toFixed(2)
      this.setState({
        goods: this.goods
      })
    }
  }
  incrementNum = () => {
    this.goods.num += 1
    this.goods.totalPrice = (this.goods.oprice * this.goods.num).toFixed(2)
    this.setState({
      goods: this.goods
    })
    console.log(this.state.goods)
  }
  componentWillUnmount() {
    this.goods = null
    console.log(this.goods)
  }
}

export default withRouter(Detail);