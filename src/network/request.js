import axios from 'axios'
import store from 'store/index'
import { showLoadingAction, hideLoadingAction } from 'store/actionCreators'

// 重新请求的次数,请求的间隙
export function request(config) {
  let loading
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://dev.huodiesoft.com',
    timeout: 1000
  })
  // 2.axios的拦截器
  // 2.1请求拦截器的作用
  instance.interceptors.response.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })

  // 2.2响应拦截器
  instance.interceptors.response.use(res => {
      if(loading === 1) {
        const action = hideLoadingAction()
        store.dispatch(action)
      }
    return res.data
  }, async err => {
    let config = err.config;
    // 设置一个变量用来跟踪重试次数 判断变量是否存在,不存在为0
    config.retryCount = config.retryCount || 0;
    if (config.retryCount === 0 && (config.params.op === 'shopajax' || config.params.op === 'goods_detail')) {
      const action = showLoadingAction()
      store.dispatch(action)
      loading = 1
    }
    // 判断重试的次数是否大于最大值,大于最大值发送错误消息
    if (config.retryCount >= 5) {
      return Promise.reject(err);
    }
    // 自增重试次数
    config.retryCount += 1;
    // 创建一个新的promis对象 在定时过后发送一个解决函数 收到解决函数才能then
    console.log(config.retryCount)
    var backoff = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    // backoff能进入then,在一秒之后发送一个一样新的网络请求
    return await backoff.then(() => {
      return instance(config)
    })
  })

  // 3.发送真正的网络请求,返回Promise
  return instance(config)
}
