
import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    
    return (
    <ul className="profile-member-menu-container">
          <li className="profile-member-menu-item">
            <img src={this.props.item.icon} alt=""/>
            <p>{this.props.item.name}</p>
          </li>
          </ul>
    
     );
  }
}
 
export default MenuItem;