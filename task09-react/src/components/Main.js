import React, { Component } from 'react';
import CharacterSection from './CharacterSection';
import Search from './Search';
import Synopsis from './Synopsis';

class Main extends Component {
  render() { 
    return (
      <main className="main">
        <Synopsis />
        <Search />
        <CharacterSection />
      </main>
    );
  }
}
 
export default Main;
