import React, { Component } from 'react'
import HomeGoodsListItem from './HomeGoodsListItem'

import '../style/goods.css'
class HomeGoodsList extends Component {
  render() {
    const { goodsList } = this.props
    return (
      <ul className='goods-list'>
        {goodsList.map((item, index) => {
          return (
            <HomeGoodsListItem key={item.id + index} item={item} />
          )
        })}
      </ul>
    );
  }
  componentDidUpdate = () => {
    const p = document.querySelectorAll('.laiyiquan')
    p.forEach(item => {
      if(item.offsetHeight >= 30 ) {
        item.nextSibling.style.marginBottom = .08 + 'rem'
        item.style.marginBottom = .2+ 'rem'
        // console.log(item.offsetHeight)
      } else {
        item.style.marginBottom = .4+ 'rem'
        item.nextSibling.style.marginBottom = .2 + 'rem'
        // console.log(item.offsetHeight)
      }
    })
  }
}

export default HomeGoodsList;