import React, { Component, Fragment } from 'react'
import SubmitWay from './SubmitWay'

class SubmitInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      way: 'kd',
      wayActive: false
    }
    this.way = [
      { id: 'w101', content: '快递' },
      { id: 'w102', content: '自提' },
      { id: 'w103', content: '送货上门' },
    ]
  }
  render() {
    const { way } = this.state
    const kd = way === 'kd' ? 'block' : 'none'
    const zt = way === 'zt' ? 'block' : 'none'
    const shsm = way === 'shsm' ? 'block' : 'none'
    console.log(this.state.wayActive)
    return (
      <Fragment>
        <div className='submit-info'>
          <ul className='submit-nav claerfix'>
            {this.way.map((item, index) => {
              return (
                <li key={index + item} onClick={(e) => { this.changeActive(e, index) }}>{item.content}</li>
              )
            })}
          </ul>
        </div>
        <div className='submit-container' style={{ display: kd }}>
          <div className='address'>
            123123
          </div>
          <div className='way' onClick={() => { this.changeWay() }}>
            配送方式
          </div>
          <div className='volum'>
            优惠卷
            <span>暂无可用</span>
          </div>
          <div className='message'>
            商家备注:
          </div>
        </div>
        <div className='submit-container' style={{ display: zt }}>
          <div className='address'>
            地址
          </div>
          <div className='way'>
            配送方式
          </div>
          <div className='volum'>
            优惠卷
            <span>暂无可用</span>
          </div>
          <div className='message'>
            商家备注:
          </div>
        </div>
        <div className='submit-container' style={{ display: shsm }}>
          <div className='address'>
            地址
          </div>
          <div className='way'>
            送货时间
          </div>

          <div className='volum'>
            优惠卷
            <span>暂无可用</span>
          </div>
          <div className='message'>
            商家备注:
          </div>
        </div>
        <SubmitWay active={this.state.wayActive} showDrawer={this.showDrawer} />
      </Fragment>

    );
  }
  componentDidMount = () => {
    const li = document.querySelector('.submit-nav li')
    li.classList.add('nav-active')
  }
  changeActive = (e, index) => {
    if (e.target.className !== 'nav-active') {
      const li = document.querySelectorAll('.submit-nav li')
      li.forEach((item, itemIndex) => {
        item.classList.remove('nav-active')
        if (index === itemIndex) {
          item.classList.add('nav-active')
          switch (item.innerHTML) {
            case '快递':
              this.setState({
                way: 'kd'
              })
              break;
            case '自提':
              this.setState({
                way: 'zt'
              })
              break;
            case '送货上门':
              this.setState({
                way: 'shsm'
              })
              break;
            default:
              break;
          }
        }
      })
    }
  }
  changeWay = () => {
    this.setState({
      wayActive: !this.state.wayActive
    })
  }
  showDrawer = () => {
    this.setState({
      wayActive: !this.state.wayActive
    })
  }
}

export default SubmitInfo;