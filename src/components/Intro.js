import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import './Intro.css'

const  Intro =(props)=>{
        const[mode,setMode]= useState('theOffice');
        const clicked=()=>{
            let path = `/game`;
    props.history.push(path,mode)
            console.log(mode);
        }
    return(
        <div className="Home">
            <h>Click-it</h>
        <p>Click on any of the character cards. 
            They will be reshuffled and you'll have to choose another. 
            As you keep choosing unique characters, you'll gain hearts and magic power.
            Choose poorly, and you'll lose your magic power and have to start again.
            Only when you surpass your total from the previous attempt will you begin to gain hearts again.</p>
        <div>
        <select name="gameMode" value={mode} onChange={e =>setMode(e.target.value)}>
            <option value="friends">Friends - Easy</option>
            <option value="theOffice">The Office - Medium</option>
            
        </select>
        </div>
        <button type='submit' onClick={clicked}>Play now</button>
        </div>
    );
    
} 


    

export default Intro;