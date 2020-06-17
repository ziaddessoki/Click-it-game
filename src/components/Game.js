import React from 'react';
import './Game.css';
import Actor from './Actor';
import theOffice from '../assets/theOffice.json'

class Game extends React.Component {
  state={
    data: theOffice,
    score : 0,
    topScore: 0
  }

    render() {
      return (
          <div className="Game">
              {this.state.data.map(person =>(
                <div>
                <Actor key={person.id} src={person.image}></Actor>
                </div>
              ))}
          </div>
      )
    }
  }

export default Game;  