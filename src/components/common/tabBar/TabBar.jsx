import React, { Component } from 'react'
import TabBarItem from './TabBarItem'
import { HashRouter as Router, withRouter } from 'react-router-dom'


class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabArr: [
        {id: 1010, content: '首页', src: require('assets/img/首页.png'), activeSrc: require('assets/img/首页1.png'), path: '/home'},
        {id: 1011, content: '分类', src: require('assets/img/分类.png'), activeSrc: require('assets/img/分类1.png'), path: '/category'},
        {id: 1012, content: '购物车', src: require('assets/img/购物车.png'), activeSrc: require('assets/img/购物车1.png'), path: '/cart'},
        {id: 1013, content: '直播', src: require('assets/img/直播.png'), activeSrc: require('assets/img/直播1.png'), path: '/live'},
        {id: 1014, content: '我的', src: require('assets/img/我的.png'), activeSrc: require('assets/img/我的1.png'), path: '/profile'}
      ]
    }
  }
  render() {
    return (
      <Router>
        <footer className="tab-bar">
          { this.state.tabArr.map((item, index) => {
            return (
              <TabBarItem active={ this.props.history.location.pathname === item.path ? true : false}
                onChangeActive={ () => this.onChangeActive(item.path) }
                content={ item } 
                key={ index }
                index={ index }>
              </TabBarItem>
            )
          }) }
        </footer>
      </Router>
    )
  }
  onChangeActive(path) {
    this.props.history.push(path)
  }
}

export default withRouter(TabBar)