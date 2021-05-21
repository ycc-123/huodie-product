import React, { Component, Fragment } from 'react'

import CategoryRightItem from './CategoryRightItem'

import BetterScroll from 'common/betterScroll/BetterScroll'

import store from 'store/index'

class CategoryRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: store.getState().categoryIndex,
      goodsData: store.getState().categoryGoods
    }
    this.cancelSub = store.subscribe(() => {
      this.setState({
        index: store.getState().categoryIndex,
        goodsData: store.getState().categoryGoods
      })
    })
  }
  render() {
    const scollConfig = {
      probeType: 1
    }
    const scrollStyle = {
      top: '0',
      bottom: '0',
      width: '7.26rem',
    }
    let dom
    if (this.state.goodsData[this.state.index] && this.state.goodsData[this.state.index].data) {
      dom = (
        <Fragment>
          {this.state.goodsData[this.state.index].data.map((item, index) => {
            return (
              <CategoryRightItem key={item.id + index} item={item} />
            )
          })}
        </Fragment>
      )
    } else {
      dom = (
        <Fragment />
      )
    }
    return (
      <div className='categoryRight'>
        <BetterScroll config={scollConfig} style={scrollStyle} ref='scroll'>
          <ul>
            {dom}
          </ul>
        </BetterScroll>
      </div>
    );
  }
  componentDidUpdate() {
    // 默认每次加载x=0，y=0 不然会有bug
    // console.log(this)
    /* console.log('进来了') */
    /* this.refs.scroll.BScroll.refresh() */
    /* this.refs.scroll.BScroll.scrollTo(0, 0) */
  }
  componentWillUnmount() {
    // 取消订阅者模式
    this.cancelSub()
  }
}

export default CategoryRight;