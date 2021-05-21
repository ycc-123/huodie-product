import React, { Component } from 'react'
import styled from 'styled-components'

/* import Drawer from 'common/drawer/Drawer' */

class SubmitInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      way: 'kd',
      wayActive: false,
      ppp: '配送方式'
    }
    this.way = [
      { id: 'w101', content: '快递' },
      { id: 'w102', content: '自提' },
      { id: 'w103', content: '送货上门' },
    ]
    this.wayName = [
      { id: 444, content: '申通' },
      { id: 445, content: '中通' },
      { id: 446, content: '顺丰' }
    ]
  }
  render() {
    const { way } = this.state
    const kd = way === 'kd' ? 'block' : 'none'
    const zt = way === 'zt' ? 'block' : 'none'
    const shsm = way === 'shsm' ? 'block' : 'none'
    /* const drawerStyle = {
      width: '100%',
      height: '6rem'
    } */
    return (
      <SubmitInfoStyle>
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
            <img className="addressimg1" src="" alt="" />
            <div className="addressframe">
              <div className="addressframek1">
                <div className="addressframek1text1">张三丰</div>
                <div className="addressframek1text2">12345678910</div>
              </div>
              <div className="addressframek2">
                <div className="addressframek2text">浙江省</div>
                <div className="addressframek2text">温州市</div>
                <div className="addressframek2text">瑞安市</div>
              </div>
              <div className="addressframek3">
                XX街道火蝶科技三楼
              </div>
            </div>
          </div>
          <div className='way' onClick={() => { this.changeWay() }}>
            {this.state.ppp}
            <ul className='way-box'>
              {this.wayName.map((item, index) => {
                return (
                  <li key={item + index} className='way-select'
                  /* onClick={(e) => { this.changeText(e) }} */
                  >{item.content}</li>
                )
              })}
            </ul>
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
          <div className='submitzongkuang'>
            <div className='submitzongkf'>选择门店</div>
            <div className='subxiantiao'></div>
            <div className='submitzongkf subzkfdis'>
              <div>收货人</div>
              <input className='subzkfipt' style={{textAlign:'right'}}type="text" placeholder="请填写收货人姓名" />
            </div>
            <div className='subxiantiao'></div>
            <div className='submitzongkf subzkfdis'>
              <div>联系电话</div>
              <input className='subzkfipt' style={{textAlign:'right'}}type="text" placeholder="请填写联系电话" />
            </div>
            <div className='subxiantiao'></div>
            <input className='submitzongkf subzkfipt' type="text" placeholder="自提说明自提说明" />
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
        {/* <Drawer
          active={this.state.wayActive}
          showDrawer={this.showDrawer}
          changeText={(text) => { this.changeText(text) }}
          style={drawerStyle}>
          <ul className='way-box'>
            {this.wayName.map((item, index) => {
              return (
                <li key={item + index} className='way-select'
                  onClick={(e) => { this.changeText(e) }}
                >{item.content}</li>
              )
            })}
          </ul>
        </Drawer> */}
      </SubmitInfoStyle>

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
  changeText = (text) => {
    this.setState({
      ppp: text
    })
  }
}

const SubmitInfoStyle = styled.div`
.address{
  display:flex;
  align-items:center;
}
.addressimg1{
  width:.8rem;
  height:.8rem;
}
.addressframe{
 margin-left:.4rem;
}
.addressframek1{
  display: flex;
  align-items: baseline;
}
.addressframek1text1{
  font-size:.4rem;
  font-weight:600;
}
.addressframek1text2{
  margin-left:.4rem;
  font-size:.27rem;
  font-weight:600;
}
.addressframek2{
  display: flex;
  font-size:.32rem;
  font-weight:600;
}
.addressframek2text{
  margin-right:.14rem;
}
.addressframek3{
  display: flex;
  font-size:.32rem;
}
.submitzongkuang{
  background:white;
  border-radius:3%;
}
.submitzongkf{
  font-size:.32rem;
  height:1.12rem;
  line-height:1.12rem;
  margin: 0px 0.4rem;
}
.subzkfdis{
  display:flex;
  justify-content:space-between;
}
.subzkfipt{
  border:none;
}
.subxiantiao{
  border:.007rem solid #CCC;
}
`

export default SubmitInfo;

