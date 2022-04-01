import React, { Component } from 'react';

class MysticObject extends Component {
  render() { 
    return (
      <section class="mist-object">
        <img src={this.props.img} alt={this.props.alt} class="mist-object__img"/>
        <div class="card-label card-label--mist">
          <h4 class="card-label__name card-label__name--mist">{this.props.name}</h4>
          <p class="card-label__description card-label__description--mist">
            {this.props.children}
          </p>
        </div>
      </section>
    );
  }
}
 
export default MysticObject;
