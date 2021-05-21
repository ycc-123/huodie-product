import React, { Component } from 'react'

import BetterScroll from 'common/betterScroll/BetterScroll'

import 'assets/css/common/drawer.css'
class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { style, active } = this.props
    let drawerStyle = JSON.parse(JSON.stringify(style)) 
    drawerStyle.bottom = active ? '1.28rem' : `calc(-${drawerStyle.height} - 1.28rem)`
    const scollConfig = {
      probeType: 1
    }
    const scrollStyle = {
      top: '1rem'
    }
    console.log(this.props)
    return (
      <div className='drawer' style={drawerStyle}>
        <div className='drawer-btn'>
          <button className='drawer-no'>
            取消
          </button>
          <button className='drawer-ok' onClick={this.ok}>
            确定
          </button>
        </div>
        <BetterScroll config={scollConfig}
          style={scrollStyle}>
          {this.props.children}
        </BetterScroll>
      </div>
    )
  }
  ok = () => {
    alert('确定')
  }
}

export default Drawer;