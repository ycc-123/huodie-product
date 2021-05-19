import React, { Component, Fragment } from 'react'

import CategoryLeft from './childCom/CategoryLeft'
import CategoryRight from './childCom/CategoryRight'
import CategoryTabBar from './childCom/CategoryTabBar'

import TabBar from 'common/tabBar/TabBar'

import store from 'store/index'
import { saveCategoryGoods, saveCategoryTitle } from 'store/actionCreators'
/* import axios from 'axios' */
import { getCategoryData, getCategoryGoods } from 'network/category'

import './style/category.css'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'goods'
    }
  }
  render() {
    let dom, image
    if (this.state.type === 'goods') {
      dom = (
        <Fragment>
          <CategoryLeft />
          <CategoryRight />
        </Fragment>
      )
      image = (
        <img src={require('assets/img/left.png')} alt="加载中" onClick={this.changeImage} />
      )
    } else {
      dom = (
        <Fragment>
          <CategoryTabBar />
        </Fragment>
      )
      image = (
        <img src={require('assets/img/right.png')} alt="加载中" onClick={this.changeImage} />
      )
    }
    return (
      <Fragment>
        <div className='category-head-button'>
          {image}
        </div>
        <div className='category-main'>
          {dom}
        </div>
        <TabBar />
      </Fragment>
    )
  }
  componentDidCache = () => {
    console.log(this.refs)
  }
  UNSAFE_componentWillMount() {
    getCategoryData('category', 53).then(res => {
      const action = saveCategoryTitle(res.data)
      store.dispatch(action)
      getCategoryGoods(53, 'ajax_optimization_bymobile', res.data[0].id, 1, 2, 3, 0).then(res => {
        const action = saveCategoryGoods(0, res.list[0].data)
        store.dispatch(action)
      })
    })
  }
  componentDidMount = () => {
    let title = document.querySelector('title')
    title.innerText = '分类'
  }
  changeImage = () => {
    if (this.state.type === 'swiper') {
      this.setState({
        type: 'goods'
      })
    } else {
      this.setState({
        type: 'swiper'
      })
    }
  }
}

export default Category