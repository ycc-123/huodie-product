import React, { Component } from 'react'

import CategoryLeftItem from './CategoryLeftItem'

import BetterScroll from 'common/betterScroll/BetterScroll'

import store from 'store/index'
import { changeCategoryIndex } from 'store/actionCreators'

class CategoryLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: store.getState().categoryGoods,
      defaultIndex: store.getState().categoryIndex
    }
    this.cancelSub = store.subscribe(() => {
      this.setState({
        data: store.getState().categoryGoods,
        defaultIndex: store.getState().categoryIndex
      })
    })
  }
  render() {
    const scollConfig = {
      probeType: 1
    }
    const scrollStyle = {
      width: '2.46rem',
      height: 'calc(100vh - 1.48rem)',
      top: '0'
    }
    const { data } = this.state
    return (
      <div className='categoryLeft'>
        <BetterScroll config={scollConfig} style={scrollStyle}>
          <ul>
            <li className='category-left-head'></li>
            {data.map((item, index) => {
              return (
                <CategoryLeftItem key={item.id + index}
                  item={item}
                  index={index}
                  active={this.state.defaultIndex === index ? true : false}
                  onChangeActive={() => { this.onChangeActive(index) }} />
              )
            })}
          </ul>
        </BetterScroll>
      </div>
    );
  }
  onChangeActive(index) {
    const action = changeCategoryIndex(index)
    store.dispatch(action)
  }
  componentWillUnmount() {
    // 取消订阅者模式
    this.cancelSub()
  }
}

export default CategoryLeft;