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
  shuffle=(data) =>{
    let ctr = data.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = data[ctr];
        data[ctr] = data[index];
        data[index] = temp;
    }
    return data;
  }
  correctAnswer = data =>{
    const{ score,topScore } = this.state
    const newScore = score + 10
    const NewTopScore = Math.max(newScore,topScore)
    console.log(newScore)

    this.setState({
      data:this.shuffle(data),
      score: newScore,
      topScore: NewTopScore
    })
    
  }

  wrongAnswer = data =>{
    
    this.setState({
      score:0,
      data: this.resetData(data)
    })
  }

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffle(resetData);
  };


   imageClicked = (id) =>{
    let rightGuess = false;
    console.log(id)
    const newData = this.state.data.map( person =>{
    const newPerson ={...person};
      if(newPerson.id === id){
        console.log(newPerson.id)
        if (!newPerson.clicked){
          rightGuess = true;
          newPerson.clicked= true;
        }
      }
      return newPerson;
      
    })
    rightGuess ? this.correctAnswer(newData) : this.wrongAnswer(newData);
  }

    render() {
      return (
          <div className="Game">
            <h1 style={{color:'white'}}>{this.state.score}</h1>
            <h1 style={{color:'white'}}>{this.state.topScore}</h1>
              {this.state.data.map(person =>(
                <Actor key={person.id} src={person.image}
                imgClicked={() =>this.imageClicked(person.id)}></Actor>
              ))}
          </div>
      )
    }
  }

export default Game;  