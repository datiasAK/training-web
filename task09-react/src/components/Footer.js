import React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img src={this.props.img.src} alt={this.props.img.alt} className="footer__img" />
        <p className="footer__text"> {this.props.text} </p>
      </footer>
    );
  }
}
