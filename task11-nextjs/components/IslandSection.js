import React, { Component } from 'react';
import Island from './Island';
import dawn from '../public/assets/img/dawn.svg';
import reverse from '../public/assets/img/reverse.svg';

class IslandSection extends Component {
  islands = [{ name: "Dawn Island", location: "East Blue", img: dawn.src},
             { name: "Reverse Island", location: "Red Line", img: reverse.src},
             { name: "Reverse Island", location: "Red Line", img: reverse.src}];
  renderIslands() {
    return this.islands.map((i, index) => {
      return <Island key={index} name={i.name} location={i.location} img={i.img} alt={i.name}/>;
    });
  }
  render() { 
    return (
      <article className="article article--islands">
        <div className="article__container article__container--islands">
          <h3 className="article__title article__title--island">Islands</h3>
          <a href="#" className="article__link article__link--islands">See all</a>
        </div>
        <div className="article__flex article__flex--islands">
          {this.renderIslands()}
        </div>
      </article>
    );
  }
}
 
export default IslandSection;
