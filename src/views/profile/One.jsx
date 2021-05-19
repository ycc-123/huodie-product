import React, { Component } from 'react'
class One extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    return ( 
      <div className='one'>
        第一个
      </div>
     );
  }
}
 
export default One;