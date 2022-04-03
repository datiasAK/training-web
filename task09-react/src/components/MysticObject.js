import React, { Component } from 'react';

class MysticObject extends Component {
  render() { 
    return (
      <section className="mist-object">
        <img src={this.props.img} alt={this.props.alt} className="mist-object__img"/>
        <div className="card-label card-label--mist">
          <h4 className="card-label__name card-label__name--mist">{this.props.name}</h4>
          <p className="card-label__description card-label__description--mist">
            {this.props.description}
          </p>
        </div>
      </section>
    );
  }
}
 
export default MysticObject;
