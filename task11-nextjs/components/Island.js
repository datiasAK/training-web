import React, { Component } from 'react';

class Island extends Component {
  render() { 
    return (
      <section className="island">
          <div className="card-label card-label--island">
            <h4 className="card-label__name card-label__name--island">{this.props.name}</h4>
            <p className="card-label__description card-label__description--island">
              <i className="ico-location"></i>
              <span>{this.props.location}</span>
            </p>
          </div>
          <img src={this.props.img} alt={this.props.alt} className="island__img" />
        </section>
    );
  }
}
 
export default Island;
