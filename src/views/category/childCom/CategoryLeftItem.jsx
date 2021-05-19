import React, { Component, Fragment } from 'react'

import store from 'store/index'
import { saveCategoryGoods } from 'store/actionCreators'
import { getCategoryGoods } from 'network/category'
class CategoryLeftItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      index: this.props.index
    }
  }
  render() {
    const { item, index } = this.state
    let title
    if (this.props.active) {
      title = (
        <li className='category-title category-title-active' ref='li' onClick={() => { this.getGoodsData(index, item) }}>
          {item.name}
        </li>
      )
    } else {
      title = (
        <li className='category-title' ref='li' onClick={() => { this.getGoodsData(index, item) }}>
          {item.name}
        </li>
      )
    }
    return (
      <Fragment>
        {title}
      </Fragment>
    );
  }
  componentWillUnmount() {
    console.log('卸载完成')
  }
  /* shouldComponentUpdate (nextProps) {
    console.log(this.props)
    console.log(nextProps)
    return this.props !== nextProps
  } */
  getGoodsData = (index, item) => {
    this.props.onChangeActive(index)
    if (!store.getState().categoryGoods[index].data) {
      getCategoryGoods(53, 'ajax_optimization_bymobile', item.id, 1, 25, 3, 0).then(res => {
        const action = saveCategoryGoods(index, res.list[0].data)
        store.dispatch(action)
      })
    }
  }
}

export default CategoryLeftItem;