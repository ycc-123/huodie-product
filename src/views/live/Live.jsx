import React, {Component, Fragment} from 'react'
import VideoJs from 'video.js';

import TabBar from 'common/tabBar/TabBar'

class Live extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: 1
    }
  }
  render() {
    return (
      <Fragment>
        <div>这是live</div>
        <TabBar></TabBar>
      </Fragment>
    )
  }
  componentDidMount() {
    console.log(this.props)
  }
}

export default Live