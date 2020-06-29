import React from 'react';
import './Game.css';
import Actor from './Actor';
import theOffice from '../assets/theOffice.json'
import friends from '../assets/friends.json';
import got from '../assets/got.json';
import Score from './Score';
import Model from './Model'

class Game extends React.Component {
  
  constructor(props){
    super(props);
    this.child = React.createRef();
    this.state= { 
      data: [],
      score : 0,
      topScore: 0,
      goal:0,
      mode:"",
      modelShow:false,
      
    }
}

  componentDidMount() {
    if(this.props.location.state=== "theOffice"){
      this.setState({ data: this.shuffle(theOffice),mode:"THE OFFICE", goal:130 })
    }
    else if(this.props.location.state=== "friends") {
      this.setState({ data: this.shuffle(friends),mode: "Friends", goal:60 })
    }else{
      this.setState({ data: this.shuffle(got),mode: "Game of Thrones", goal:310 })
    }
    ;
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
  
  levelChecker=()=>{
    // test
    if(this.state.score=== 30){
      this.setState({ data: this.shuffle(got),mode:"Game of Thrones", goal:310,score:0, modelShow: true });
    }
    // if(this.state.score===60 && this.state.mode ==="Friends"){
    //   this.setState({ data: this.shuffle(theOffice),mode:"THE OFFICE", goal:130,score:0, modelShow: true });   
    // }
    // else if(this.state.score===130 && this.state.mode ==="THE OFFICE"){
    //   this.setState({ data: this.shuffle(got),mode:"Game of Thrones", goal:310,score:0, modelShow: true }); 
    // }
  }

  closeModel = ()=>{
    this.setState({modelShow:false})
  }
    

    render() {

      return (
        <div >
          <p className="Title">{this.state.mode} <br/> <span style={{fontWeight:200, fontSize:'25px'}}>Goal:{this.state.goal}</span></p>
          <Score score={this.state.score} topScore={this.state.topScore}></Score>
          <div className="Game">
             {this.state.data.map(person =>(
                <Actor key={person.id} src={person.image}
                shake={!this.state.score && this.state.topScore}
                imgClicked={() =>{this.imageClicked(person.id);this.levelChecker()}}></Actor>
              ))}
          </div>
          <Model show={this.state.modelShow} onHide={this.closeModel}/>
          
          </div>
      )
    }
  }

export default Game;  