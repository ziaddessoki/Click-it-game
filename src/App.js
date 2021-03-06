import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Game from './components/Game'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Intro}/>
      <Route path="/game" component={Game}/>
      <Redirect to="/"/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
