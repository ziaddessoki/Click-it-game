import React, { useState } from 'react';
import './Intro.css'

const  Intro =()=>{
        const[mode,setMode]= useState('theOffice');
        const clicked=()=>{
            // redirt to /game with mode
            console.log(mode);
        }
    return(
        <div className="Home">
        <p>lorem   dsoisdlkjsdoksldsodjl</p>
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