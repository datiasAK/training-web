import React, { Component } from 'react';
import Character from './Character';
import luffy from '../public/assets/img/monkeydluffy.svg';
import ace from '../public/assets/img/ace.svg';
import zoro from '../public/assets/img/zoro.svg';
import nico from '../public/assets/img/nico.svg';

class CharacterSection extends Component {
  characters = [{ name: 'Monkey D. Luffy', img: luffy.src},
                { name: 'Portgas D. Ace', img: ace.src},
                { name: 'Roronoa Zoro', img: zoro.src},
                { name: 'Nico Robin', img: nico.src}];
  renderCharacters() {
    return this.characters.map((c, index) => {
      return <Character key={index} name={c.name} img={c.img} alt={c.name}/>;
    });
  }
  render() { 
    return (
      <article className="article article--characters">
        <div className="article__container article__container--characters">
          <h3 className="article__title article__title--characters">Characters</h3>
          <a href="#" className="article__link article__link--characters">See all</a>
        </div>
        <div className="article__flex article__flex--characters">
          {this.renderCharacters()}
        </div>
      </article>
    );
  }
}
 
export default CharacterSection;
