import React, { Component } from 'react';
import CharacterSection from './CharacterSection';
import IslandSection from './IslandSection';
import ObjectSection from './ObjectSection';
import Search from './Search';
import Synopsis from './Synopsis';

class Main extends Component {
  render() { 
    return (
      <main className="main">
        <Synopsis />
        <Search />
        <CharacterSection />
        <IslandSection />
        <ObjectSection />
      </main>
    );
  }
}
 
export default Main;
