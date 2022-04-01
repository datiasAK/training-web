import React, { Component } from 'react';
import Menu from './Menu';
import logo from '../assets/img/op-logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  handkeClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() { 
    let visibility = this.state.clicked ? "visible" : "hidden";
    return (
      <header className="header">
        <i
          class={`ico-menu header__icon header__icon--menu ${this.state.clicked ? "hidden": ""}`}
          onClick={this.handkeClick}
        ></i>
        <i
          class={`ico-x header__icon header__icon--x ${visibility}`}
          onClick={this.handkeClick}  
        ></i>
        <img class="header__logo" src={logo} alt="one piece logo"/>
        <div class="header__fill"></div>
        <Menu visibility={visibility}/>
      </header>
    );
  }
}

export default Header;
