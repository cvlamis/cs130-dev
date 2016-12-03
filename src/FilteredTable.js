import React, { Component } from 'react';
import './Collecti.css';
import x_small from './resources/x2.svg';
import check_small from './resources/check.svg';

class Collectable extends Component {
  render() {
    var played = this.props.collectable.played ? check_small+"#check" : x_small+"#x";
    var favorite = this.props.collectable.favorite ? check_small+"#check" : x_small+"#x";
    return (
      <tr className="Collecti-resultsRow">
        <td className="Collecti-resultsCell">{this.props.collectable.name}</td>
        <td className="Collecti-resultsCell">{this.props.collectable.genre}</td>
        <td className="Collecti-resultsCell">{this.props.collectable.platform}</td>
        <td className="Collecti-resultsCell"><svg className='played-sign' alt='played'><use xlinkHref={played}/></svg></td>
        <td className="Collecti-resultsCell"><svg className='favorite-sign' alt='favorite'><use xlinkHref={favorite}/></svg></td>
      </tr>
    );
  }
}

class ResultsTable extends Component {
  render() {
    var rows = [];
    this.props.collectables.forEach((collectable) => {
      if (collectable.name.toUpperCase().indexOf(this.props.searchText.toUpperCase()) === -1
        || !this.props.genres[collectable.genre]
        || !this.props.platforms[collectable.platform]) {
        return;
      }
      var played = collectable.played ? 'played' : 'unplayed';
      var favorite = collectable.favorite ? 'favorite' : 'not';
      if ((this.props.played !== 'both' && this.props.played !== played)
        || (this.props.favorite !== 'both' && this.props.favorite !== favorite)) {
        return;
      }
      rows.push(<Collectable collectable={collectable} key={collectable.name+collectable.platform} />);
    });
    return (
      <table className="Collecti-resultsTable">
        <thead>
          <tr className="Collecti-resultsHeadRow">
            <th className="Collecti-resultsHead">Name</th>
            <th className="Collecti-resultsHead" width="10%">Genre</th>
            <th className="Collecti-resultsHead" width="10%">Platform</th>
            <th className="Collecti-resultsHead" width="10%">Played</th>
            <th className="Collecti-resultsHead" width="10%">Favorite</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
    this.genres = {
      Arcade: this.Arcade.checked,
      Puzzle: this.Puzzle.checked,
      Racing: this.Racing.checked,
      RPG: this.RPG.checked,
      Strategy: this.Strategy.checked
      
    };
    this.platforms = {
      Android: this.Android.checked,
      Origin: this.Origin.checked,
      PC: this.PC.checked,
      Steam: this.Steam.checked,
      Web: this.Web.checked,
      Wii: this.Wii.checked
    };
    this.props.onUserInput(
      this.searchInput.value,
      this.genres,
      this.platforms,
      this.played.value,
      this.favorite.value
    );
  }
  
  render() {
    return (
      <form className="Collecti-filterForm">
        <label>Search by Name: </label>
        <input 
          className="Collecti-filterObject"
					type='text' 
          placeholder='Search...' 
          value={this.props.searchText}
          ref={(input) => this.searchInput = input}
          onChange={this.handleChange}
        /><br />
      
        <label>Genre: </label>
        <input 
          className="Collecti-filterObject"
					type='checkbox' 
          name='genres' 
          checked={this.props.genres.Arcade} 
          ref={(input) => this.Arcade = input} 
          onChange={this.handleChange}
        />Arcade
        <input 
          className="Collecti-filterObject"
					type='checkbox' 
          name='genres' 
          checked={this.props.genres.Puzzle} 
          ref={(input) => this.Puzzle = input} 
          onChange={this.handleChange}
        />Puzzle
        <input 
          className="Collecti-filterObject"
					type='checkbox' 
          name='genres' 
          checked={this.props.genres.Racing} 
          ref={(input) => this.Racing = input} 
          onChange={this.handleChange}
        />Racing
        <input 
          className="Collecti-filterObject"
					type='checkbox' 
          name='genres' 
          checked={this.props.genres.RPG} 
          ref={(input) => this.RPG = input} 
          onChange={this.handleChange}
        />RPG
        <input 
          className="Collecti-filterObject"
					type='checkbox' 
          name='genres' 
          checked={this.props.genres.Strategy} 
          ref={(input) => this.Strategy = input} 
          onChange={this.handleChange}
        />Strategy
        <br />
        
        <label>Platform: </label>
        <input
          className="Collecti-filterObject"
					type='checkbox'
          name='platforms'
          checked={this.props.platforms.Android} 
          ref={(input) => this.Android = input} 
          onChange={this.handleChange}
        />Android
        <input
          className="Collecti-filterObject"
					type='checkbox'
          name='platforms'
          checked={this.props.platforms.Origin} 
          ref={(input) => this.Origin = input} 
          onChange={this.handleChange}
        />Origin
        <input
          className="Collecti-filterObject"
					type='checkbox'
          name='platforms'
          checked={this.props.platforms.PC} 
          ref={(input) => this.PC = input} 
          onChange={this.handleChange}
        />PC
        <input
          className="Collecti-filterObject"
					type='checkbox'
          name='platforms'
          checked={this.props.platforms.Steam} 
          ref={(input) => this.Steam = input} 
          onChange={this.handleChange}
        />Steam
        <input
          className="Collecti-filterObject"
					type='checkbox'
          name='platforms'
          checked={this.props.platforms.Web} 
          ref={(input) => this.Web = input} 
          onChange={this.handleChange}
        />Web
        <input
          className="Collecti-filterObject"
					type='checkbox'
          name='platforms'
          checked={this.props.platforms.Wii} 
          ref={(input) => this.Wii = input} 
          onChange={this.handleChange}
        />Wii
        <br />
        
        <label>Played: </label>
        <select
          value={this.props.played} 
          ref={(input) => this.played = input} 
          onChange={this.handleChange}
        >
          <option value='both'>Both</option>
          <option value='played'>Played</option>
          <option value='unplayed'>Unplayed</option>
        </select>
        <label>Favorite: </label>
        <select
          value={this.props.favorite} 
          ref={(input) => this.favorite = input} 
          onChange={this.handleChange}
        >
          <option value='both'>Both</option>
          <option value='favorite'>Favorite</option>
          <option value='not'>Not Favorite</option>
        </select>
      </form>
    )
  }
}

class FilteredTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      genres: {
        Arcade: true,
        Puzzle: true,
        Racing: true,
        RPG: true,
        Strategy: true
      },
      platforms: {
        Android: true,
        Origin: true,
        PC: true,
        Steam: true,
        Web: true,
        Wii: true
      },
      played: 'both',
      favorite: 'both'
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(searchText, genres, platforms, played, favorite) {
    this.setState({
      searchText: searchText,
      genres: {
        Arcade: genres.Arcade,
        Puzzle: genres.Puzzle,
        Racing: genres.Racing,
        RPG: genres.RPG,
        Strategy: genres.Strategy
      },
      platforms: {
        Android: platforms.Android,
        Origin: platforms.Origin,
        PC: platforms.PC,
        Steam: platforms.Steam,
        Web: platforms.Web,
        Wii: platforms.Wii
      },
      played: played,
      favorite: favorite
    })
  }
  
  render() {
    return (
      <div className='Collecti-filteredTable'>
        <div className='Collecti-filterBox'>
          <FilterOptions
            searchText={this.state.searchText}
            genres={this.state.genres} 
            platforms={this.state.platforms}
            played={this.state.played}
            favorite={this.state.favorite}
            onUserInput={this.handleUserInput}
          />
        </div>
        <br />
        <div className='Collecti-resultsBox'>
          <ResultsTable 
            collectables={this.props.collectables}
            searchText={this.state.searchText}
            genres={this.state.genres} 
            platforms={this.state.platforms}
            played={this.state.played}
            favorite={this.state.favorite}
          />
        </div>
      </div>
    )
  }
}

export default FilteredTable;