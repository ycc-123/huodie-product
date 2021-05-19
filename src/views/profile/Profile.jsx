import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import One from './One'
import Two from './Two'
import Three from './Three'
import TabBar from 'common/tabBar/TabBar'

import './profile.css'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: 1
    }
  }
  render() {
    return (
        <Router>
          <ul>
            <li><Link to='/profile/one'>第一个</Link></li>
            <li><Link to='/profile/two'>第二个</Link></li>
            <li><Link to='/profile/three'>第三个</Link></li>
          </ul>
          <div>
            <Route path='/profile/one' component={One}></Route>
            <Route path='/profile/two' component={Two}></Route>
            <Route path='/profile/three' component={Three}></Route>
          </div>
          <TabBar></TabBar>
        </Router>
    )
  }
  componentDidMount() {
    console.log(this.props)
  }
}

export default Profile