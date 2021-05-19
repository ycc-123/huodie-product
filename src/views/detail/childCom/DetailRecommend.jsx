import React, { Component } from 'react'
class DetailRecommend extends Component {
  render() {
    const { dataList } = this.props
    return (
      <div className='detail-recommend'>
        <div className='detail-recommend-text'>
          <span className='detail-recommend-raidus-left'></span>
          猜你喜欢
          <span className='detail-recommend-raidus-right'></span>
        </div>
        <div className='detail-recommend-goods'>
          {
            dataList.map((item, index) => {
              return (
                <div className='detail-recommend-goods-item' key={item.id + index}>
                  <div className='recommend-img'>
                    <img src={item.gimg} alt="" />
                  </div>
                  <p>{item.gname}</p>
                  <p><span>￥</span>{item.oprice}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default DetailRecommend;