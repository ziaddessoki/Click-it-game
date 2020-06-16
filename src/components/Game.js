import React from 'react';
import './Game.css';
import theOffice from '../assets/theOffice.json'

class Game extends React.Component {
  state={
    data: theOffice,
    score : 0,
    topScore: 0
  }

    render() {
      return (
          <div className='Game'>
              <h1>Hello, {this.props.name} lorem10</h1>;
          </div>
      )
    }
  }

export default Game;  