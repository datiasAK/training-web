import React, { Component } from 'react';

class Character extends Component {
  render() { 
    return (
      <section className="character">
        <div className="character__gradient"></div>
        <h4 className="character__name">{this.props.name}</h4>
        <img src={this.props.img} alt={this.props.alt} className="character__img"/>
      </section>
    );
  }
}
 
export default Character;
