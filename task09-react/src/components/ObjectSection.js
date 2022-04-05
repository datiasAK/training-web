import React, { Component } from 'react';
import MysticObject from './MysticObject';
import object from '../assets/img/object.svg'

class ObjectSection extends Component {
  renderObjects(objectCount) {
    const objectName = "Gomu Gomu No Mi";
    const description = "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human."
                      + "It was then accidentally eaten by the series protagonist, Monkey D. Luffy.";
    let objects = [];
    for (let i = 0; i < objectCount; ++i) {
      objects.push(<MysticObject key={i} name={objectName} description={description} img={object} />);
    }
    return objects;
  }

  render() { 
    return (
      <article className="article article--mist">
        <div className="article__container article__container--mist">
          <h3 className="article__title article__title--mist">Mist Objects</h3>
          <a href="#" className="article__link article__link--mist">See all</a>
        </div>
        <div className="article__flex article__flex--mist">
          {this.renderObjects(4)}
        </div>
      </article>
    );
  }
}
 
export default ObjectSection;
