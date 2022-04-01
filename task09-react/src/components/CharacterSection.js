import React, { Component } from 'react';
import Character from './Character';
import luffy from '../assets/img/monkeydluffy.svg';
import ace from '../assets/img/ace.svg';
import zoro from '../assets/img/zoro.svg';
import nico from '../assets/img/nico.svg';

class CharacterSection extends Component {
  render() { 
    return (
      <article className="article article--characters">
        <div className="article__container article__container--characters">
          <h3 className="article__title article__title--characters">Characters</h3>
          <a href="#" className="article__link article__link--characters">See all</a>
        </div>
        <div className="article__flex article__flex--characters">
          <Character name="Monkey D. Luffy" img={luffy} alt="Monkey D. Luffy" />
          <Character name="Portgas D. Ace" img={ace} alt="Ace" />
          <Character name="Roronoa Zoro" img={zoro} alt="Zoro" />
          <Character name="Nico Robin" img={nico} alt="Nico Robin" />
        </div>
      </article>
    );
  }
}
 
export default CharacterSection;
