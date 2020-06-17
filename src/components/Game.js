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
  imageClicked =id =>{
    let guessedRight = false;
    const newData = this.state.data.map( person =>{
      let newPerson ={...person};
      if(newPerson.id == id){
        if (!newPerson.clicked){
          guessedRight =true;
          newPerson.clicked=true;
        }
      }
      return newPerson
    })
    guessedRight? correctAnswer(newData) : wrongAnswer(newData)
  }

    render() {
      return (
          <div className="Game">
              {this.state.data.map(person =>(
                <div>
                <Actor key={person.id} src={person.image}
                imgClicked={this.imageClicked}></Actor>
                </div>
              ))}
          </div>
      )
    }
  }

export default Game;  