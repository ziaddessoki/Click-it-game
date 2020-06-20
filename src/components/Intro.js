import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import './Intro.css'

const  Intro =(props)=>{
        const[mode,setMode]= useState('theOffice');
        const clicked=()=>{
            let path = `/game`;
    props.history.push(path)
            console.log(mode);
        }
    return(
        <div className="Home">
        <p>Game Instructions - Try to click on every NBA Players picture once. When you click a players picture the grid will automatically shuffle. The goal of the game is click all 15 players pictures once despite the shuffled grid. If you click any players picture twice the game will reset and you must begin again!</p>
        <div>
        <select name="gameMode" value={mode} onChange={e =>setMode(e.target.value)}>
            <option value="theOffice">The Office</option>
            <option value="friends">Friends</option>
        </select>
        </div>
        <button type='submit' onClick={clicked}>Play now</button>
        </div>
    );
    
} 


    

export default Intro;