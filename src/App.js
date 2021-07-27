import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterProfile from './components/CharacterProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this._fetchPeople();
  }

  _fetchPeople = async () => {
    const response = await fetch(`https://swapi.dev/api/people/`)
      .then(response => response.json());
    const listOfPeople = response.results
    this.setState({
      characters: listOfPeople
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <Router>
        <nav>
        </nav>
        <Switch>
          <Route exact path='/'>
            <CharacterList
              characters={characters} />
          </Route>
          <Route path='/character/:id'>
            <CharacterProfile
              characters={characters}
            />
          </Route>
          <Route path="*">
              <h2>Page Not found :(</h2>
              <Link to="/">Click here to go back home</Link>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

