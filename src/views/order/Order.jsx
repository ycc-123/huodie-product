import React, { Component } from 'react';
import styled from 'styled-components'


const OrderStyle = styled.div`
  .title{
    color:white;
  }
`

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
  console.log('props',this.props) 
  console.log('路由传参',this.props.match.params.id)

   
    return ( 
      <OrderStyle>
          <div>
            <h1 className="title">
              这是一个订单页面
            </h1>
          </div>
      </OrderStyle>
     );
  }
}
 
export default Order;