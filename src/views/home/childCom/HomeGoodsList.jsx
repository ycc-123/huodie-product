import React, { Component } from 'react'
import HomeGoodsListItem from './HomeGoodsListItem'

import '../style/goods.css'
class HomeGoodsList extends Component {
  render() {
    const { goodsList } = this.props
    return (
      <div className='goods-list'>
        {goodsList.map((item, index) => {
          return (
            <HomeGoodsListItem key={item.id + index} item={item} />
          )
        })}
      </div>
    );
  }
}

export default HomeGoodsList;