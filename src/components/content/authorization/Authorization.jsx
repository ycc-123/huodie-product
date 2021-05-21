import React, { Component } from 'react';
import styled from 'styled-components'
import store from 'store/index'
import wx from 'weixin-js-sdk'
// import axios from 'axios'
import {saveUserInfo} from 'store/actionCreators'



const AuthStyle = styled.div`
  .text{
    color:white;
  }
`

class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  componentDidMount() {

  

    wx.config({
      debug:true, // 开启调试模式
      appid:'wx866e0a731d303c29', // 公众号唯一识别
      timestamp:1590782178,// 生成签名的时间戳
      nonceStr:'adfadsf4564561327s',// 生成签名的随机串
      signature:'c1bd73bc505840a4db142873306bf10f243444ff',// 签名
      jsApiList:[
      ] // 需要使用的JS接口列表
    });

  //   let uniacid = '53'

  //   axios.post(baseUrl + 'op=getSet',{uniacid}).then( res => {
  //     console.log(res)
  // })
  }



  render(){ 
    return ( 
      <AuthStyle>
        <div >
         <h1 className='text' onClick={this.getAuth.bind(this)}>授权</h1>
        </div>
      </AuthStyle>
     
     );
  }

  getAuth(e){
    console.log('tettt',e)

    let data = {   
      "openid":"45464ssfdsa",
      "nickname": '陈为',
      "sex":"1",
      "province":"PROVINCE",
      "city":"CITY",
      "country":"COUNTRY",
      "headimgurl":"http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
      "privilege":[ "PRIVILEGE1" ,"PRIVILEGE2"],
      "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
    }

    const action = saveUserInfo(data)

    store.dispatch(action)
    



    wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
      wx.config({
        debug:true, // 开启调试模式
        appid:'wx866e0a731d303c29', // 公众号唯一识别
        timestamp:1590782178,// 生成签名的时间戳
        nonceStr:'adfadsf4564561327s',// 生成签名的随机串
        signature:'c1bd73bc505840a4db142873306bf10f243444ff',// 签名
        jsApiList:[
        ] // 需要使用的JS接口列表
      });
    }); 

  }
}
 
export default Authorization;