import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'


/* import Home from '../views/home/Home' */

class TabBarItem extends Component {
  constructor(props) {
    super(props)
    this.onChangeActive = this.onChangeActive.bind(this, this.props.content.path)
  }
  render() {
    let tabBar
    /* let { path } = this.state */
    if(this.props.active) {
       tabBar = (
         <Router>
           <div className="tab-bar-item"
                onClick={ this.onChangeActive }>
              <div className='tab-bar-img'>
                <img className="tab-bar-icon" 
                      alt="图片正在加载中" 
                      src={ this.props.content.activeSrc } />
              </div>
              <div className='tab-bar-title  active'>
                { this.props.content.content }
              </div>
          </div>
         </Router> 
        )
    } else {
      tabBar = (
        <Router>
          <div className="tab-bar-item"
            onClick={this.onChangeActive}>
            <div className='tab-bar-img'>
              <img className="tab-bar-icon" 
                    alt="图片正在加载中" 
                    src={ this.props.content.src } />
            </div>
            <div className='tab-bar-title'>
              { this.props.content.content }
            </div>
          </div>
        </Router>
      )
    }
    return (
      <Fragment>
        { tabBar }
      </Fragment>
    )
  }
  onChangeActive(path) {
    this.props.onChangeActive(path)
  }
  /* onChange(index) {
    console.log(index)
  } */
}

export default TabBarItem