import React, { Component } from 'react'
/* import VideoPalyer from './childCom/VideoPalyer'; */
/* import ALiYun from './childCom/ALiYun'; */
import UserInfo from './childCom/UserInfo'

import TabBar from 'common/tabBar/TabBar'

import './style/live.css'
class Live extends Component {
  render() {
    /* const videoConfig = {
      autoplay: true,  //自动播放
      language: 'zh-CN',
      controls: false,  //控制条
      preload: 'auto',  //自动加载
      errorDisplay: true,  //错误展示
      width: window.outerWidth,  //宽
      height: window.outerHeight,  //高
      // fluid: true,  //跟随外层容器变化大小，跟随的是外层宽度
      // controlBar: false,  // 设为false不渲染控制条DOM元素，只设置controls为false虽然不展示，但还是存在
      // textTrackDisplay: false,  // 不渲染字幕相关DOM
      userActions: {
        hotkeys: true  //是否支持热键
      },
      sources: [
        {
          src: 'http://playdev.huodieyun.com/53/53.m3u8?auth_key=61583388629-0-0-4f30062e945eeb0f7917f329b6dbd943',
        }
      ]
    } */
    return (
      <div>
        <UserInfo />
        {/* <VideoPalyer {...videoConfig} /> */}
        {/* <ALiYun /> */}
        <TabBar />
        {/* <video src="http://playdev.huodieyun.com/53/53.m3u8?auth_key=61583388629-0-0-4f30062e945eeb0f7917f329b6dbd943"></video> */}
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props)
  }
}

export default Live