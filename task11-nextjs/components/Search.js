import React, { Component } from 'react';


class Search extends Component {
  render() { 
    return (
      <form className="search">
        <i className="ico-search search__icon"></i>
        <input type="text" className="search__input" placeholder="Search Characters, Islands or Objects"/>
      </form>
    );
  }
}
 
export default Search;
