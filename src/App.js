import React from 'react';

import Weather from './weather/Weather.js';
import RecipeMain from './recipe/RecipeMain.js'
import Meme from './meme/Meme.js'
import Home from './home/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Weather" component={Weather} />
          <Route path="/Recipe" component={RecipeMain} />
          <Route path="/Meme" component={Meme} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
