import React, { Component } from 'react'
class HomeLive extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { style } = this.props
    console.log(style)
    return (
      <div className='home-live' style={{ display: style}}>
        <div className='home-live-cover'>
          这是直播封面
        </div>
      </div>
    )
  }
}

export default HomeLive;