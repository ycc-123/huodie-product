import React, { Component } from 'react'
import videojs from 'video.js'
import videozhCN from 'video.js/dist/lang/zh-CN.json'
import 'video.js/dist/video-js.css'
import 'videojs-flash'

class VideoPalyer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>  {/*这个带有属性的div目前没看到作用，可以去掉*/}
          <video ref={node => this.videoNode = node} className="video-js vjs-big-play-centered" data-setup='{}'
            controls  /*这个属性规定浏览器为该视频提供播放控件*/
            /* style="object-fit:fill"  */ /*加这个style会让 Android / web 的视频在微信里的视频全屏，如果是在手机上预览，会让视频的封面同视频一样大小*/
            webkit-playsinline = "true"  /*这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放*/
            x-webkit-airplay = "true"  /*这个属性还不知道作用*/
            /* playsinline */ /*IOS微信浏览器支持小窗内播放*/
            x5-video-player-type="h5" /*启用H5播放器,是wechat安卓版特性*/
            x5-video-orientation ="portraint" /*播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏*/
            x5-video-player-fullscreen = "true" /*全屏设置，设置为 true 是防止横屏*/
            preload = "auto" /*这个属性规定页面加载完成后载入视频*/ >
          </video>
        </div>
      </div>
    );
  }
  /* componentDidMount() {
    videojs.options.flash.swf = require('videojs-swf/dist/video-js.swf')
    this.player = videojs(this.refs.node, this.props, () => {
      console.log(this)
    })
  } */
  componentDidMount() {
    // instantiate Video.js
    //这里的this.props是上级传进来的video的options
    const player = videojs(this.videoNode, this.props, function onPlayerReady() {
      /* this.size(window.outerWidth, window.outerHeight) */
      this.on('play', () => {
        alert('播放成功')
      })
      this.on('pause', () => {
        console.log('暂停成功')
      })
      /* this.player.paly() */
    });
    /*  this.player.paly() */
    videojs.addLanguage('zh-CN', videozhCN);
    // this.player.liveTracker.on('liveedgechange', () => {
    // console.log('跟随直播');
    // this.player.liveTracker.seekToLiveEdge();
    // });
  }
  componentDidUpdate = () => {
    console.log(12312321312321)
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log(this.width())
      console.log(this.height())
      /* this.size(window.outerWidth, window.outerHeight) */
      this.on('play', () => {
        console.log('播放成功')
      })
      this.on('pause', () => {
        console.log('暂停成功')
      })
      this.paly()
    });
    videojs.addLanguage('zh-CN', videozhCN);
  }
  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
}

export default VideoPalyer;