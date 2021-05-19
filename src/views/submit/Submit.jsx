import React, { Component } from 'react'

import SubmitGoods from './childCom/SubmitGoods'
import SubmitInfo from './childCom/SubmitInfo'
import SubmitBottomBar from './childCom/SubmitBottomBar'

import './style/submit.css'

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='submit'>
        <SubmitGoods />
        <SubmitInfo />
        <SubmitBottomBar /> 
      </div>
    );
  }
}
 
export default Submit;