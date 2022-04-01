import React, { Component } from 'react';
import CharacterSection from './CharacterSection';
import Islandsection from './IslandSection';
import Search from './Search';
import Synopsis from './Synopsis';

class Main extends Component {
  render() { 
    return (
      <main className="main">
        <Synopsis />
        <Search />
        <CharacterSection />
        <Islandsection />
      </main>
    );
  }
}
 
export default Main;
