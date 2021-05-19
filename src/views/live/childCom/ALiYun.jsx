import React, { Component, Fragment } from 'react'
import Player from 'aliplayer-react'
import wx from 'weixin-js-sdk'
/* import Flash from 'videojs-flash'; */
/* import Aliplayer from 'aliplayer-react'; */

class ALiYun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instance: null
    }
  }
  render() {
    // 存在说明是IOS系统
    const ver = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
    const config = {
      source: "//playdev.huodieyun.com/53/53.m3u8?auth_key=61583388629-0-0-4f30062e945eeb0f7917f329b6dbd943",
      width: "100%",
      height: "100vh",
      videoWidth: '100%',
      videoHeight: '100%',
      autoplay: true,
      isLive: true,
      rePlay: false,
      // 安卓为false ios为true
      playsinline: ver ? true : false,
      preload: true,
      controlBarVisibility: "always",
      useH5Prism: true,
      x5_type: 'h5',
      x5_fullscreen: true,
      components: [
        {
          name: "RateComponent",
          type: Player.components.RateComponent,
        }
      ]
    }
    return (
      <Fragment>
        <div id='aaaaa'>

        </div>
        <Player config={config} onGetInstance={instance => this.setState({ instance })} />
      </Fragment>
    );
  }
  click = () => {
    alert('触发了点击事件')
  }
  componentDidMount = () => {
    /* const { instance } = this.state
    instance.play() */
    this.autoPlay()
  }
  componentDidUpdate = () => {
    const { instance } = this.state
    /* this.setState({
      instance
    }) */
    instance.play()
    this.autoPlay()
  }
  autoPlay = () => {
    const { instance } = this.state
    wx.config({
      // 配置信息, 即使不正确也能使用 wx.ready
      debug: false,
      appId: '',
      timestamp: 1,
      nonceStr: '',
      signature: '',
      jsApiList: []
    })
    wx.ready(() => {
      if (instance) {
        instance.play()
      }
    })
  }
}

export default ALiYun;