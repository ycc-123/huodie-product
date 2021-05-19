import React, { Component, Fragment } from 'react'
import store from 'store/index'

class PageLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: store.getState().loading
    }
    // 订阅者模式
    this.cancelSub = store.subscribe(() => {
      this.setState({
        loading: store.getState().loading
      })
    })
    this.count = 0
    this.showLoading = null
  }
  render() {
    const showLoding = this.count <= 2 && this.state.loading ? 'block' : 'none'
    this.count += 1
    console.log(this.count)
    return (
      <Fragment>
        {this.count <= 2 && <div className='home-loadingBg' style={{ display: showLoding }}>
          <div className='home-loading-img'>
            <img src={require('assets/img/加载.png')} alt="加载中" />
          </div>
        </div>}
      </Fragment>

    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.loading !== nextState.loading
  }
  componentWillUnmount() {
    this.cancelSub()
  }
}

export default PageLoading;