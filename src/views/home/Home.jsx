import React, { Component, Fragment } from 'react'

import HomeGoodsList from './childCom/HomeGoodsList'
import HomeHead from './childCom/HomeHead'
import HomeIcon from './childCom/HomeIcon'
import HomeNotice from './childCom/HomeNotice'
import HomeLive from './childCom/HomeLive'

import PageLoading from 'common/pageLoading/PageLoading'
// import { getHomeData } from '../../network/home'

import SwiperComponent from 'common/swiper/SwiperComponent'
import BetterScroll from 'common/betterScroll/BetterScroll'
import TabBar from 'common/tabBar/TabBar'

// import store from 'store/index'
// import { hideLoadingAction } from 'store/actionCreators'

import axios from 'axios'
import { getHomeBanner, getHomeGoods, getHomeLiveList, getHomeAdvertising } from 'network/home'

import './style/home.css'


/* import { getHomeData } from 'network/home.js' */


class Home extends Component {
  constructor(props) {
    super(props)
    // 被缓存时，被恢复时
    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidRecover)
    this.state = {
      dataList: [],
      goodsList: [],
      advertising: [],
      live: '',
      topTip: '下拉刷新',
      bottomTip: '加载中',
      page: 1,
      loading: false,
      loadingMore: false
    }
    this.isLoadMore = true
    this.saveY = 0
  }
  render() {
    const { loading, loadingMore, live } = this.state
    const discountConfig = {
      height: '3.59rem'
    }
    const bannerConfig = {
      height: '4.53rem'
    }
    const scollConfig = {
      probeType: 1
    }
    const scrollStyle = {
      top: '1.2rem',
      bottom: '1.28rem'
    }
    const showLoding = loadingMore ? 'visible' : 'hidden'
    const showLive = live === 'on' ? 'block' : 'none'
    return (
      <Fragment>
        <PageLoading loading={loading}/>
        <HomeHead />
        <BetterScroll loadMore={this.loadMore}
          isLoadMore={this.isLoadMore}
          ref='scroll'
          config={scollConfig}
          style={scrollStyle}>
          <div className='top-tip'>{this.state.topTip}</div>
          <SwiperComponent dataList={this.state.dataList} config={bannerConfig} />
          <HomeIcon ref={icon => this.icon = icon} className='home-icon' />
          <HomeNotice />
          <SwiperComponent dataList={this.state.advertising} config={discountConfig} />
          <HomeLive style={showLive} />
          <HomeGoodsList goodsList={this.state.goodsList} />
          <div className='bottom-tip' style={{ visibility: showLoding }}>
            <img src={require('assets/img/loading.png')} alt="加载中" />
            莫急，等一下
          </div>
        </BetterScroll>
        <TabBar />
      </Fragment>
    )
  }
  /* 网络请求 */
  UNSAFE_componentWillMount() {
    let loading = true
    setTimeout(() => {
      if (loading) {
        this.setState({
          loading: true
        })
      }
    }, 1000)
    const data = {
      uniacid: 53
    }
    axios.all([getHomeBanner('banner', 53),
    getHomeGoods('shopajax', 53, 1, 4),
    getHomeLiveList('GetLiveStatusInfo', 53),
    getHomeAdvertising(data)]).then(res => {
      this.setState({
        dataList: res[0].data,
        goodsList: res[1].list,
        live: res[2].data.LIVE,
        loading: false,
        advertising: res[3].data.data
      }, () => {
        loading = false
        this.refs.scroll.BScroll.refresh()
      })
    }).catch(err => {
      console.log('数据请求失败请稍候再试')
    })

  }
  componentDidCache = () => {
    // 获取组件进入缓存时scroll的y值
    this.saveY = this.refs.scroll.BScroll.y
    console.log(this.refs.scroll.BScroll)
  }
  componentDidRecover = () => {
    this.refs.scroll.BScroll.refresh()
    this.refs.scroll.BScroll.scrollTo(0, this.saveY)
  }
  componentWillUnmount() {
    this.cancelSub()
  }
  // 加载更多
  loadMore = () => {
    let loading = true
    setTimeout(() => {
      if (loading) {
        this.setState({
          loadingMore: true
        })
      }
    }, 1000)
    if (this.state.page < 5) {
      getHomeGoods('shopajax', 53, this.state.page, 4).then(res => {
        this.setState({
          goodsList: [...this.state.goodsList, ...res.list],
          page: this.state.page + 1,
          loadingMore: false
        }, () => {
          loading = false
          this.refs.scroll.BScroll.finishPullUp()
          this.refs.scroll.BScroll.refresh()
        })
      }).catch(err => {
        console.log(err.request)
      })
    } else {
      this.isLoadMore = false
      let bottomTip = document.querySelector('.bottom-tip')
      bottomTip.style.visibility = 'visible'
      bottomTip.innerHTML = '商品已经全部加载完成'
    }
  }
}

export default Home