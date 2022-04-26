import React, { Component } from 'react';
import usaFlag from '../public/assets/img/usa-flag.svg';
import spainFlag from '../public/assets/img/spain-flag.svg';


class Menu extends Component {
  render() { 
    return (
      <nav className={`menu ${this.props.visibility}`}>
        <a href="#" className="menu__link">Home</a>
        <a href="#" className="menu__link">Characters</a>
        <a href="#" className="menu__link">Islands</a>
        <a href="#" className="menu__link">Mist Objects</a>
        <button className="menu__lang menu__lang--en">
          <span>English</span>
          <img src={usaFlag.src}/>
        </button>
        <button className="menu__lang menu__lang--es">
          <span>Spanish</span>
          <img src={spainFlag.src}/>
        </button>
      </nav>
    );
  }
}
 
export default Menu;
