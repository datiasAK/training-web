import React, { Component } from 'react';
import Island from './Island';
import dawn from '../assets/img/dawn.svg';
import reverse from '../assets/img/reverse.svg';

class Islandsection extends Component {
  render() { 
    return (
      <article className="article article--islands">
      <div className="article__container article__container--islands">
        <h3 className="article__title article__title--island">Islands</h3>
        <a href="#" className="article__link article__link--islands">See all</a>
      </div>
      <div className="article__flex article__flex--islands">
        <Island name="Dawn Island" location="East Blue" img={dawn} alt="Dawn Island" />
        <Island name="Reverse Mountain" location="Red Line" img={reverse} alt="Reverse Mountain" />
        <Island name="Reverse Mountain" location="Red Line" img={reverse} alt="Reverse Mountain" />
      </div>
    </article>
    );
  }
}
 
export default Islandsection;
