import React, { Component } from 'react';
import logo from '../assets/img/op-logo.svg';
import opCharacters from '../assets/img/op-characters.svg';
import opCharactersBig from '../assets/img/op-characters-big.png';

class Synopsis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readAll : false,
    }
  }
  handleClick = () => {
    this.setState({readAll: !this.state.readAll});
  }

  render() { 
    return (
      <>
        <div className={`op-characters ${this.state.readAll ? "read-all" : ""}`}>
          <img className="op-characters__img" src={opCharacters} srcset={`${opCharacters} 768w, ${opCharactersBig} 8530w`} alt="one piece main characters" />
          <div className="op-characters__gradient"></div>
        </div>
          <article className={`synopsis ${this.state.readAll ? "read-all" : ""}`}>
            <img src={logo} alt="one piece logo" className={`synopsis__logo ${this.state.readAll ? "visible" : ""}`} />
            <h2 className="synopsis__title">Synopsis</h2>
            <p className="synopsis__text">Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.</p>
            <p className="synopsis__text">It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.</p>
            <p className={`synopsis__text synopsis__text--read-all ${this.state.readAll ? "visible" : ""}`}>This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.</p> 
            <p className={`synopsis__text synopsis__text--read-all ${this.state.readAll ? "visible" : ""}`}>Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.</p>
            <p className={`synopsis__text synopsis__text--read-all ${this.state.readAll ? "visible" : ""}`}>It is located in the Red Line and is the geographical antipode of Mary Geoise.</p>
            <button className={`synopsis__button ${this.state.readAll ? "clicked" : ""}`} onClick={this.handleClick}>
              <i className="ico-arrow"></i>
              <span>Read All</span>
            </button> 
        </article>
      </>
    );
  }
}
 
export default Synopsis;
